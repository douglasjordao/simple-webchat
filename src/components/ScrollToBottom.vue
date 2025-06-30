<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

import Button from '@/components/Button.vue';

type Props = {
  target: HTMLElement | undefined;
  container: HTMLElement | undefined;
};

const props = defineProps<Props>();

const showScrollButton = ref<boolean>(false);

async function scrollToBottom(): Promise<void> {
  const el = props.container;

  if (!el) return;

  await nextTick();

  el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
}

defineExpose({ scrollToBottom });

watch(
  () => [props.target, props.container],
  ([target, container]) => {
    if (!target || !container) return;

    useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        showScrollButton.value = !isIntersecting;
      },
      {
        root: container,
        threshold: 1.0,
      },
    );
  },
  { immediate: true },
);
</script>

<template>
  <Transition name="fade">
    <Button
      v-if="showScrollButton"
      class="scroll-button"
      icon="pi pi-arrow-down"
      @click="scrollToBottom"
    />
  </Transition>
</template>

<style lang="scss" scoped>
.scroll-button {
  position: absolute;
  bottom: 180px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  align-self: center;
  margin-top: -10px;
  margin-bottom: 10px;
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid var(--primary-color);
  background-color: var(--white);
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.2s;

  &:hover {
    color: var(--white);
    background-color: var(--primary-color);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
import { computed, ref, nextTick, watch } from 'vue';
import { useChatStore } from '@/store';

import Header from '@/components/Header.vue';
import ChatInput from '@/components/ChatInput.vue';
import Message from '@/components/Message.vue';
import ScrollToBottom from '@/components/ScrollToBottom.vue';

const chatStore = useChatStore();

const messages = computed(() => chatStore.messages);

const chatContentRef = ref<HTMLElement>();
const chatContentBottomRef = ref<HTMLElement>();
const scrollToBottomRef = ref<InstanceType<typeof ScrollToBottom>>();

watch(
  () => messages.value.length,
  async () => {
    await nextTick();

    scrollToBottomRef.value?.scrollToBottom();
  },
);
</script>

<template>
  <div class="chat flex flex-col justify-between h-full">
    <Header />

    <div ref="chatContentRef" class="chat__content p-5 h-full w-full">
      <Message
        v-for="(message, index) in messages"
        :key="index"
        :value="message.value"
        :owner="message.owner"
        :avatar="message.avatar"
        :audio="message.audio"
      />
      <div ref="chatContentBottomRef"></div>
    </div>

    <ScrollToBottom
      ref="scrollToBottomRef"
      :target="chatContentBottomRef"
      :container="chatContentRef"
    />

    <div class="w-full flex flex-col justify-center items-center p-5">
      <ChatInput />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat {
  position: relative;
  width: 600px;
  height: 800px;
  border-radius: 10px;
  border: 1px solid var(--surface-border);
  background-color: var(--surface-card);

  &__content {
    overflow-y: scroll;
    background-color: var(--white);

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

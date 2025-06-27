<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { MessageProps } from '@/types/message';

import DOMPurify from 'dompurify';
import * as Marked from 'marked';

import Avatar from '@/components/Avatar.vue';
import Audio from '@/components/Audio.vue';

const props = withDefaults(defineProps<MessageProps>(), {
  owner: 'user',
});

const sanitizedMessage = ref<string>('');

const messageMargin = ref<{ [key: string]: string }>({
  user: 'ml-auto',
  agent: 'mr-auto',
});
const messageJustify = ref<{ [key: string]: string }>({
  user: 'justify-end',
  agent: 'justify-start',
});
const messageFlex = ref<{ [key: string]: string }>({
  user: 'flex-row-reverse',
  agent: 'flex-row',
});
const messageTextAlign = ref<{ [key: string]: string }>({
  user: 'text-end',
  agent: 'text-start',
});

async function sanitize(message: string): Promise<string> {
  return DOMPurify.sanitize(await Marked.parse(message));
}

onMounted(async () => {
  if (!props.value) return;

  sanitizedMessage.value = await sanitize(props.value);
});
</script>

<template>
  <div class="flex items-end" :class="messageFlex[owner]">
    <Avatar :src="avatar" height="30px" width="30px" />
    <Audio v-if="audio" :value="audio" class="mt-7 mx-5" />
    <div
      v-else
      class="message flex p-4 mt-5 mx-5"
      :class="[
        `message--${owner}`,
        messageMargin[owner],
        messageJustify[owner],
        messageTextAlign[owner],
      ]"
    >
      <span v-html="sanitizedMessage"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message {
  position: relative;
  width: fit-content;
  max-width: 60%;
  min-height: 50px;
  border-radius: 10px;

  &--user::after,
  &--agent:after {
    content: '';
    position: absolute;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }

  &--user::after {
    right: -18px;
    bottom: -5px;
    border-left-color: var(--primary-color);
  }

  &--agent::after {
    left: -18px;
    bottom: -5px;
    border-right-color: var(--surface-secondary);
  }

  &--user {
    color: var(--white);
    background-color: var(--primary-color);

    :deep(a) {
      color: var(--white);
    }
  }

  &--agent {
    color: var(--text-color);
    background-color: var(--surface-secondary);

    :deep(a) {
      color: var(--primary-color);
    }
  }

  :deep(a) {
    text-decoration: underline;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.5rem;
    transition: color 0.2s ease-in-out;
  }
}
</style>

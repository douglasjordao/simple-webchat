import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { MessageProps } from '@/types/message';

export const useChatStore = defineStore('chat-store', () => {
  const messages = ref<MessageProps[]>([]);

  return {
    messages,
  };
});

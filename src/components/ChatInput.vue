<script setup lang="ts">
import { ref } from 'vue';
import { useChatStore, useUserStore } from '@/store';
import { useAudioStore } from '@/store';

import Recorder from '@/components/Recorder.vue';
import Button from '@/components/Button.vue';

const chatStore = useChatStore();
const audioStore = useAudioStore();
const userStore = useUserStore();

const message = ref<string>('');

function setMessage(e: KeyboardEvent): void {
  e.preventDefault();

  if (!message.value.trim()) return;

  chatStore.messages.push({
    value: message.value,
    owner: 'user',
    avatar: userStore.avatar,
  });

  message.value = '';
}
</script>

<template>
  <div class="chat-input flex flex-col p-4">
    <input
      v-model="message"
      type="text"
      placeholder="Type your message here..."
      @keyup.enter="setMessage"
    />

    <div
      class="chat-input__actions flex items-center justify-end mt-auto ml-auto"
    >
      <Recorder />
      <Button
        v-if="!audioStore.isRecording"
        icon="pi pi-send"
        @click="setMessage"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-input {
  width: 100%;
  min-height: 150px;
  background: var(--white);
  border-radius: 30px;

  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    color: var(--secondary-color);
  }

  &__actions {
    min-height: 50px;
    min-width: 100px;

    :deep(i) {
      font-size: 20px;
    }
  }
}
</style>

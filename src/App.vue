<script setup lang="ts">
import { onMounted } from 'vue';
import { useChatStore } from '@/store';

import Chat from '@/components/Chat.vue';

const chatStore = useChatStore();

onMounted(async () => {
  const response = await fetch('simple-webchat/mocks/messages.json');
  const data = await response.json();

  chatStore.messages = data;
});
</script>

<template>
  <div class="flex justify-center items-center h-screen w-screen p-4">
    <Chat />
  </div>
</template>

<style>
@import 'tailwindcss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  background-color: var(--surface-ground);
}
</style>

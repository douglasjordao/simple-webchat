import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAudioStore = defineStore('audio-store', () => {
  const isRecording = ref<boolean>(false);

  return {
    isRecording,
  };
});

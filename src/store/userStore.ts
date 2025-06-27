import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user-store', () => {
  const avatar = ref<string>('https://i.pravatar.cc/300?img=3');

  return {
    avatar,
  };
});

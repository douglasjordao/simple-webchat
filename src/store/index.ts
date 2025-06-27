import { createPinia } from 'pinia';
import { useAudioStore } from './audioStore';
import { useChatStore } from './chatStore';
import { useUserStore } from './userStore';

export const store = createPinia();

export { useAudioStore, useChatStore, useUserStore };

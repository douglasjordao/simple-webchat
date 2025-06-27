<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';

import WaveSurfer from 'wavesurfer.js';

const props = withDefaults(defineProps<{ value?: string }>(), {
  value: '',
});

const containerRef = ref<string | HTMLElement>('');
let wavesurfer: WaveSurfer;

const isPlaying = ref<boolean>(false);
const currentTime = ref<string>(formatTime(0));
const totalTime = ref<string>(formatTime(0));

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function togglePlayback(): void {
  isPlaying.value = !isPlaying.value;
  wavesurfer.playPause();
}

onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: containerRef.value,
    waveColor: '#4F4A85',
    progressColor: '#383351',
    backend: 'WebAudio',
    barHeight: 5,
    height: 20,
    url: props.value,
  });

  wavesurfer.on('ready', () => {
    totalTime.value = formatTime(wavesurfer.getDuration());
  });

  wavesurfer.on('audioprocess', () => {
    currentTime.value = formatTime(wavesurfer.getCurrentTime());
  });

  wavesurfer.on('finish', () => {
    isPlaying.value = false;
    currentTime.value = formatTime(0);
  });

  wavesurfer.on('interaction', () => {
    wavesurfer.play();
  });
});

onBeforeUnmount(() => {
  wavesurfer.destroy();
});
</script>

<template>
  <div
    class="audio flex items-center border-1 border-blue-300 rounded-full py-2 px-3"
  >
    <button @click="togglePlayback" class="flex items-center">
      <i :class="isPlaying ? 'pi pi-pause' : 'pi pi-play'" />
    </button>
    <div class="flex-1 px-3" ref="containerRef" />
    <span class="text-sm text-gray-600"
      >{{ currentTime }} / {{ totalTime }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
.audio {
  width: 60%;
}
</style>

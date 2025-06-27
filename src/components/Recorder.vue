<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useAudioStore, useChatStore, useUserStore } from '@/store';

import Button from '@/components/Button.vue';
import RecordRTC from 'recordrtc';

const audioStore = useAudioStore();
const chatStore = useChatStore();
const userStore = useUserStore();

let recorder: RecordRTC | null;
let stream: MediaStream | null;

async function setMicrophone() {
  if (
    typeof navigator.mediaDevices === 'undefined' ||
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia
  ) {
    alert("Navigator doesn't support audio capture");
  }

  if (!navigator.mediaDevices) {
    alert('Device seems to use a deprecated API verison for audio capture');
  }

  try {
    stream = await navigator.mediaDevices?.getUserMedia({
      audio: true,
    });
  } catch {
    alert('Cannot access microphone');
  }
}

async function startRecording() {
  await setMicrophone();

  if (!stream) return;

  recorder = new RecordRTC(stream, {
    type: 'audio',
    mimeType: 'audio/webm',
  });

  recorder.startRecording();

  audioStore.isRecording = true;
}

function clearContext() {
  audioStore.isRecording = false;

  if (recorder) {
    recorder.destroy();
    recorder = null;
  }

  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
}

async function stopRecording() {
  if (!recorder || !audioStore.isRecording) return;

  audioStore.isRecording = false;

  recorder.stopRecording(() => {
    recorder?.getDataURL((dataURL: string) => {
      chatStore.messages.push({
        owner: 'user',
        audio: dataURL,
        avatar: userStore.avatar,
      });
      clearContext();
    });
  });
}

async function cancelRecording() {
  if (!recorder || !audioStore.isRecording) return;

  recorder.stopRecording();

  clearContext();
}

onUnmounted(() => {
  cancelRecording();
  clearContext();
});
</script>

<template>
  <div v-if="audioStore.isRecording" class="flex justify-center items-center">
    <Button
      @click="cancelRecording"
      size="lg"
      icon="pi pi-stop-circle"
      variant="danger"
    />
    <Button
      @click="stopRecording"
      size="lg"
      icon="pi pi-check-circle"
      variant="success"
    />
  </div>
  <Button v-else @click="startRecording" size="lg" icon="pi pi-microphone" />
</template>

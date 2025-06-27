<script setup lang="ts">
withDefaults(defineProps<{ src?: string; height?: string; width?: string }>(), {
  height: '50px',
  width: '50px',
  src: 'https://i.pravatar.cc/300',
});
</script>

<template>
  <img :src="src" alt="avatar" class="avatar" :height="height" :width="width" />
</template>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  background-color: var(--secondary-hover);
}
</style>

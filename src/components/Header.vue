<script lang="ts" setup>
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="header w-full flex flex-col justify-center items-start">
    <div class="flex items-center w-full py-4">
      <Button
        icon="pi pi-chevron-left"
        class="mx-2"
        style="width: 40px; height: 40px"
      />
      <Avatar src="https://i.pravatar.cc/300?img=5" />
      <h1 class="text-3xl font-bold ml-3">Agent</h1>
      <Button
        icon="pi pi-info-circle"
        class="mx-3 ml-auto"
        size="lg"
        style="width: 40px; height: 40px"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--border-color);
}
</style>

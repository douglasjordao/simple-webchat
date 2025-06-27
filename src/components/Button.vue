<script lang="ts" setup>
type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'secondary' | 'success' | 'danger';

withDefaults(
  defineProps<{
    icon?: string;
    label?: string;
    size?: Size;
    variant?: Variant;
  }>(),
  {
    text: false,
    size: 'md',
    variant: 'primary',
  },
);
</script>

<template>
  <button class="button" :class="`button--${size} button--${variant}`">
    <i v-if="icon" :class="icon"></i>
    <slot v-if="!label"></slot>
    <span v-else>{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
$primary-color: var(--primary-color);
$secondary-color: var(--secondary-color);

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 50%;
  color: var(--primary-color);
  cursor: pointer;

  &--sm {
    i {
      font-size: small;
    }
  }

  &--md {
    i {
      font-size: medium;
    }
  }

  &--lg {
    i {
      font-size: large;
    }
  }

  &--primary {
    color: var(--primary-color);

    &:hover {
      background-color: var(--primary-hover);
    }
  }

  &--secondary {
    color: var(--secondary-color);

    &:hover {
      background-color: var(--secondary-hover);
    }
  }

  &--success {
    color: var(--success);

    &:hover {
      background-color: var(--success-hover);
    }
  }

  &--danger {
    color: var(--danger);

    &:hover {
      background-color: var(--danger-hover);
    }
  }

  span {
    font-size: 16px;
    color: var(--primary-color);
  }
}
</style>

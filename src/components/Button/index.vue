<script setup lang="ts">
defineProps<{
  disabled: boolean;
}>();
</script>

<template>
  <button :disabled="disabled">
    <slot>click</slot>
  </button>
</template>



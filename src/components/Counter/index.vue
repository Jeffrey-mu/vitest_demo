<template>
  <button @click="handleClick">Increment</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["increment"]);
const count = ref(0);
function handleClick() {
  count.value += 1;
  emit("increment", {
    count: count.value,
    isEven: count.value % 2 === 0,
  });
}
</script>

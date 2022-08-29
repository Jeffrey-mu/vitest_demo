<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <main>
    <HelloWorld />
    <Button :disabled="true" />
  </main>
</template>

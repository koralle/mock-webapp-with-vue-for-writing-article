<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <UApp>
    <UInput v-model="value" />
  </UApp>
</template>

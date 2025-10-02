<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const value = ref('');
</script>

<template>
  <UApp>
    <RouterView />
  </UApp>
</template>

<script setup lang="ts">
import Card from './components/Card.vue';
</script>

<template>
  <main class="grid place-content-center w-[100svi] min-h-[100svb]">
    <Card>
      <slot />
    </Card>
  </main>
</template>

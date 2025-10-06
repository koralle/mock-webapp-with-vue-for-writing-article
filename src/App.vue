<script setup lang="ts">
import { RouterView } from 'vue-router';
import Layout from './layout.vue';
</script>

<template>
  <UApp>
    <Layout>
      <RouterView />
    </Layout>
  </UApp>
</template>

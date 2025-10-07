<script lang="ts">
interface ButtonProps {
  label: string;
}
</script>
<script setup lang="ts">
const { label } = defineProps<ButtonProps>();
</script>

<template>
  <button
    class="inline-flex justify-center items-center w-[stretch] h-[2.5rem] rounded-[6px] font-bold text-white bg-slate-800"
  >
    {{ label }}
  </button>
</template>

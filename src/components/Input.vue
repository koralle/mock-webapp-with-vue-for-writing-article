<script lang="ts">
interface InputProps {
  id: string;
  name: string;
  required?: boolean;
  invalid?: boolean;
  type?: string;
}
</script>

<script setup lang="ts">
import { useId } from 'vue';

const { id = useId(), name, required = false, invalid = false, type = 'text' } = defineProps<InputProps>();

const model = defineModel<string>();
</script>

<template>
  <input
    :id
    v-model="model"
    :name="name"
    :required
    :aria-invalid="invalid"
    :type
    :class="['w-[stretch] h-[2.25rem]', 'px-[1em]', 'rounded-[6px]', 'border border-slate-400']"
    v-bind="{ ...$attrs }"
  />
</template>

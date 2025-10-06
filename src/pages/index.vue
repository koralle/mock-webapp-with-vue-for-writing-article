<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';
import { reactive } from 'vue';

const loginSchema = z.object({
  email: z.email('有効なメールアドレスを入力してください。'),
  password: z
    .string('パスワードは必須です。')
    .max(128, 'パスワードは128文字以内で入力してください。')
    .regex(/^[a-zA-Z0-9]+$/, 'パスワードは半角英数字で入力してください。')
});

type LoginSchema = z.output<typeof loginSchema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'ログイン成功',
    description: 'フォームの値が送信できました。',
    color: 'success',
    progress: false
  });
}
</script>

<template>
  <UPage class="grid place-content-center">
    <UPageCard title="ログイン">
      <UForm
        class="grid gap-6"
        :schema="loginSchema"
        :state="state"
        @submit="onSubmit"
      >
        <UFormField
          label="メールアドレス"
          name="email"
          required
          hint="必須"
          description="例：frontend@example.com"
        >
          <UInput
            class="w-[stretch]"
            size="lg"
            required
            v-model="state.email"
          />
        </UFormField>

        <UFormField
          label="パスワード"
          name="password"
          required
          hint="必須"
          description="半角英数字128文字以内で入力してください。"
        >
          <UInput
            class="w-[stretch]"
            size="lg"
            type="password"
            required
            v-model="state.password"
          />
        </UFormField>

        <UButton
          type="submit"
          size="lg"
          class="w-[stretch] inline-flex justify-center align-center"
        >
          ログイン
        </UButton>
      </UForm>
    </UPageCard>
  </UPage>
</template>

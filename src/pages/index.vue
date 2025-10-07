<script setup lang="ts">
import * as z from 'zod';
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { ref, useId } from 'vue';

const hasCompletedSubmit = ref(false);

const loginSchema = z.object({
  email: z.email('有効なメールアドレスを入力してください。'),
  password: z
    .string('パスワードは必須です。')
    .max(128, 'パスワードは128文字以内で入力してください。')
    .regex(/^[a-zA-Z0-9]+$/, 'パスワードは半角英数字で入力してください。')
});

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginSchema)
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');

const onSubmit = handleSubmit(() => {
  hasCompletedSubmit.value = true;
});

const emailId = useId();
const passwordId = useId();
</script>

<template>
  <form
    class="grid gap-10"
    @submit="onSubmit"
  >
    <fieldset class="grid gap-6">
      <label
        :for="emailId"
        class="grid gap-1"
      >
        <span>メールアドレス</span>
        <Input
          :id="emailId"
          name="email"
          required
          :invalid="Boolean(errors.email)"
          autocomplete="email"
          v-model="email"
          v-bind="emailAttrs"
        />
        <p class="text-red-500">{{ errors.email }}</p>
      </label>

      <label
        :for="passwordId"
        class="grid gap-1"
      >
        <span>パスワード</span>
        <Input
          :id="passwordId"
          name="password"
          required
          type="password"
          :invalid="Boolean(errors.password)"
          autocomplete="current-password"
          v-model="password"
          v-bind="passwordAttrs"
        />
        <p class="text-red-500">{{ errors.password }}</p>
      </label>
    </fieldset>

    <Button label="ログイン" />
  </form>

  <p
    v-if="hasCompletedSubmit"
    class="font-bold"
  >
    ログインに成功しました。
  </p>
</template>

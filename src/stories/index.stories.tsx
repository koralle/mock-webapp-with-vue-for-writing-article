import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within, userEvent } from 'storybook/test';

import LoginPage from '../pages/index.vue';

const meta = {
  title: '画面 / ログイン画面',
  component: LoginPage
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialState = {
  name: '初期表示'
} satisfies Story;

export const LoginCompleted = {
  name: 'ログイン成功',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('メールアドレスを入力する', async () => {
      const emailInput = await canvas.findByRole('textbox', { name: 'メールアドレス' });
      await userEvent.type(emailInput, 'frontend@example.com', { delay: 100 });
    });

    await step('パスワードを入力する', async () => {
      const passwordInput = await canvas.findByLabelText('パスワード');
      await userEvent.type(passwordInput, 'password', { delay: 100 });
    });

    await step('「ログイン」ボタンをクリックする', async () => {
      const submitButton = await canvas.findByRole('button', { name: 'ログイン' });
      await userEvent.click(submitButton);
    });
  }
} satisfies Story;

export const InvalidEmail = {
  name: '無効なメールアドレスを入力する',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('メールアドレスを入力する', async () => {
      const emailInput = await canvas.findByRole('textbox', { name: 'メールアドレス' });
      await userEvent.type(emailInput, 'hello', { delay: 100 });

      await expect(emailInput).toBeInvalid();
    });
  }
} satisfies Story;

export const EmptyPassword = {
  name: 'パスワードが空',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('メールアドレスを入力する', async () => {
      const emailInput = await canvas.findByRole('textbox', { name: 'メールアドレス' });
      await userEvent.type(emailInput, 'frontend@example.com', { delay: 100 });
    });

    await step('パスワード入力をスキップする', async () => {
      const passwordInput = await canvas.findByLabelText('パスワード');
      await userEvent.click(passwordInput, { delay: 100 });

      await userEvent.tab();
    });
  }
} satisfies Story;

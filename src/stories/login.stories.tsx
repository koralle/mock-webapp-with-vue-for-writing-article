import type { Meta, StoryObj } from '@storybook/vue3-vite';

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
  play: async ({ canvas, userEvent, step }) => {
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
  play: async ({ canvas, userEvent, step }) => {
    await step('メールアドレスを入力する', async () => {
      const emailInput = await canvas.findByRole('textbox', { name: 'メールアドレス' });
      await userEvent.type(emailInput, 'hello', { delay: 100 });
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

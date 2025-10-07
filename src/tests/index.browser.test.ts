import { composeStories } from '@storybook/vue3-vite';
import { page, userEvent } from '@vitest/browser/context';

import * as LoginPageStories from '../stories/index.stories';

import { render } from 'vitest-browser-vue';

const composedStories = composeStories(LoginPageStories);

describe('LoginPage', () => {
  describe('`初期表示`Storyに対するテスト', () => {
    const { InitialState } = composedStories;

    test('画面が正しくレンダリングされていること', async () => {
      await InitialState.run();

      const emailInput = page.getByRole('textbox', { name: 'メールアドレス' });
      await expect.element(emailInput).toBeVisible();

      const passwordInput = page.getByLabelText('パスワード');
      await expect.element(passwordInput).toBeVisible();
    });

    test('「メールアドレス」フィールドに無効なメールアドレスを入力すると、無効な入力となること', async () => {
      render(InitialState);

      const emailInput = page.getByRole('textbox', { name: 'メールアドレス' });
      await userEvent.type(emailInput, 'sample');
      await userEvent.tab();

      await expect.element(emailInput).toBeVisible();
      await expect.element(emailInput).toBeInvalid();

      const errorMessage = page.getByText('有効なメールアドレスを入力してください。');
      await expect.element(errorMessage).toBeVisible();
    });
  });

  describe('`初期表示`Storyに対するテスト', () => {
    const { InvalidEmail } = composedStories;

    test('画面が正しくレンダリングされていること', async () => {
      await InvalidEmail.run();

      const emailInput = page.getByRole('textbox', { name: 'メールアドレス' });
      await expect.element(emailInput).toBeVisible();
      await expect.element(emailInput).toBeInvalid();

      const passwordInput = page.getByLabelText('パスワード');
      await expect.element(passwordInput).toBeVisible();
    });
  });
});

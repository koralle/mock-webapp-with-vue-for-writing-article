import type { Meta, StoryObj } from '@storybook/vue3-vite';

import LoginPage from '../pages/index.vue';

const meta = {
  component: LoginPage
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {} satisfies Story;

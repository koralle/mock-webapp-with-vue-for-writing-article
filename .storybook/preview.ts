import type { Preview } from '@storybook/vue3-vite';
import { setup } from '@storybook/vue3-vite';
import { createRouter, createMemoryHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import '../src/assets/css/styles.css';
import Layout from '../src/layout.vue';

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});

setup((app) => {
  app.use(router);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    () => ({
      components: {
        Layout
      },
      template: `
        <Layout>
          <story />
        </Layout>
      `
    })
  ]
};

export default preview;

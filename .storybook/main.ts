import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(currentConfig) {
    // Teaching note: the components stay React Native components. Only the
    // documentation site swaps their renderer for react-native-web.
    return mergeConfig(currentConfig, {
      base: process.env.STORYBOOK_BASE_PATH || '/',
      define: {
        global: 'globalThis',
      },
      resolve: {
        alias: [{ find: /^react-native$/, replacement: 'react-native-web' }],
      },
    });
  },
};

export default config;

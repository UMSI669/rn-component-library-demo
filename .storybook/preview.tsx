import type { Preview } from '@storybook/react-vite';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { View } from 'react-native';

import { tokens } from '../src/tokens';

const preview: Preview = {
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: 'stretch',
          minWidth: 280,
          padding: tokens.spacing.xl,
        }}
      >
        <Story />
      </View>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
      options: {
        canvas: { name: 'Canvas', value: tokens.color.canvas },
        paper: { name: 'Paper', value: tokens.color.surface },
        night: { name: 'Night', value: '#172033' },
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: {
        ...INITIAL_VIEWPORTS,
        compactPhone: {
          name: 'Compact phone',
          styles: { width: '360px', height: '740px' },
          type: 'mobile',
        },
      },
    },
  },
};

export default preview;

import { View } from 'react-native';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

import { tokens } from '../src/tokens.js';

/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  // Wrap every story in a consistently sized and padded container.
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

  // Configure global behavior for Storybook and its add-ons.
  parameters: {
    // Automatically treat props beginning with "on" as event handlers.
    actions: {
      argTypesRegex: '^on.*',
    },

    // Define the backgrounds available from the Storybook toolbar.
    backgrounds: {
      options: {
        canvas: {
          name: 'Canvas',
          value: tokens.color.canvas,
        },
        paper: {
          name: 'Paper',
          value: tokens.color.surface,
        },
        night: {
          name: 'Night',
          value: '#172033',
        },
      },
    },

    // Configure how component controls are displayed and inferred.
    controls: {
      expanded: true,
      matchers: {
        // Use color controls for properties containing "background" or "color".
        color: /(background|color)$/i,

        // Use date controls for properties ending in "Date".
        date: /Date$/i,
      },
    },

    // Configure the viewport sizes available for responsive testing.
    viewport: {
      options: {
        // Include Storybook's standard device viewport presets.
        ...INITIAL_VIEWPORTS,

        // Add a custom compact-phone viewport.
        compactPhone: {
          name: 'Compact phone',
          styles: {
            width: '360px',
            height: '740px',
          },
          type: 'mobile',
        },
      },
    },
  },
};

export default preview;
import { Text, View } from 'react-native';
import { expect, fn, userEvent, within } from 'storybook/test';

import { DemoButton } from './DemoButton.jsx';

const meta = {
  title: 'Components/DemoButton',
  component: DemoButton,
  tags: ['autodocs'],

  // Configure this component's stories and generated documentation.
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
            'A deliberately small button whose variant choices come from the design system.',
      },
    },
  },

  // Set the default props shared by the stories below.
  args: {
    label: 'Save draft',
    onPress: fn(),
    variant: 'primary',
    disabled: false,
  },

  // Configure how props appear in Storybook's Controls panel.
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: 'boolean',
    },
    onPress: {
      action: 'pressed',
      table: {
        disable: true,
      },
    },
    testID: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

// Use all the default props from the shared configuration.
export const Primary = {};

// Override selected props to show the secondary button.
export const Secondary = {
  args: {
    label: 'Not now',
    variant: 'secondary',
  },
};

// Override selected props to show the disabled state.
export const Disabled = {
  args: {
    label: 'Already submitted',
    disabled: true,
  },
};

// Give this story a dark background and some local context.
export const OnDarkBackground = {
  args: {
    label: 'Continue',
    variant: 'secondary',
  },
  globals: {
    backgrounds: {
      value: 'night',
    },
  },
  decorators: [
    (StoryComponent) => (
        <View style={{ gap: 12 }}>
          <Text style={{ color: 'white' }}>
            A story can add local context.
          </Text>
          <StoryComponent />
        </View>
    ),
  ],
};

// Verify that clicking the button calls its event handler.
export const InteractiveBehavior = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
        canvas.getByRole('button', { name: 'Save draft' }),
    );

    await expect(args.onPress).toHaveBeenCalledOnce();
  },
};
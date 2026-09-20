import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Text, View } from 'react-native';

import { DemoButton } from './DemoButton';

const meta = {
  title: 'Components/DemoButton',
  component: DemoButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A deliberately small button whose variant choices come from the design system.',
      },
    },
  },
  args: {
    label: 'Save draft',
    onPress: fn(),
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
    disabled: { control: 'boolean' },
    onPress: { action: 'pressed', table: { disable: true } },
    testID: { table: { disable: true } },
  },
} satisfies Meta<typeof DemoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    label: 'Not now',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Already submitted',
    disabled: true,
  },
};

export const OnDarkBackground: Story = {
  args: {
    label: 'Continue',
    variant: 'secondary',
  },
  globals: {
    backgrounds: { value: 'night' },
  },
  decorators: [
    (Story) => (
      <View style={{ gap: 12 }}>
        <Text style={{ color: 'white' }}>A story can add local context.</Text>
        <Story />
      </View>
    ),
  ],
};

export const InteractiveBehavior: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Save draft' }));
    await expect(args.onPress).toHaveBeenCalledOnce();
  },
};

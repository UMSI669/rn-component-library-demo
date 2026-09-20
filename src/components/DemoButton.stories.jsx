import { Text, View } from 'react-native';
import { expect, fn, userEvent, within } from 'storybook/test';

import { DemoButton } from './DemoButton.jsx';

/** @type {import('@storybook/react-vite').Meta<typeof DemoButton>} */
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
};

export default meta;
/** @typedef {import('@storybook/react-vite').StoryObj<typeof meta>} Story */

/** @type {Story} */
export const Primary = {};

/** @type {Story} */
export const Secondary = {
  args: {
    label: 'Not now',
    variant: 'secondary',
  },
};

/** @type {Story} */
export const Disabled = {
  args: {
    label: 'Already submitted',
    disabled: true,
  },
};

/** @type {Story} */
export const OnDarkBackground = {
  args: {
    label: 'Continue',
    variant: 'secondary',
  },
  globals: {
    backgrounds: { value: 'night' },
  },
  decorators: [
    (StoryComponent) => (
      <View style={{ gap: 12 }}>
        <Text style={{ color: 'white' }}>A story can add local context.</Text>
        <StoryComponent />
      </View>
    ),
  ],
};

/** @type {Story} */
export const InteractiveBehavior = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Save draft' }));
    await expect(args.onPress).toHaveBeenCalledOnce();
  },
};

import { useArgs } from 'storybook/preview-api';
import { expect, fn, userEvent, within } from 'storybook/test';

import { ChoiceChips } from './ChoiceChips.jsx';

const paceOptions = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
];

/** @type {import('@storybook/react-vite').Meta<typeof ChoiceChips>} */
const meta = {
  title: 'Components/ChoiceChips',
  component: ChoiceChips,
  tags: ['autodocs'],
  args: {
    label: 'Release pace',
    options: paceOptions,
    value: 'monthly',
    onChange: fn(),
  },
  argTypes: {
    label: { control: 'text' },
    value: {
      control: 'inline-radio',
      options: paceOptions.map((option) => option.value),
    },
    options: { control: 'object' },
    onChange: { action: 'changed', table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A controlled component: its parent owns the selected value and responds to changes.',
      },
    },
  },
  render: function ControlledChoiceChips(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <ChoiceChips
        {...args}
        value={value}
        onChange={(nextValue) => {
          args.onChange(nextValue);
          updateArgs({ value: nextValue });
        }}
      />
    );
  },
};

export default meta;
/** @typedef {import('@storybook/react-vite').StoryObj<typeof meta>} Story */

/** @type {Story} */
export const Controlled = {};

/** @type {Story} */
export const InteractiveBehavior = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', { name: 'Quarterly' }));
    await expect(args.onChange).toHaveBeenCalledWith('quarterly');
  },
};

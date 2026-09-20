import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { expect, fn, userEvent, within } from 'storybook/test';

import { ChoiceChips } from './ChoiceChips';
import type { ChoiceChipsProps } from './ChoiceChips';

const paceOptions = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
] as const;

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
    const [{ value }, updateArgs] = useArgs<ChoiceChipsProps>();

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
} satisfies Meta<typeof ChoiceChips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {};

export const InteractiveBehavior: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', { name: 'Quarterly' }));
    await expect(args.onChange).toHaveBeenCalledWith('quarterly');
  },
};

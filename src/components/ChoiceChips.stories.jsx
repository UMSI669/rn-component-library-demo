import { useArgs } from 'storybook/preview-api';
import { expect, fn, userEvent, within } from 'storybook/test';

import { ChoiceChips } from './ChoiceChips.jsx';

const paceOptions = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
];

const meta = {
  title: 'Components/ChoiceChips',
  component: ChoiceChips,
  tags: ['autodocs'],

  // Set the default props used by these stories.
  args: {
    label: 'Release pace',
    options: paceOptions,
    value: 'monthly',
    onChange: fn(),
  },

  // Configure the Controls panel for each prop.
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'inline-radio',
      options: paceOptions.map((option) => option.value),
    },
    options: {
      control: 'object',
    },
    onChange: {
      action: 'changed',
      table: {
        disable: true,
      },
    },
  },

  // Add a description to the generated documentation.
  parameters: {
    docs: {
      description: {
        component:
            'A controlled component: its parent owns the selected value and responds to changes.',
      },
    },
  },

  // Keep the selected value synchronized with Storybook's controls.
  render: function ControlledChoiceChips(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
        <ChoiceChips
            {...args}
            value={value}
            onChange={(nextValue) => {
              // Record the interaction and update the selected value.
              args.onChange(nextValue);
              updateArgs({ value: nextValue });
            }}
        />
    );
  },
};

export default meta;

// Use the shared configuration and default arguments above.
export const Controlled = {};

// Test that clicking an option calls onChange with the correct value.
export const InteractiveBehavior = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
        canvas.getByRole('radio', { name: 'Quarterly' }),
    );

    await expect(args.onChange).toHaveBeenCalledWith('quarterly');
  },
};
import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatusCard } from './StatusCard';

const meta = {
  title: 'Components/StatusCard',
  component: StatusCard,
  tags: ['autodocs'],
  args: {
    title: 'Library connected',
    message: 'This interface is rendered from the installed package.',
    status: 'success',
  },
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    status: {
      control: 'select',
      options: ['info', 'success', 'warning'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A status message with semantic options instead of one-off color props.',
      },
    },
  },
} satisfies Meta<typeof StatusCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};

export const Information: Story = {
  args: {
    title: 'Preview environment',
    message: 'The same native component is currently using react-native-web.',
    status: 'info',
  },
};

export const WarningOnCompactPhone: Story = {
  args: {
    title: 'Tag not updated',
    message: 'Consumers keep receiving the old build until a new tag is created.',
    status: 'warning',
  },
  globals: {
    viewport: { value: 'compactPhone', isRotated: false },
  },
};

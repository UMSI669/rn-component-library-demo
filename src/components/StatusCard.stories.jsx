import { StatusCard } from './StatusCard.jsx';

/** @type {import('@storybook/react-vite').Meta<typeof StatusCard>} */
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
};

export default meta;
/** @typedef {import('@storybook/react-vite').StoryObj<typeof meta>} Story */

/** @type {Story} */
export const Success = {};

/** @type {Story} */
export const Information = {
  args: {
    title: 'Preview environment',
    message: 'The same native component is currently using react-native-web.',
    status: 'info',
  },
};

/** @type {Story} */
export const WarningOnCompactPhone = {
  args: {
    title: 'Tag not updated',
    message: 'Consumers keep receiving the old build until a new tag is created.',
    status: 'warning',
  },
  globals: {
    viewport: { value: 'compactPhone', isRotated: false },
  },
};

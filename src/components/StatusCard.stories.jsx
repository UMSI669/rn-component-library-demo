import { StatusCard } from './StatusCard.jsx';

const meta = {
  title: 'Components/StatusCard',
  component: StatusCard,
  tags: ['autodocs'],

  // Set the default props shared by the stories below.
  args: {
    title: 'Library connected',
    message: 'This interface is rendered from the installed package.',
    status: 'success',
  },

  // Configure how props appear in Storybook's Controls panel.
  argTypes: {
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    status: {
      control: 'select',
      options: ['info', 'success', 'warning'],
    },
  },

  // Add a component description to the generated documentation.
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

// Use all the default props from the shared configuration.
export const Success = {};

// Override the defaults to show an informational message.
export const Information = {
  args: {
    title: 'Preview environment',
    message: 'The same native component is currently using react-native-web.',
    status: 'info',
  },
};

// Show the warning state in the custom compact-phone viewport.
export const WarningOnCompactPhone = {
  args: {
    title: 'Tag not updated',
    message: 'Consumers keep receiving the old build until a new tag is created.',
    status: 'warning',
  },
  globals: {
    viewport: {
      value: 'compactPhone',
      isRotated: false,
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface AnythingGoesPanelProps {
  title: string;
  message: string;
  accentColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  messageStyle?: StyleProp<TextStyle>;
}

function AnythingGoesPanel({
  title,
  message,
  accentColor = '#3157D5',
  containerStyle,
  titleStyle,
  messageStyle,
}: AnythingGoesPanelProps) {
  return (
    <View style={[styles.panel, { borderColor: accentColor }, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.message, messageStyle]}>{message}</Text>
    </View>
  );
}

const meta = {
  title: 'Teaching example/Styling rabbit hole (not exported)',
  component: AnythingGoesPanel,
  tags: ['autodocs'],
  args: {
    title: 'Everything is configurable',
    message:
      'That sounds flexible, but every screen can now quietly invent a different design.',
    accentColor: '#D14D72',
  },
  parameters: {
    docs: {
      description: {
        component:
          'This Storybook-only anti-example is intentionally absent from src/index.ts. Compare its open-ended styling API with StatusCard’s semantic status prop.',
      },
    },
  },
  argTypes: {
    accentColor: { control: 'color' },
    containerStyle: { control: 'object' },
    titleStyle: { control: 'object' },
    messageStyle: { control: 'object' },
  },
} satisfies Meta<typeof AnythingGoesPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TooManyEscapeHatches: Story = {
  args: {
    containerStyle: { borderRadius: 32, borderWidth: 5, padding: 28 },
    titleStyle: { fontSize: 26, fontStyle: 'italic' },
    messageStyle: { color: '#7A284E' },
  },
};

const styles = StyleSheet.create({
  panel: {
    backgroundColor: 'white',
    borderWidth: 3,
    maxWidth: 440,
    padding: 16,
  },
  title: {
    color: '#172033',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  message: {
    color: '#526078',
    fontSize: 16,
    lineHeight: 23,
  },
});

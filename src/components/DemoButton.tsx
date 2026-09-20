import { Pressable, StyleSheet, Text } from 'react-native';
import type { GestureResponderEvent } from 'react-native';

import { tokens } from '../tokens';

export type DemoButtonVariant = 'primary' | 'secondary';

export interface DemoButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: DemoButtonVariant;
  disabled?: boolean;
  testID?: string;
}

export function DemoButton({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  testID,
}: DemoButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
      style={({ pressed }) => [
        styles.button,
        variant === 'primary' ? styles.primary : styles.secondary,
        pressed && !disabled ? styles.pressed : undefined,
        disabled ? styles.disabled : undefined,
      ]}
    >
      <Text
        style={variant === 'primary' ? styles.primaryLabel : styles.secondaryLabel}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: tokens.radius.md,
    borderWidth: 2,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: tokens.spacing.xl,
    paddingVertical: tokens.spacing.md,
  },
  primary: {
    backgroundColor: tokens.color.brand,
    borderColor: tokens.color.brand,
  },
  secondary: {
    backgroundColor: tokens.color.surface,
    borderColor: tokens.color.brand,
  },
  pressed: {
    opacity: 0.78,
  },
  disabled: {
    opacity: 0.45,
  },
  primaryLabel: {
    color: tokens.color.white,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryLabel: {
    color: tokens.color.brand,
    fontSize: 16,
    fontWeight: '700',
  },
});

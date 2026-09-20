import { Pressable, StyleSheet, Text } from 'react-native';

import { tokens } from '../tokens.js';

/** @typedef {import('react-native').GestureResponderEvent} GestureResponderEvent */
/** @typedef {'primary' | 'secondary'} DemoButtonVariant */

/**
 * @typedef {object} DemoButtonProps
 * @property {string} label
 * @property {(event: GestureResponderEvent) => void} [onPress]
 * @property {DemoButtonVariant} [variant]
 * @property {boolean} [disabled]
 * @property {string} [testID]
 */

/** @param {DemoButtonProps} props */
export function DemoButton({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  testID,
}) {
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

import { StyleSheet, Text, View } from 'react-native';

import { tokens } from '../tokens.js';

/** @typedef {'info' | 'success' | 'warning'} StatusCardStatus */

/**
 * @typedef {object} StatusCardProps
 * @property {string} title
 * @property {string} message
 * @property {StatusCardStatus} [status]
 */

/**
 * @type {Record<StatusCardStatus, {
 *   label: string,
 *   backgroundColor: string,
 *   borderColor: string,
 *   ink: string
 * }>}
 */
const appearances = {
  info: {
    label: 'Info',
    backgroundColor: tokens.color.infoSoft,
    borderColor: tokens.color.info,
    ink: tokens.color.info,
  },
  success: {
    label: 'Success',
    backgroundColor: tokens.color.successSoft,
    borderColor: tokens.color.success,
    ink: tokens.color.success,
  },
  warning: {
    label: 'Attention',
    backgroundColor: tokens.color.warningSoft,
    borderColor: tokens.color.warning,
    ink: tokens.color.warning,
  },
};

/** @param {StatusCardProps} props */
export function StatusCard({ title, message, status = 'info' }) {
  const appearance = appearances[status];

  return (
    <View
      accessibilityLabel={`${appearance.label}: ${title}. ${message}`}
      style={[
        styles.card,
        {
          backgroundColor: appearance.backgroundColor,
          borderLeftColor: appearance.borderColor,
        },
      ]}
    >
      <Text style={[styles.eyebrow, { color: appearance.ink }]}>
        {appearance.label}
      </Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderLeftWidth: 6,
    borderRadius: tokens.radius.md,
    maxWidth: 440,
    padding: tokens.spacing.lg,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: tokens.spacing.xs,
    textTransform: 'uppercase',
  },
  title: {
    color: tokens.color.ink,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: tokens.spacing.xs,
  },
  message: {
    color: tokens.color.mutedInk,
    fontSize: 16,
    lineHeight: 23,
  },
});

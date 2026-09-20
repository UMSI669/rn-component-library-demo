import { StyleSheet, Text, View } from 'react-native';

import { tokens } from '../tokens';

export type StatusCardStatus = 'info' | 'success' | 'warning';

export interface StatusCardProps {
  title: string;
  message: string;
  status?: StatusCardStatus;
}

const statusLabels: Record<StatusCardStatus, string> = {
  info: 'Info',
  success: 'Success',
  warning: 'Attention',
};

export function StatusCard({
  title,
  message,
  status = 'info',
}: StatusCardProps) {
  return (
    <View
      accessibilityLabel={`${statusLabels[status]}: ${title}. ${message}`}
      style={[styles.card, styles[status]]}
    >
      <Text style={[styles.eyebrow, styles[`${status}Ink`]]}>
        {statusLabels[status]}
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
  info: {
    backgroundColor: tokens.color.infoSoft,
    borderLeftColor: tokens.color.info,
  },
  success: {
    backgroundColor: tokens.color.successSoft,
    borderLeftColor: tokens.color.success,
  },
  warning: {
    backgroundColor: tokens.color.warningSoft,
    borderLeftColor: tokens.color.warning,
  },
  infoInk: { color: tokens.color.info },
  successInk: { color: tokens.color.success },
  warningInk: { color: tokens.color.warning },
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

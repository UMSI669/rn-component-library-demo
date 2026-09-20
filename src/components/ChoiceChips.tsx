import { Pressable, StyleSheet, Text, View } from 'react-native';

import { tokens } from '../tokens';

export interface ChoiceChipOption {
  label: string;
  value: string;
}

export interface ChoiceChipsProps {
  label: string;
  options: readonly ChoiceChipOption[];
  value: string;
  onChange: (value: string) => void;
}

export function ChoiceChips({
  label,
  options,
  value,
  onChange,
}: ChoiceChipsProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {options.map((option) => {
          const selected = option.value === value;

          return (
            <Pressable
              accessibilityLabel={option.label}
              accessibilityRole="radio"
              accessibilityState={{ checked: selected }}
              key={option.value}
              onPress={() => onChange(option.value)}
              style={({ pressed }) => [
                styles.chip,
                selected ? styles.selectedChip : undefined,
                pressed ? styles.pressedChip : undefined,
              ]}
            >
              <Text style={[styles.chipLabel, selected ? styles.selectedLabel : undefined]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: tokens.color.ink,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: tokens.spacing.sm,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: tokens.spacing.sm,
  },
  chip: {
    backgroundColor: tokens.color.surface,
    borderColor: tokens.color.border,
    borderRadius: tokens.radius.pill,
    borderWidth: 2,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.sm,
  },
  selectedChip: {
    backgroundColor: tokens.color.brandSoft,
    borderColor: tokens.color.brand,
  },
  pressedChip: {
    opacity: 0.72,
  },
  chipLabel: {
    color: tokens.color.mutedInk,
    fontSize: 15,
    fontWeight: '600',
  },
  selectedLabel: {
    color: tokens.color.brand,
  },
});

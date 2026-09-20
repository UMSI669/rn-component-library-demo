import * as react from 'react';
import { GestureResponderEvent } from 'react-native';

interface ChoiceChipOption {
    label: string;
    value: string;
}
interface ChoiceChipsProps {
    label: string;
    options: readonly ChoiceChipOption[];
    value: string;
    onChange: (value: string) => void;
}
declare function ChoiceChips({ label, options, value, onChange, }: ChoiceChipsProps): react.JSX.Element;

type DemoButtonVariant = 'primary' | 'secondary';
interface DemoButtonProps {
    label: string;
    onPress?: (event: GestureResponderEvent) => void;
    variant?: DemoButtonVariant;
    disabled?: boolean;
    testID?: string;
}
declare function DemoButton({ label, onPress, variant, disabled, testID, }: DemoButtonProps): react.JSX.Element;

type StatusCardStatus = 'info' | 'success' | 'warning';
interface StatusCardProps {
    title: string;
    message: string;
    status?: StatusCardStatus;
}
declare function StatusCard({ title, message, status, }: StatusCardProps): react.JSX.Element;

declare const tokens: {
    readonly color: {
        readonly ink: "#172033";
        readonly mutedInk: "#526078";
        readonly surface: "#FFFFFF";
        readonly canvas: "#F3F6FB";
        readonly border: "#CBD5E1";
        readonly brand: "#3157D5";
        readonly brandPressed: "#2341A4";
        readonly brandSoft: "#E8EEFF";
        readonly success: "#18794E";
        readonly successSoft: "#E9F8F0";
        readonly warning: "#9A6700";
        readonly warningSoft: "#FFF4CE";
        readonly info: "#2867B2";
        readonly infoSoft: "#E9F2FC";
        readonly white: "#FFFFFF";
    };
    readonly spacing: {
        readonly xs: 4;
        readonly sm: 8;
        readonly md: 12;
        readonly lg: 16;
        readonly xl: 24;
        readonly xxl: 32;
    };
    readonly radius: {
        readonly sm: 8;
        readonly md: 12;
        readonly pill: 999;
    };
};
type DesignTokens = typeof tokens;

export { type ChoiceChipOption, ChoiceChips, type ChoiceChipsProps, DemoButton, type DemoButtonProps, type DemoButtonVariant, type DesignTokens, StatusCard, type StatusCardProps, type StatusCardStatus, tokens };

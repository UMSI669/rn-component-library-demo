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
export function DemoButton({ label, onPress, variant, disabled, testID, }: DemoButtonProps): import("react").JSX.Element;
export type GestureResponderEvent = import("react-native").GestureResponderEvent;
export type DemoButtonVariant = "primary" | "secondary";
export type DemoButtonProps = {
    label: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    variant?: DemoButtonVariant | undefined;
    disabled?: boolean | undefined;
    testID?: string | undefined;
};

/** @typedef {{ label: string, value: string }} ChoiceChipOption */
/**
 * @typedef {object} ChoiceChipsProps
 * @property {string} label
 * @property {readonly ChoiceChipOption[]} options
 * @property {string} value
 * @property {(value: string) => void} onChange
 */
/** @param {ChoiceChipsProps} props */
export function ChoiceChips({ label, options, value, onChange }: ChoiceChipsProps): import("react").JSX.Element;
export type ChoiceChipOption = {
    label: string;
    value: string;
};
export type ChoiceChipsProps = {
    label: string;
    options: readonly ChoiceChipOption[];
    value: string;
    onChange: (value: string) => void;
};

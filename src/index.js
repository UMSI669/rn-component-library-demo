// Teaching note: this file is the package's public door. Consumers import only
// from "rn-component-library-demo", so everything supported must leave here.
export { ChoiceChips } from './components/ChoiceChips.jsx';
export { DemoButton } from './components/DemoButton.jsx';
export { StatusCard } from './components/StatusCard.jsx';
export { tokens } from './tokens.js';

// These JSDoc definitions become editor hints for consumers during the build.
// Students still write ordinary JavaScript; dist/*.d.ts is generated output.
/** @typedef {import('./components/ChoiceChips.jsx').ChoiceChipOption} ChoiceChipOption */
/** @typedef {import('./components/ChoiceChips.jsx').ChoiceChipsProps} ChoiceChipsProps */
/** @typedef {import('./components/DemoButton.jsx').DemoButtonProps} DemoButtonProps */
/** @typedef {import('./components/DemoButton.jsx').DemoButtonVariant} DemoButtonVariant */
/** @typedef {import('./components/StatusCard.jsx').StatusCardProps} StatusCardProps */
/** @typedef {import('./components/StatusCard.jsx').StatusCardStatus} StatusCardStatus */
/** @typedef {typeof import('./tokens.js').tokens} DesignTokens */

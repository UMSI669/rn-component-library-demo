"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  ChoiceChips: () => ChoiceChips,
  DemoButton: () => DemoButton,
  StatusCard: () => StatusCard,
  tokens: () => tokens
});
module.exports = __toCommonJS(index_exports);

// src/components/ChoiceChips.jsx
var import_react_native = require("react-native");

// src/tokens.js
var tokens = {
  color: {
    ink: "#172033",
    mutedInk: "#526078",
    surface: "#FFFFFF",
    canvas: "#F3F6FB",
    border: "#CBD5E1",
    brand: "#3157D5",
    brandPressed: "#2341A4",
    brandSoft: "#E8EEFF",
    success: "#18794E",
    successSoft: "#E9F8F0",
    warning: "#9A6700",
    warningSoft: "#FFF4CE",
    info: "#2867B2",
    infoSoft: "#E9F2FC",
    white: "#FFFFFF"
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32
  },
  radius: {
    sm: 8,
    md: 12,
    pill: 999
  }
};

// src/components/ChoiceChips.jsx
var import_jsx_runtime = require("react/jsx-runtime");
function ChoiceChips({ label, options, value, onChange }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, { style: styles.label, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.View, { style: styles.row, children: options.map((option) => {
      const selected = option.value === value;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react_native.Pressable,
        {
          accessibilityLabel: option.label,
          accessibilityRole: "radio",
          accessibilityState: { checked: selected },
          onPress: () => onChange(option.value),
          style: ({ pressed }) => [
            styles.chip,
            selected ? styles.selectedChip : void 0,
            pressed ? styles.pressedChip : void 0
          ],
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, { style: [styles.chipLabel, selected ? styles.selectedLabel : void 0], children: option.label })
        },
        option.value
      );
    }) })
  ] });
}
var styles = import_react_native.StyleSheet.create({
  label: {
    color: tokens.color.ink,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: tokens.spacing.sm
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: tokens.spacing.sm
  },
  chip: {
    backgroundColor: tokens.color.surface,
    borderColor: tokens.color.border,
    borderRadius: tokens.radius.pill,
    borderWidth: 2,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.sm
  },
  selectedChip: {
    backgroundColor: tokens.color.brandSoft,
    borderColor: tokens.color.brand
  },
  pressedChip: {
    opacity: 0.72
  },
  chipLabel: {
    color: tokens.color.mutedInk,
    fontSize: 15,
    fontWeight: "600"
  },
  selectedLabel: {
    color: tokens.color.brand
  }
});

// src/components/DemoButton.jsx
var import_react_native2 = require("react-native");
var import_jsx_runtime2 = require("react/jsx-runtime");
function DemoButton({
  label,
  onPress,
  variant = "primary",
  disabled = false,
  testID
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react_native2.Pressable,
    {
      accessibilityRole: "button",
      accessibilityState: { disabled },
      disabled,
      onPress,
      testID,
      style: ({ pressed }) => [
        styles2.button,
        variant === "primary" ? styles2.primary : styles2.secondary,
        pressed && !disabled ? styles2.pressed : void 0,
        disabled ? styles2.disabled : void 0
      ],
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_react_native2.Text,
        {
          style: variant === "primary" ? styles2.primaryLabel : styles2.secondaryLabel,
          children: label
        }
      )
    }
  );
}
var styles2 = import_react_native2.StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: tokens.radius.md,
    borderWidth: 2,
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: tokens.spacing.xl,
    paddingVertical: tokens.spacing.md
  },
  primary: {
    backgroundColor: tokens.color.brand,
    borderColor: tokens.color.brand
  },
  secondary: {
    backgroundColor: tokens.color.surface,
    borderColor: tokens.color.brand
  },
  pressed: {
    opacity: 0.78
  },
  disabled: {
    opacity: 0.45
  },
  primaryLabel: {
    color: tokens.color.white,
    fontSize: 16,
    fontWeight: "700"
  },
  secondaryLabel: {
    color: tokens.color.brand,
    fontSize: 16,
    fontWeight: "700"
  }
});

// src/components/StatusCard.jsx
var import_react_native3 = require("react-native");
var import_jsx_runtime3 = require("react/jsx-runtime");
var appearances = {
  info: {
    label: "Info",
    backgroundColor: tokens.color.infoSoft,
    borderColor: tokens.color.info,
    ink: tokens.color.info
  },
  success: {
    label: "Success",
    backgroundColor: tokens.color.successSoft,
    borderColor: tokens.color.success,
    ink: tokens.color.success
  },
  warning: {
    label: "Attention",
    backgroundColor: tokens.color.warningSoft,
    borderColor: tokens.color.warning,
    ink: tokens.color.warning
  }
};
function StatusCard({ title, message, status = "info" }) {
  const appearance = appearances[status];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_react_native3.View,
    {
      accessibilityLabel: `${appearance.label}: ${title}. ${message}`,
      style: [
        styles3.card,
        {
          backgroundColor: appearance.backgroundColor,
          borderLeftColor: appearance.borderColor
        }
      ],
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native3.Text, { style: [styles3.eyebrow, { color: appearance.ink }], children: appearance.label }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native3.Text, { style: styles3.title, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native3.Text, { style: styles3.message, children: message })
      ]
    }
  );
}
var styles3 = import_react_native3.StyleSheet.create({
  card: {
    borderLeftWidth: 6,
    borderRadius: tokens.radius.md,
    maxWidth: 440,
    padding: tokens.spacing.lg
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.8,
    marginBottom: tokens.spacing.xs,
    textTransform: "uppercase"
  },
  title: {
    color: tokens.color.ink,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: tokens.spacing.xs
  },
  message: {
    color: tokens.color.mutedInk,
    fontSize: 16,
    lineHeight: 23
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChoiceChips,
  DemoButton,
  StatusCard,
  tokens
});
//# sourceMappingURL=index.cjs.map
import React from "react";
import Button, { BUTTON_THEME } from "../lib/components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    disabled: false,
    theme: {
      control: {
        type: "select",
        options: [
          BUTTON_THEME.PRIMARY,
          BUTTON_THEME.PRIMARY_OUTLINE,
          BUTTON_THEME.OUTLINE,
          BUTTON_THEME.DISABLED,
          BUTTON_THEME.TERTIARY,
        ],
      },
    },
  },
};

type ArgTypes = {
  theme: BUTTON_THEME;
  disabled: boolean;
  children: React.ReactNode;
};

export const Basic = (args: ArgTypes) => (
  <Button {...args} />
);
Basic.args = {
  theme: BUTTON_THEME.PRIMARY,
};
export const Secondary = () => (
  <Button theme={BUTTON_THEME.SECONDARY}>SECONDARY</Button>
);

export const Tertiary = () => (
  <Button theme={BUTTON_THEME.TERTIARY}>TERTIARY</Button>
);

export const Disabled = () => <Button disabled>DISABLED</Button>;

export const PrimaryOutline = () => (
  <Button theme={BUTTON_THEME.PRIMARY_OUTLINE}>PRIMARY OUTLINE</Button>
);

export const Outline = () => (
  <Button theme={BUTTON_THEME.OUTLINE}>OUTLINE</Button>
);

export const All = () => (
  <div style={{ display: "flex" }}>
    <div style={{ marginRight: "4px" }}>
      <Button theme={BUTTON_THEME.PRIMARY}>Primary</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button theme={BUTTON_THEME.SECONDARY}>Secondary</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button theme={BUTTON_THEME.TERTIARY}>Tertiary</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button disabled>Disabled</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button theme={BUTTON_THEME.PRIMARY_OUTLINE}>Primary Outline</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button theme={BUTTON_THEME.OUTLINE}>Outline</Button>
    </div>
  </div>
);

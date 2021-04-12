import React from "react";
import Button, { ButtonProps, BUTTON_THEME } from "../lib/components/Button";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
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
} as Meta;

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />;
Basic.args = {
  theme: BUTTON_THEME.PRIMARY,
  children: "PRIMARY",
};

export const Secondary = Basic.bind({});
Secondary.args = {
  theme: BUTTON_THEME.SECONDARY,
  children: "SECONDARY",
};

export const Tertiary = Basic.bind({});
Tertiary.args = {
  theme: BUTTON_THEME.TERTIARY,
  children: "TERTIARY",
};
export const Disabled = Basic.bind({});
Disabled.args = {
  children: "DISABLED",
  theme: BUTTON_THEME.DISABLED,
  disalbed: true,
};

export const PrimaryOutline = Basic.bind({});
PrimaryOutline.args = {
  children: "PRIMARY OUTLINE",
  theme: BUTTON_THEME.PRIMARY_OUTLINE,
};

export const Outline = Basic.bind({});
Outline.args = {
  children: "OUTLINE",
  theme: BUTTON_THEME.OUTLINE,
};

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

import React from "react";
import Button, { ButtonProps, BUTTON_APPERANCE } from "../lib/Button";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
    apperance: {
      control: {
        type: "select",
        options: [
          BUTTON_APPERANCE.PRIMARY,
          BUTTON_APPERANCE.PRIMARY_OUTLINE,
          BUTTON_APPERANCE.OUTLINE,
          BUTTON_APPERANCE.DISABLED,
          BUTTON_APPERANCE.TERTIARY,
        ],
      },
    },
  },
} as Meta;

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />;
Basic.args = {
  apperance: BUTTON_APPERANCE.PRIMARY,
  children: "PRIMARY",
};

export const Secondary = Basic.bind({});
Secondary.args = {
  apperance: BUTTON_APPERANCE.SECONDARY,
  children: "SECONDARY",
};

export const Tertiary = Basic.bind({});
Tertiary.args = {
  apperance: BUTTON_APPERANCE.TERTIARY,
  children: "TERTIARY",
};
export const Disabled = Basic.bind({});
Disabled.args = {
  children: "DISABLED",
  apperance: BUTTON_APPERANCE.DISABLED,
  disalbed: true,
};

export const PrimaryOutline = Basic.bind({});
PrimaryOutline.args = {
  children: "PRIMARY OUTLINE",
  apperance: BUTTON_APPERANCE.PRIMARY_OUTLINE,
};

export const Outline = Basic.bind({});
Outline.args = {
  children: "OUTLINE",
  apperance: BUTTON_APPERANCE.OUTLINE,
};

export const All = () => (
  <div style={{ display: "flex" }}>
    <div style={{ marginRight: "4px" }}>
      <Button apperance={BUTTON_APPERANCE.PRIMARY}>Primary</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button apperance={BUTTON_APPERANCE.SECONDARY}>Secondary</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button apperance={BUTTON_APPERANCE.TERTIARY}>Tertiary</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button disabled>Disabled</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button apperance={BUTTON_APPERANCE.PRIMARY_OUTLINE}>Primary Outline</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button apperance={BUTTON_APPERANCE.OUTLINE}>Outline</Button>
    </div>
  </div>
);

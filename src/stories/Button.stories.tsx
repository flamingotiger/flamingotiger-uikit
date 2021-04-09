import React from "react";
import Button, { BUTTON_APPEARANCES } from "../lib/components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    disabled: false,
    appearance: {
      control: {
        type: "select",
        options: [
          BUTTON_APPEARANCES.PRIMARY,
          BUTTON_APPEARANCES.PRIMARY_OUTLINE,
          BUTTON_APPEARANCES.OUTLINE,
          BUTTON_APPEARANCES.TERTIARY,
        ],
      },
    },
  },
};

type ArgTypes = {
  apperance: BUTTON_APPEARANCES;
  disabled: boolean;
  children: React.ReactNode;
};

export const Basic = (args: ArgTypes) => (
  <Button appearance={BUTTON_APPEARANCES.PRIMARY} {...args} />
);

export const Secondary = () => (
  <Button appearance={BUTTON_APPEARANCES.SECONDARY}>SECONDARY</Button>
);

export const Tertiary = () => (
  <Button appearance={BUTTON_APPEARANCES.TERTIARY}>TERTIARY</Button>
);

export const Disabled = () => <Button disabled>DISABLED</Button>;

export const PrimaryOutline = () => (
  <Button appearance={BUTTON_APPEARANCES.PRIMARY_OUTLINE}>
    PRIMARY OUTLINE
  </Button>
);

export const Outline = () => (
  <Button appearance={BUTTON_APPEARANCES.OUTLINE}>OUTLINE</Button>
);

export const All = () => (
  <div style={{ display: "flex" }}>
    <div style={{ marginRight: "4px" }}>
      <Button appearance={BUTTON_APPEARANCES.PRIMARY}>Primary</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button appearance={BUTTON_APPEARANCES.SECONDARY}>Secondary</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button appearance={BUTTON_APPEARANCES.TERTIARY}>Tertiary</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button disabled>Disabled</Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button appearance={BUTTON_APPEARANCES.PRIMARY_OUTLINE}>
        Primary Outline
      </Button>
    </div>
    <div style={{ marginRight: "4px" }}>
      <Button appearance={BUTTON_APPEARANCES.OUTLINE}>Outline</Button>
    </div>
  </div>
);

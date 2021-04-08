import React from "react";

import Button, { BUTTON_APPEARANCES } from "../lib/components/Button";

export default {
  title: "Components/Button",
  component: Button,
  /**
   * 공통 arg에서는 전부 사용
   * 하단에 Template에는 각자 control설정
   */
  argTypes: {
    children: { control: "text" },
    appearance: {
      control: {
        type: 'select',
        options: [BUTTON_APPEARANCES.PRIMARY, BUTTON_APPEARANCES.PRIMARY_OUTLINE, BUTTON_APPEARANCES.OUTLINE, BUTTON_APPEARANCES.TERTIARY],
      }
    }
  },
};

export const Basic = (args) => <Button {...args} />;
Basic.args = { children: 'Button', appearance: BUTTON_APPEARANCES.PRIMARY };

export const Disabled = Basic.bind({});
Disabled.args = { children: 'Button', disabled: true };

export const PrimaryOutline = Basic.bind({});
PrimaryOutline.args = { children: 'Button', appearance: BUTTON_APPEARANCES.PRIMARY_OUTLINE }

export const Outline = Basic.bind({});
Outline.args = { children: 'Button', appearance: BUTTON_APPEARANCES.OUTLINE }

export const Tertiary = Basic.bind({});
Tertiary.args = { children: 'Button', appearance: BUTTON_APPEARANCES.TERTIARY }


export const All = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ marginRight: '4px' }}>
      <Button appearance="primary">Primary</Button>
    </div>
    <div style={{ marginRight: '4px' }}>
      <Button disabled>Disabled</Button>
    </div>
    <div style={{ marginRight: '4px' }}>
      <Button appearance="primaryOutline">Primary Outline</Button>
    </div>
    <div style={{ marginRight: '4px' }}>
      <Button appearance="outline">Outline</Button>
    </div>
    <div style={{ marginRight: '4px' }}>
      <Button appearance="tertiary">Tertiary</Button>
    </div>
  </div>
);
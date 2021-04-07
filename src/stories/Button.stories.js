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


export const All = () => (
  <>
    <Button appearance="primary">Primary</Button>
    <Button disabled>Disabled</Button>
    {/* <Button appearance="tertiary">Tertiary</Button>
    <Button appearance="outline">Outline</Button> */}
  </>
);
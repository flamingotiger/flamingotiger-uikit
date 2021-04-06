import React from "react";

import Button from "../lib/components/Button";

export default {
  title: "Components/Button",
  component: Button,
  /**
   * 공통 arg에서는 전부 사용
   * 하단에 Template에는 각자 control설정
   */
  argTypes: {
    children: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind();
Primary.args = {
  children: 'Button',
};

export const Disabled = Template.bind();
Disabled.args = {
  children: 'Button',
  disabled: true
};
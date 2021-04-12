import React from "react";
import ButtonGroup, {
  ButtonGroupProps,
  BUTTON_GROUP_ALIGN,
} from "../lib/components/ButtonGroup";
import Button, { BUTTON_THEME } from "../lib/components/Button";
import Icon from "../lib/components/Icon/Icon";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    direction: { control: { type: "radio", options: ["row", "column"] } },
    gap: { control: "text" },
    className: { control: "text" },
    buttonGroupAlign: {
      control: {
        type: "select",
        options: [
          BUTTON_GROUP_ALIGN.LEFT,
          BUTTON_GROUP_ALIGN.CENTER,
          BUTTON_GROUP_ALIGN.RIGHT,
        ],
      },
    },
  },
} as Meta;

export const Basic: Story<ButtonGroupProps> = (args: ButtonGroupProps) => (
  <ButtonGroup {...args} />
);

Basic.args = {
  direction: "row",
  gap: "0.5rem",
  children: [
    <Button theme={BUTTON_THEME.TERTIARY}>취소</Button>,
    <Button>확인</Button>,
  ],
};

export const Column = Basic.bind({});
Column.args = {
  direction: "column",
  children: [<Button>클릭</Button>, <Button>클릭</Button>],
};

export const CustomGap = Basic.bind({});
CustomGap.args = {
  gap: "2rem",
  children: [
    <Button theme={BUTTON_THEME.TERTIARY}>취소</Button>,
    <Button>확인</Button>,
  ],
};

export const CustomGapColumn = Basic.bind({});
CustomGapColumn.args = {
  direction: "column",
  gap: "1rem",
  children: [
    <Button theme={BUTTON_THEME.TERTIARY}>클릭</Button>,
    <Button>클릭</Button>,
  ],
};

export const NumberButtonGroup = () => {
  return (
    <ButtonGroup gap="10px">
      <Button theme={BUTTON_THEME.OUTLINE}>
        <Icon icon="arrowleftalt" />
        이전
      </Button>
      {[1, 2, 3, 4, 5].map((num) => (
        <Button theme={BUTTON_THEME.OUTLINE} key={num}>
          {num}
        </Button>
      ))}
      <Button theme={BUTTON_THEME.OUTLINE}>
        다음
        <Icon icon="arrowrightalt" />
      </Button>
    </ButtonGroup>
  );
};

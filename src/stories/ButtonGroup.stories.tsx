import React from "react";
import ButtonGroup, { ButtonGroupProps } from "../lib/components/ButtonGroup";
import Button, { BUTTON_THEME } from "../lib/components/Button";
import Icon from "../lib/components/Icon/Icon";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    direction: { control: "text" },
    gap: { control: "text" },
    className: { control: "text" },
  },
};

export const Basic = (args: ButtonGroupProps) => {
  return (
    <ButtonGroup {...args}>
      <Button theme={BUTTON_THEME.TERTIARY}>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};
Basic.args = {
  direction: "row",
  gap: "0.5rem"
};
export const Column = () => {
  return (
    <ButtonGroup direction="column">
      <Button>클릭</Button>
      <Button>클릭</Button>
    </ButtonGroup>
  );
};

export const CustomGap = () => {
  return (
    <ButtonGroup gap="2rem">
      <Button theme={BUTTON_THEME.TERTIARY}>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const CustomGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <Button theme={BUTTON_THEME.TERTIARY}>클릭</Button>
      <Button>클릭</Button>
    </ButtonGroup>
  );
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

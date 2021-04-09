import React from "react";
import ButtonGroup from "../lib/components/ButtonGroup";
import Button, { BUTTON_THEME } from "../lib/components/Button";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
};

export const Basic = () => {
  return (
    <ButtonGroup direction="row" gap="0.5rem">
      <Button theme={BUTTON_THEME.TERTIARY}>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
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

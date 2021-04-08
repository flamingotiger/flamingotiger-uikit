import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Colors } from "../colors";
import { Sizes } from "../sizes";

export enum BUTTON_APPEARANCES {
  PRIMARY = "primary",
  PRIMARY_OUTLINE = "primaryOutline",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  OUTLINE = "outline",
}

/**
 * 기본 버튼 리셋 스타일
 */
export const SResetButton = css`
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  appearance: none;
  text-transform: none;
  outline: none;
  box-sizing: border-box;
`;

/**
 * 기본 버튼 스타일
 */
export const SButton = styled.button`
  ${SResetButton};
  border-radius: 0.25rem;
  position: relative;
  padding: 0.375rem 0.75rem;
  font-size: ${Sizes.md.rem};
  line-height: ${Sizes.xlg.rem};
  background-color: ${Colors.primary.color};
  color: ${Colors.white.color};
  appearance: button;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  will-change: transform;
  vertical-align: top;
  white-space: nowrap;

  &:not(:disabled) {
    cursor: pointer;
  }

  ${(props: { appearance: BUTTON_APPEARANCES }) =>
    props.appearance === BUTTON_APPEARANCES.PRIMARY &&
    `
    &:hover {
      background: ${Colors["dark-primary"].color};
    }
    &:focus {
      box-shadow: 0 0 0 0.25rem rgb(${Colors.primary.rgb}, 0.5);
      background: ${Colors["dark-primary"].color};
    }
`}

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      background-color: ${Colors.gray.color};
      &:disabled {
        background-color: ${Colors.gray.color};
      }
    `}

  ${(props: { appearance: BUTTON_APPEARANCES }) =>
    props.appearance === BUTTON_APPEARANCES.PRIMARY_OUTLINE &&
    `
    color: ${Colors.primary.color};
    background-color: ${Colors.white.color};
    border:1px solid ${Colors.primary.color};

    &:active {
      background: ${Colors.primary.color};
      color: ${Colors.white.color};
    }`}
    
    ${(props: { appearance: BUTTON_APPEARANCES }) =>
    props.appearance === BUTTON_APPEARANCES.OUTLINE &&
    `
    color: ${Colors.gray.color};
    background-color: ${Colors.white.color};
    border:1px solid ${Colors.gray.color};
    transition: 0.3s transform, 0.3s border, 0.3s color;

    &:hover{
      transform: translateY(-4px);
    }
    &:active {
      border-color: ${Colors["dark-gray"].color};
      color: ${Colors["dark-gray"].color};
    }`}

${(props: { appearance: BUTTON_APPEARANCES }) =>
    props.appearance === BUTTON_APPEARANCES.SECONDARY &&
    `
    color: ${Colors.primary.color};
    background-color: transparent;
    transition: 0.3s transform, 0.3s background-color;

    &:hover{
      transform: translateY(-4px);
    }
    &:active {
    }`}

${(props: { appearance: BUTTON_APPEARANCES }) =>
    props.appearance === BUTTON_APPEARANCES.TERTIARY &&
    `
    color: ${Colors["dark-gray"].color};
    background-color: #dddddd;
    border:1px solid ${Colors.white.color};
    transition: 0.3s transform, 0.3s background-color;

    &:hover{
      transform: translateY(-4px);
    }
    &:active {
      background-color: ${Colors.gray.color};
    }`}
`;
/**
 * 커스텀 버튼 타입 정의
 * @param children
 */

export interface ButtonProps {
  /** 버튼 텍스트 */
  children?: React.ReactNode;
  /** 버튼 타입 */
  appearance?: BUTTON_APPEARANCES;
}

/** 버튼을 사용하고 싶을 땐 `Button` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 기본 배경 체워짐 형태로 사용되며, appearance을 선택하여 버튼 타입을 변경할 수 있습니다.
 *
 */
const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children = "Button",
  appearance = BUTTON_APPEARANCES.PRIMARY,
  ...props
}) => {
  return (
    <SButton appearance={appearance} {...props}>
      {children}
    </SButton>
  );
};

export default Button;

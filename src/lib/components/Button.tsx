import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { color, typography } from "../../shared/styles";
import { darken, lighten, rem, rgba } from "polished";

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
  font-size: ${rem(typography.size.s3)};
  line-height: ${rem(typography.size.s3)};
  background-color: ${color.primary};
  color: ${color.white};
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
      background: ${color.primarydark};
    }
    &:focus {
      box-shadow: 0 0 0 0.25rem rgb(${rgba(color.primary, 0.5)});
      background: ${color.primarydark};
    }
`}

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      background-color: ${color.medium};
      &:disabled {
        background-color: ${color.medium};
      }
    `}

  ${(props: { appearance: BUTTON_APPEARANCES }) =>
    props.appearance === BUTTON_APPEARANCES.PRIMARY_OUTLINE &&
    `
    color: ${color.primary};
    background-color: ${color.white};
    border:1px solid ${color.primary};

    &:active {
      background: ${color.primary};
      color: ${color.white};
    }`}
    
    ${(props: { appearance: BUTTON_APPEARANCES }) =>
    props.appearance === BUTTON_APPEARANCES.OUTLINE &&
    `
    color: ${color.medium};
    background-color: ${color.white};
    border:1px solid ${color.medium};
    transition: 0.3s transform, 0.3s border, 0.3s color;

    &:hover{
      transform: translateY(-4px);
    }
    &:active {
      border-color: ${color.primarydark};
      color: ${color.primarydark};
    }`}

${(props: { appearance: BUTTON_APPEARANCES }) =>
    props.appearance === BUTTON_APPEARANCES.SECONDARY &&
    `
    color: ${color.primary};
    background-color: transparent;
    transition: 0.3s transform, 0.3s background-color;

    &:hover{
      transform: translateY(-4px);
    }
    &:active {
        color: ${lighten(0.1, color.primary)};
    }`}

${(props: { appearance: BUTTON_APPEARANCES }) =>
    props.appearance === BUTTON_APPEARANCES.TERTIARY &&
    `
    color: ${color.mediumdark};
    background-color: ${color.medium};
    border:1px solid ${color.white};
    transition: 0.3s transform, 0.3s background-color;

    &:hover{
      transform: translateY(-4px);
    }
    &:active {
      background-color: ${darken(0.1, color.medium)};
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

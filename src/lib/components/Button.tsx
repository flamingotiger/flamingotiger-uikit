import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { color, typography } from "../../shared/styles";
import { darken, lighten, rem, rgba } from "polished";

export enum BUTTON_THEME {
  PRIMARY = "primary",
  PRIMARY_OUTLINE = "primaryOutline",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  OUTLINE = "outline",
  DISABLED = "disabled",
}

export const ResetButtonStyle = css`
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  appearance: none;
  text-transform: none;
  outline: none;
  box-sizing: border-box;
`;

export const ButtonStyle = styled.button`
  ${ResetButtonStyle};
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
    box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out;
  will-change: transform;
  vertical-align: top;
  white-space: nowrap;
  cursor: pointer;

  ${(props: { theme: BUTTON_THEME }) =>
    props.theme === BUTTON_THEME.PRIMARY &&
    `
    &:hover {
      background: ${color.primarydark};
    }
    &:focus {
      box-shadow: 0 0 0 0.25rem ${rgba(color.primary, 0.5)};
    }
`}

  ${(props: { theme: BUTTON_THEME; disabled: boolean }) =>
    (props.disabled || props.theme === BUTTON_THEME.DISABLED) &&
    `
      cursor: not-allowed !important;
      background-color: ${color.medium};
      &:disabled {
        background-color: ${color.medium};
      }
    `}

  ${(props: { theme: BUTTON_THEME }) =>
    props.theme === BUTTON_THEME.PRIMARY_OUTLINE &&
    `
    color: ${color.primary};
    background-color: ${color.white};
    border: 1px solid ${color.primary};

    &:focus {
      background: ${color.primary};
      color: ${color.white};
      box-shadow: 0 0 0 0.25rem ${rgba(color.primary, 0.5)};
    }`}
    
    ${(props: { theme: BUTTON_THEME }) =>
    props.theme === BUTTON_THEME.OUTLINE &&
    `
    color: ${color.medium};
    background-color: ${color.white};
    border:1px solid ${color.medium};

    &:hover{
      color: ${color.primarydark};
      border-color: ${color.primarydark};
    }

    &:focus {
      color: ${color.primarydark};
      border-color: ${color.primarydark};
      box-shadow: 0 0 0 0.25rem ${rgba(color.primary, 0.5)};
    }`}

${(props: { theme: BUTTON_THEME }) =>
    props.theme === BUTTON_THEME.SECONDARY &&
    `
    color: ${color.primary};
    background-color: transparent;

    &:hover{
      color: ${lighten(0.1, color.primary)};
    }
    &:focus {
      box-shadow: 0 0 0 0.25rem ${rgba(color.primary, 0.5)};
    }`}

${(props: { theme: BUTTON_THEME }) =>
    props.theme === BUTTON_THEME.TERTIARY &&
    `
    color: ${color.white};
    background-color: ${color.mediumdark};

    &:hover{
      background-color: ${darken(0.05, color.mediumdark)};
    }
    &:focus {
      box-shadow: 0 0 0 0.25rem ${rgba(color.mediumdark, 0.5)};
    }`}
`;

/**
 * 커스텀 버튼 타입 정의
 *
 *
 */
export interface ButtonProps {
  /** 버튼 텍스트 */
  children?: React.ReactNode;
  /** 버튼 타입 */
  theme?: BUTTON_THEME;
}

/** 버튼을 사용하고 싶을 땐 `Button` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 기본 배경 체워짐 형태로 사용되며, appearance을 선택하여 버튼 타입을 변경할 수 있습니다.
 * @param children
 * @param theme
 */
const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children = "Button", theme = BUTTON_THEME.PRIMARY, ...props }) => {
  return (
    <ButtonStyle theme={theme} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

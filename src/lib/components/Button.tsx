import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Colors } from "../colors";
import { Sizes } from "../sizes";

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
  background-color: ${Colors.orange.color};
  color: ${Colors.white.color};
  appearance: button;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  &:hover {
    background: ${Colors["dark-orange"].color};
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(${Colors.orange.rgb}, 0.5);
    background: ${Colors["dark-orange"].color};
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    background-color: ${Colors.gray.color};
  }
`;
/**
 * 커스텀 버튼 타입 정의
 * @param children
 */

export interface IButton {
  children?: React.ReactNode;
}

const Button: React.FC<
  IButton & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children = "Button", ...props }) => {
  return <SButton {...props}>{children}</SButton>;
};

export default Button;

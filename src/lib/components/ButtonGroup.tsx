import React from "react";
import styled from "@emotion/styled";

export type ButtonGroupProps = {
  /** 버튼을 보여줄 방향 */
  direction?: "row" | "column";
  /** 버튼과 버튼사이의 간격을 설정합니다. */
  gap?: number | string;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /* 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
  style?: React.CSSProperties;
  /* 버튼 그룹 정렬 */
  buttonGroupAlign?: BUTTON_GROUP_ALIGN;
};

export enum BUTTON_GROUP_ALIGN {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}
/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 * @param direction
 * @param children
 * @param gap
 * @param className
 * @param style
 */
const ButtonGroup: React.FC<
  ButtonGroupProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  direction = "row",
  children,
  gap = "0.5rem",
  className,
  style,
  buttonGroupAlign = BUTTON_GROUP_ALIGN.CENTER,
  ...props
}) => {
  return (
    <Group
      style={{
        display: "flex",
        flexDirection: direction,
        ...style,
      }}
      direction={direction}
      buttonGroupAlign={buttonGroupAlign}
      gap={gap}
      className={className}
      {...props}
    >
      {children}
    </Group>
  );
};

type GroupProps = {
  buttonGroupAlign: BUTTON_GROUP_ALIGN;
  direction: "row" | "column";
  gap: number | string;
};
const Group = styled.div`
  ${(props: GroupProps) =>
    props.buttonGroupAlign === BUTTON_GROUP_ALIGN.LEFT &&
    `
      justify-content: flex-start;
    `}
  ${(props: GroupProps) =>
    props.buttonGroupAlign === BUTTON_GROUP_ALIGN.CENTER &&
    `
      justify-content: center;
    `}
  ${(props: GroupProps) =>
    props.buttonGroupAlign === BUTTON_GROUP_ALIGN.RIGHT &&
    `
      justify-content: flex-end;
    `}

  button + button {
    // direction 에 따라 margin-left 또는 margin-top 설정
    ${(props: GroupProps) =>
      props.direction === "row"
        ? `margin-left: ${props.gap}`
        : `margin-top: ${props.gap}`}
  }
`;

export default ButtonGroup;

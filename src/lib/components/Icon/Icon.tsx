import React from "react";
import { icons } from "./icons";
import styled from "@emotion/styled";

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함

const Svg = styled.svg`
  display: ${(props: { block: boolean }) =>
    props.block ? "block" : "inline-block"};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
  width: 20px;
  height: 20px;
`;

const Path = styled.path`
  fill: currentColor;
`;

export interface IconProps {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
  /** 클래스 이름 */
  className?: string;
  /** 스타일 */
  style?: React.CSSProperties;
  /** 가로 세로 정렬 */
  block?: boolean;
}
/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 * @param icon
 * @param color
 * @param size
 * @param className
 * @param style
 * @param block
 */
const Icon: React.FC<IconProps> = ({
  icon,
  color,
  size,
  className,
  style,
  block = false,
  ...props
}) => {
  const SVGIcon = icons[icon];
  return (
    <Svg
      {...props}
      viewBox="0 0 1024 1024"
      style={{
        width: size,
        height: size,
        ...style,
      }}
      block={block}
      className={className}
    >
      <Path d={SVGIcon} style={{ fill: color || "currentColor" }} />
    </Svg>
  );
};

export default Icon;

import React from "react";
import * as icons from "./svg";

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함

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
}
/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 * @param icon
 * @param color
 * @param size
 * @param className
 * @param style
 */
const Icon: React.FC<IconProps> = ({ icon, color, size, className, style }) => {
  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      style={{
        fill: color || "currentColor",
        width: size,
        height: "auto",
        ...style,
      }}
      className={className}
    />
  );
};

export default Icon;

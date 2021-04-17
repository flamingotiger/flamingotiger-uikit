import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { typography } from "../shared/styles";
import { rem } from "polished";

const resetListStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
const CustomTreeViewListStyle = styled.ul`
  ${resetListStyle}
  margin-left: 1.25rem;
`;
const CustomTreeViewItemStyle = styled.li`
  ${resetListStyle};
`;
const CustomTreeViewItemButtonStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1.25rem;
  box-sizing: border-box;
  cursor: pointer;
`;
const IconStyle = styled.span`
  margin-right: 0.625rem;
`;
const Label = styled.span`
  font-size: ${rem(typography.size.s3)};
  line-height: ${rem(typography.size.s3)};
`;

export type CustomTreeViewItemProps = {
  label: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};
export const CustomTreeViewItem: React.FC<CustomTreeViewItemProps> = ({
  label,
  icon,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const onClick = () => setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  if (children) {
    return (
      <CustomTreeViewItemStyle>
        <CustomTreeViewItemButtonStyle tabIndex={0} onClick={onClick}>
          {icon && <IconStyle>{icon}</IconStyle>}
          <Label>{label}</Label>
        </CustomTreeViewItemButtonStyle>
        {isExpanded && (
          <CustomTreeViewListStyle>{children}</CustomTreeViewListStyle>
        )}
      </CustomTreeViewItemStyle>
    );
  }
  return (
    <CustomTreeViewItemStyle>
      <CustomTreeViewItemButtonStyle tabIndex={0} onClick={onClick}>
        {icon && <IconStyle>{icon}</IconStyle>}
        <Label>{label}</Label>
      </CustomTreeViewItemButtonStyle>
    </CustomTreeViewItemStyle>
  );
};

const CustomTreeViewStyle = styled.ul`
  ${resetListStyle};
`;
export type CustomTreeViewProps = {
  children: React.ReactNode;
};
const CustomTreeView: React.FC<CustomTreeViewProps> = ({ children }) => {
  return <CustomTreeViewStyle>{children}</CustomTreeViewStyle>;
};

export default CustomTreeView;

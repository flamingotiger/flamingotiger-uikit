import React, { useState } from "react";

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
      <li>
        <div tabIndex={0} onClick={onClick}>
          {icon && <span>{icon}</span>}
          <span>{label}</span>
        </div>
        {isExpanded && <ul style={{ marginLeft: "0.625rem" }}>{children}</ul>}
      </li>
    );
  }
  return (
    <li tabIndex={0} onClick={onClick}>
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </li>
  );
};
export type CustomTreeViewProps = {
  children: React.ReactNode;
};
const CustomTreeView: React.FC<CustomTreeViewProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default CustomTreeView;

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { lighten, rem } from "polished";
import React, { useState } from "react";
import { color, typography } from "../shared/styles";
import Icon from "./Icon/Icon";

export type ItemType = "caret" | "nested";
export type Item = { id: string; name: string; children: Item[] };

const resetListStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const TreeViewListStyle = styled.ul`
  ${resetListStyle}
  margin-left: 1.25rem;
`;

type TreeViewListProps = {
  items: Item[];
  level: number;
};

const TreeViewList: React.FC<TreeViewListProps> = ({ items, level }) => {
  return (
    <TreeViewListStyle className="tree_list">
      {items.map((item, index) => (
        <TreeViewItem
          key={item.id}
          type={item.children.length ? "nested" : "caret"}
          item={item}
          index={index}
          level={level + 1}
        />
      ))}
    </TreeViewListStyle>
  );
};

const TreeViewItemStyle = styled.li`
  ${resetListStyle};
`;
const TreeViewItemNameStyle = styled.div`
  display: flex;
  align-items: center;
  color: ${color.darkest};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding-left: 0.25rem;
  &:hover {
    color: ${lighten(0.1, color.primary)};
    background-color: ${color.lighter};
  }
`;

const NameStyle = styled.span`
  margin-left: 0.25rem;
  font-size: ${rem(typography.size.s3)};
  line-height: ${rem(typography.size.s3)};
  width: 100%;
  height: 100%;
  padding: 0.5rem 1.25rem 0.5rem 0;
`;
type TreeViewItemProps = {
  item: Item;
  index: number;
  level: number;
  type: ItemType;
};
const TreeViewItem: React.FC<TreeViewItemProps> = ({
  type,
  item,
  index,
  level,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const onClick = () => setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  if (type === "caret") {
    return (
      <TreeViewItemStyle
        key={item.id}
        className="tree_item"
        role="treeitem"
        aria-labelledby="tree_item"
        area-level={level}
        aria-posinset={index + 1}
        aria-setsize={item.children.length}
        aria-expanded="false"
      >
        <TreeViewItemNameStyle tabIndex={0} onClick={onClick}>
          <NameStyle>{item.name}</NameStyle>
        </TreeViewItemNameStyle>
      </TreeViewItemStyle>
    );
  }
  if (type === "nested") {
    return (
      <TreeViewItemStyle
        key={item.id}
        className="tree_item"
        role="treeitem"
        aria-labelledby="tree_item"
        area-level={level}
        aria-posinset={index + 1}
        aria-setsize={item.children.length}
        aria-expanded="true"
      >
        <TreeViewItemNameStyle tabIndex={0} onClick={onClick}>
          <Icon
            icon={isExpanded ? "arrowdown" : "arrowright"}
            size={rem(typography.size.s3)}
          />
          <NameStyle>{item.name}</NameStyle>
        </TreeViewItemNameStyle>
        {item.children.length > 0 && isExpanded && (
          <TreeViewList items={item.children} level={level} />
        )}
      </TreeViewItemStyle>
    );
  }
  return null;
};

const TreeViewStyle = styled.ul`
  ${resetListStyle}
`;

export type TreeViewProps = {
  data: Item[];
  className?: string;
  style?: React.CSSProperties;
};

const TreeView: React.FC<TreeViewProps> = ({ data, className, style }) => {
  return (
    <TreeViewStyle
      className={`tree_view ${className}`}
      style={style}
      role="tree"
      aria-labelledby="tree_view"
    >
      {data.length > 0 &&
        data.map((item, index) => (
          <TreeViewItem
            key={item.id}
            type={item.children.length ? "nested" : "caret"}
            level={1}
            item={item}
            index={index}
          />
        ))}
    </TreeViewStyle>
  );
};

export default TreeView;

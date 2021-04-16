import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Item, ItemType, TreeViewContextProvider } from "./TreeViewContext";

const resetListStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const datas = [
  {
    id: "1단계 1번",
    name: "1단계 1번",
    children: [{ id: "2단계 1번", name: "2단계 트리 - 1", children: [] }],
  },
  {
    id: "1단계 2번",
    name: "1단계 2번",
    children: [
      {
        id: "2단계 1번",
        name: "2단계 1번",
        children: [
          {
            id: "3단계 1번",
            name: "3단계 1번",
            children: [{ id: "4단계 1번", name: "4단계 1번", children: [] }],
          },
        ],
      },
      { id: "2단계 2번", name: "2단계 2번", children: [] },
    ],
  },
];

const TreeViewListStyle = styled.ul``;
type TreeViewListProps = {
  items: Item[];
  level: number;
};
const TreeViewList: React.FC<TreeViewListProps> = ({ items, level }) => {
  return (
    <TreeViewListStyle className="tree_list">
      {items.map((item, index) => (
        <TreeViewItem
          type={item.children.length ? "nested" : "caret"}
          item={item}
          index={index}
          level={level + 1}
        />
      ))}
    </TreeViewListStyle>
  );
};

const TreeViewItemStyle = styled.li``;
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
        tabIndex={0}
      >
        <span>{item.name}</span>
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
        <span tabIndex={0}>{item.name}</span>
        {item.children.length > 0 && (
          <TreeViewList items={item.children} level={level} />
        )}
      </TreeViewItemStyle>
    );
  }
  return null;
};

const TreeViewContentStyle = styled.ul`
  ${resetListStyle}
`;

interface TreeViewProps {
  data: Item[];
  className?: string;
  style?: React.CSSProperties;
}
const TreeViewContent: React.FC<TreeViewProps> = ({
  data,
  className,
  style,
}) => {
  return (
    <TreeViewContentStyle
      className={`tree_view ${className}`}
      style={style}
      role="tree"
      aria-labelledby="tree_view"
    >
      {data.length > 0 &&
        data.map((item, index) => (
          <TreeViewItem
            type={item.children.length ? "nested" : "caret"}
            level={1}
            item={item}
            index={index}
          />
        ))}
    </TreeViewContentStyle>
  );
};

const TreeView: React.FC<TreeViewProps> = (props) => {
  return (
    <TreeViewContextProvider>
      <TreeViewContent {...props} />
    </TreeViewContextProvider>
  );
};

TreeView.defaultProps = {
  data: datas,
};

export default TreeView;

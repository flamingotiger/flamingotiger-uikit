import React from "react";
import TreeView, { TreeViewProps } from "../lib/TreeView";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/TreeView",
  component: TreeView,
  argTypes: {},
} as Meta;

const data = [
  {
    id: "1단계 1번",
    name: "1단계 1번",
    children: [{ id: "2단계 1번", name: "2단계 1번", children: [] }],
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

export const Basic: Story<TreeViewProps> = (args) => <TreeView {...args} />;
Basic.args = {
  data,
};

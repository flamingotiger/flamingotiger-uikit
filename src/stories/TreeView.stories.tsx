import React from "react";
import TreeView from "../lib/TreeView";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/TreeView",
  component: TreeView,
  argTypes: {},
} as Meta;

export const Basic: Story = (args) => <TreeView {...args} />;

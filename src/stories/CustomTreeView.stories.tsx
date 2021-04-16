import React from "react";
import { Story, Meta } from "@storybook/react";
import CustomTreeView, {
  CustomTreeViewItem,
  CustomTreeViewProps,
} from "../lib/CustomTreeView";
import Icon from "../lib/Icon/Icon";

export default {
  title: "Components/CustomTreeView",
  component: CustomTreeView,
  argTypes: {},
} as Meta;

export const Basic: Story<CustomTreeViewProps> = (args) => (
  <CustomTreeView>
    <CustomTreeViewItem icon={<Icon icon="bell" />} label="Bell" />
    <CustomTreeViewItem icon={<Icon icon="box" />} label="Box">
      <CustomTreeViewItem icon={<Icon icon="bookmark" />} label="Bookmark" />
      <CustomTreeViewItem icon={<Icon icon="bottombar" />} label="Bottombar" />
    </CustomTreeViewItem>
  </CustomTreeView>
);

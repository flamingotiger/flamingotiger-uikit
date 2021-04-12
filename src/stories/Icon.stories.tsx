import React from "react";
import Icon, { IconProps, iconTypes } from "../lib/Icon/Icon";
import styled from "@emotion/styled";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: { control: "color" },
    size: { control: "text" },
    icon: {
      control: {
        type: "select",
        options: iconTypes,
      },
    },
  },
} as Meta;

export const Basic: Story<IconProps> = (args) => <Icon {...args} />;
Basic.args = {
  icon: "plus",
};

export const CustomSize = Basic.bind({});
CustomSize.args = { icon: "plus", size: "4rem" };

export const CustomColor = Basic.bind({});
CustomColor.args = { icon: "plus", color: "red" };

export const CustomizedWithStyle = Basic.bind({});
CustomizedWithStyle.args = { style: { color: "red", width: "4rem" } };

export const InlineBlockIcon = () => (
  <p>
    This is inline block
    <Icon icon="user" />
    User Icon!!
  </p>
);

export const BlockIcon = () => (
  <p>
    This is block
    <Icon icon="user" block />
    User Icon!!
  </p>
);

const IconList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    list-style: none;
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

export const listOfIcons = () => {
  return (
    <IconList>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </IconList>
  );
};

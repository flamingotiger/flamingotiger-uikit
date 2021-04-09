import React from "react";
import Icon, { IconProps, iconTypes } from "../lib/Icon/Icon";
import styled from "@emotion/styled";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: { control: "black" },
    size: { control: "1rem" },
    icon: {
      control: {
        type: "select",
        options: iconTypes,
      },
    },
  },
};

export const Basic = (args: IconProps) => <Icon {...args} />;
Basic.args = {
  icon: "plus",
};

export const CustomSize = () => <Icon icon="plus" size="4rem" />;

export const CustomColor = () => <Icon icon="plus" color="red" />;

export const CustomizedWithStyle = () => (
  <Icon icon="plus" style={{ color: "red", width: "4rem" }} />
);

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

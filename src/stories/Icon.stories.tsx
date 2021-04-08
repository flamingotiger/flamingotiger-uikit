import React from "react";
import Icon from "../lib/Icon/Icon";

export default {
  title: "Components/Icon",
  component: Icon,
};

export const Basic = () => <Icon icon="plus" />;

export const CustomSize = () => <Icon icon="plus" size="4rem" />;

export const CustomColor = () => <Icon icon="plus" color="red" />;

export const CustomizedWithStyle = () => (
  <Icon icon="plus" style={{ color: "red", width: "4rem" }} />
);

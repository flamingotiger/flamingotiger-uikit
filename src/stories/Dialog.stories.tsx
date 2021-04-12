import React from "react";
import Dialog, { DialogProps } from "../lib/components/Dialog";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    visible: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
    hideButtons: { control: "boolean" },
    cancellable: { control: "boolean" },
    cancelText: { control: "text" },
    confirmText: { control: "text" },
    className: { control: "text" },
  },
  parameters: {
    docs: {
      inlineStories: false,
      story: {
        ifameHeight: 500,
      },
    },
  },
} as Meta;

export const dialog: Story<DialogProps> = (args: DialogProps) => {
  return <Dialog {...args} />;
};

dialog.args = {
  title: "포스트 작성 성공",
  description: "포스트 작성을 성공하였습니다.",
  visible: true,
  confirmText: "확인",
  cancelText: "취소",
  cancellable: false,
};

export const CancelLable = dialog.bind({});
CancelLable.args = {
  title: "포트스 삭제",
  description: "포스트를 삭제하시겠습니까?",
  visible: true,
  confirmText: "삭제",
  cancellable: true,
};

export const CustomContent = dialog.bind({});
CustomContent.args = {
  visible: true,
  children: "Custom Content",
  hideButtons: true
};
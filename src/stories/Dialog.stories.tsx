import React from "react";
import Dialog from "../lib/components/Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false
    }
  }
};

export const dialog = () => {
  return <Dialog />;
};

dialog.story = {
  name: "Default",
};

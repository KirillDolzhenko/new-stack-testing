import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/ui/Button/Button";

const meta = {
  title: "Example UI Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Something",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    onClick: () => {
      console.log("Something");
    },
  },
};

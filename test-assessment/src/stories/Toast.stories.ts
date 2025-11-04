import type { Meta, StoryObj } from "@storybook/react-vite";
import Toast from "../UI/Toast/Toast";

const meta = {
  title: 'Example/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    toastType: {
      control: {
        type: 'radio',
        options: ['success', 'danger', 'info', 'warning'],
      },
    },
    message: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToast: Story = {
  args: {
    toastType: 'success',
    message: 'This is a default success toast message!',
  },
};

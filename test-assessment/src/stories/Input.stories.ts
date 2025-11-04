import type { Meta, StoryObj } from "@storybook/react-vite";
import InputBase from "../UI/Input/InputBase";


const meta = {
  title: 'Example/Input',
  component: InputBase,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholderInput: 'Enter text...',
    typeInput: 'text',
  },
};

export const Password: Story = {
  args: {
    typeInput: 'password',
    placeholderInput: 'Enter password...',
  }
}

export const Clearable: Story = {
  args: {
    isClearable: true
  }
}

export const PasswordAndClearable: Story = {
  args: {
    isClearable: true,
    typeInput: 'password',
  }
}
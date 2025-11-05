import type { Meta, StoryObj } from "@storybook/react";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import type { IMenuItems } from "../components/SidebarMenu/interface";


// Links for menu
const oneLevelMenu: IMenuItems[] = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
];

const twoLevelMenu: IMenuItems[] = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  {
    label: 'Services',
    link: '#',
    subMenu: [
      { label: 'Web Development', link: '/web' },
      { label: 'Mobile Development', link: '/mobile' },
    ],
  },
  { label: 'Support', link: '/support' },
];

const threeLevelMenu: IMenuItems[] = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  {
    label: 'Services',
    link: '#',
    subMenu: [
      { label: 'Web Development', link: '/web' },
      {
        label: 'Mobile Development',
        link: '#',
        subMenu: [
          { label: 'iOS Apps', link: '/ios' },
          { label: 'Android Apps', link: '/android' },
        ],
      },
    ],
  },
  { label: 'Contact', link: '/contact' },
];

const meta = {
  title: 'Example/SideBar',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneLevel: Story = {
  args: {
    menuItems: oneLevelMenu,
  },
};

export const TwoLevel: Story = {
  args: {
    menuItems: twoLevelMenu,
  },
};

export const ThreeLevel: Story = {
  args: {
    menuItems: threeLevelMenu,
  },
};
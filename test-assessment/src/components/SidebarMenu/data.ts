import type { IMenuItems } from "./interface";

export const menuItems:IMenuItems[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Services',
    link: '#',
    subMenu: [
      { 
        label: 'Web Development', 
        link: '/services/web-development',
      },
      { 
        label: 'Mobile Development', 
        link: '',
        subMenu: [ // 👇 Second level
          {
            label: 'iOS Apps',
            link: '/services/mobile-development/ios',
          },
          {
            label: 'Android Apps',
            link: '/services/mobile-development/android',
          },
        ],
      },
    ],
  },
  {
    label: 'Support',
    link: '/support',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];
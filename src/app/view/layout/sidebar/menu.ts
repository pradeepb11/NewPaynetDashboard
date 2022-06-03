import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label:'Invoice',
    isTitle: true,
  },
  // {
  //   label: 'Invoice',
  //   icon: 'slack',
  //   subItems: [
  //     {
  //       label: 'Invoice A',
  //         link: '',
  //     },
  //     {
  //       label: 'Invoice B',
  //       link: ''
  //     },
  //     {
  //       label: 'Invoice C',
  //       link: ''
  //     },
  //   ]
  // },
  {
    label:'golive personal Information',
    icon: 'home',
    link: '/personalinfo'
  }
 
  
];

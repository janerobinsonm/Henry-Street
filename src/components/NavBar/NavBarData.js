import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavBarData = [
  {
    title: 'Notifcations',
    path: '/',
    icon: <AiIcons.AiOutlineBell />,
    cName: 'nav-text'
  },
  {
    title: 'My Food List',
    path: '/reports',
    icon: <FaIcons.FaListAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Find Food',
    path: '/products',
    icon: <FaIcons.FaSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Food Banks',
    path: '/locations',
    icon: <IoIcons.IoMdStarOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Resources',
    path: '/messages',
    icon: <FaIcons.FaInfoCircle />,
    cName: 'nav-text'
  }
];

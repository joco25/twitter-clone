import React from 'react';
import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';

const items = [
  {
    label: 'Home',
    href: '/',
    icon: BsHouseFill,
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: BsBellFill,
  },
  {
    label: 'Profile',
    href: '/users/1',
    icon: FaUser,
  },
];
const Sidebar = () => {
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem key={item.href} {...item} />
          ))}
          <SidebarItem onClick={() => {}} label='Logout' icon={BiLogOut} />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
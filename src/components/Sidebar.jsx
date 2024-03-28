import React, { useState } from 'react';
import { RiDashboardFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { GrOrganization } from 'react-icons/gr';
import { TbReportSearch } from 'react-icons/tb';
import { IoSettings } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Sidebar = ({ children }) => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=> setIsOpen(!isOpen);
    
  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <RiDashboardFill />,
    },
    {
      path: '/customer',
      name: 'Customer',
      icon: <CgProfile />,
    },
    {
      path: '/organization',
      name: 'Organization',
      icon: <GrOrganization />,
    },
    {
      path: '/reporting',
      name: 'Reporting',
      icon: <TbReportSearch />,
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: <IoSettings />,
    },
  ];
  
  return (
    <div className='container'>
      <div  style={{width:isOpen?"200px":"50px"}}className='sidebar'>
        <div className='top_section'>
          {/* <h1  style={{display:isOpen?"block":"none"}}className='logo'> Logo</h1> */}
          <div style={{marginLeft:isOpen?"16px":"10px"}}className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className='icon'>{item.icon}</div>
            <div style={{display:isOpen?"block":"none"}} className='icon'>{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main> 
    </div>
  );
};

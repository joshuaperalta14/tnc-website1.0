import React, { useState } from 'react';
import "./Sidebar.css";
import {
  FaBars,
  FaTh,
  FaCubes,
  FaUserFriends,
  FaMoneyBill,
  FaProjectDiagram,
  FaFileAlt,
  FaInbox,
  FaFile,
  FaHeadset,
  FaCog,
  FaAngleDown, // New icon for dropdown
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/TNC_2020_Logo_Landscape_Group_white2.png';

const Sidebar = ({children}) => {
  const[isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
    {
      path:"/dashboard",
      name: "Dashboard",
      icon: <FaTh/>
    },
    {
      path:"/inventory",
      name: "Inventory",
      icon: <FaCubes/>,
      children: [
        { path: "/inventory/items", name: "Items" },
      ]
    },
    {
      path:"/suppliers",
      name: "Suppliers",
      icon: <FaUserFriends/>
    },
    {
      path:"/expenses",
      name: "Expenses",
      icon: <FaMoneyBill/>
    },
    {
      path:"/projects",
      name: "Projects",
      icon: <FaProjectDiagram/>
    },
    {
      path:"/report",
      name: "Report",
      icon: <FaFileAlt/>
    },
    {
      path:"/inbox",
      name: "Inbox",
      icon: <FaInbox/>
    },
    {
      path:"/documents",
      name: "Documents",
      icon: <FaFile/>
    },
    {
      path:"/contactsupport",
      name: "Contact Support",
      icon: <FaHeadset/>
    },
    {
      path:"/settings",
      name: "Settings",
      icon: <FaCog/>
    }
  ]
  
  return (
    <div className="container">
      <div style={{width: isOpen ? "210px" : "60px"}} className="sidebar">
        <div className="top_section">
          <img src={logoImage} alt="Logo" style={{ display: isOpen ? "block" : "none" }} className="logo" />
          <div style={{marginLeft: isOpen ? "35px" : "1px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item, index)=>(
            <div key={index}>
              {item.children ? (
                <div className="sidebar-link" onClick={() => console.log('Toggle dropdown')}>
                  <div className="icon">{item.icon}</div>
                  <div className="link-text" style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
                  <div className="dropdown-icon" style={{display: isOpen ? "block" : "none"}}><FaAngleDown/></div>
                </div>
              ) : (
                <NavLink to={item.path} key={index} className="sidebar-link" activeClassName="active">
                  <div className="icon">{item.icon}</div>
                  <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
                </NavLink>
              )}
              {item.children && isOpen && (
                <div className="dropdown-menu">
                  {item.children.map((child, idx) => (
                    <NavLink to={child.path} key={idx} className="sidebar-link" activeClassName="active">
                      <div className="icon" style={{marginLeft: '25px'}}>{item.icon}</div>
                      <div className="link-text">{child.name}</div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))
        }
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Sidebar;

/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import '../assets/css/AdminSidebar.css';
const AdminSideBar = (imagePath) => {
    const [activeMenu, setActiveMenu] = useState('false');
    const SideBarList = [
        { name: "User Management", link: "/",},
        { name: "Order Management", link: "/profile" },
        { name: "Invoice Listing", link: "/settings" },
        { name: "Logout", link: "/logout" }
    ];
    const UserSubMenu = [
        { name: "User List", link: "/user-management",},
        { name: "Create User", link: "/createuser" },
        { name: "Delete User", link: "/createuser" },
        { name: "Update User", link: "/createuser" }

    ];
    const OrderMenu = [
        { name: "Order List", link: "/orderlist" },
        { name: "Create Order", link: "/createorder" },
        { name: "Delete Order", link: "/deleteorder" },
        { name: "Update Order", link: "/updateorder" }
    ];

    const subMenuMapping = {
        "User Management": UserSubMenu,
        "Order Management": OrderMenu
    };

    const toggleSubMenu = (e, name) => {
        e.preventDefault();
        setActiveMenu((prevState) => {
            // Check if the name is already in the active menu array
            const newActiveMenus = prevState.activeMenu.includes(name)
                ? prevState.activeMenu // If the name is already in the array, don't add it again
                : [...prevState.activeMenu, name]; // Otherwise, add it to the array
    
            return {
                ...prevState,
                activeMenu: newActiveMenus
            };
        });
        console.log(activeMenu);
    };
    
    const renderSubMenu = (name, subMenu) => {
        if (subMenu.length > 0 && activeMenu === name) {
            return (
                <ul>
                    {subMenu.map((item, index) => (
                        <li key={index} >
                            <a onClick={(e) => toggleSubMenu(e,item.name)}>{item.name}</a>
                            {/* {item.name === "User Management" ? renderSubMenu(item.name, UserSubMenu) : item.name === "Order Management" ? renderSubMenu(item.name, OrderMenu) : null} */}
                            {renderSubMenu(item.name, subMenuMapping[activeMenu] || [])}
                        </li>
                    ))}
                </ul>
            );
        }
    }
    
    return (
        
            <nav className='sidebar'>
                <div className="logo">
                   <h2>BUY<span style={{color:"red"}}>WITHUS</span></h2>
                </div>
                <ul className="sidebar-list">
                {SideBarList.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} onClick={subMenuMapping[item.name] ? (e) => {e.preventDefault(); setActiveMenu(activeMenu === item.name ? undefined : item.name);} : undefined}>{item.name}</a>
                        {subMenuMapping[item.name] && renderSubMenu(item.name, subMenuMapping[item.name])
                        }
                    </li>
                ))}
                </ul>
            </nav>
        
    );
};

export default AdminSideBar;
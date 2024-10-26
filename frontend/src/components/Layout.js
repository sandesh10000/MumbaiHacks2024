import React from "react";
import "../styles/LayoutStyles.css";

import { SidebarMenu } from "./../Data/data";
//
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../img/LOGO-removebg-preview.png"

import { message } from "antd";
const Layout = ({ children }) => {

  const location = useLocation();
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };



  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <img src={logo} alt="logo-pic"  className="logoimg"/>
          
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}

              {/* About US */}
            </div>
          </div>
          <div className="content ">
            <div className="header ">
              <h1 className="head p-2 text-lg"></h1>
              <div className="header-content" style={{ cursor: "pointer" }}>
              

                <div className={`menu-item log-btn `} onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket "></i>
                  <Link to="/login" />
                </div>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Layout;

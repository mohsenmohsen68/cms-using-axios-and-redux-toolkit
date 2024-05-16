import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { GiMoon } from "react-icons/gi";
import { IoIosSunny } from "react-icons/io";

function Header() {
  return (
    <div
      className="row container mt-2 rounded-2 mx-auto shadow-sm"
      style={{ height: "80px" }}
    >
      <div className="col-6 col-md-3 ">
        <img src="/img/logo.jpg" alt="logo" width={108} height={78} />
      </div>
      <div className="d-none d-md-flex col-md-6">
        <nav class="nav nav-pills nav-justified align-content-center">
          <NavLink className={`nav-link px-2 py-3 ${({ isActive }) => isActive ? "active" : ""}`} to="/">
            کاربران
          </NavLink>
          <NavLink className={`nav-link px-2 py-3 ${({ isActive }) => isActive ? "active" : ""}`} to="information">
             اطلاعات
          </NavLink>
          <NavLink className={`nav-link px-2  py-3 ${({ isActive }) => isActive ? "active" : ""}`} to="/courses">
            دوره‌ها
          </NavLink>
          <NavLink className={`nav-link px-2 py-3 ${({ isActive }) => isActive ? "active" : ""}`} to="/articles">
            مقالات
          </NavLink>
        </nav>
      </div>
      <div className="col-6 col-md-3 ">
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <HiOutlineLogout style={{width:'30px', height:'30px', marginLeft:'4px',color:'red'}}/>
            <IoIosNotifications style={{width:'30px', height:'30px', marginLeft:'4px',color:'green'}}/>
            <GiMoon style={{width:'30px', height:'30px', marginLeft:'4px',color:'black'}}/>
            <IoIosSunny style={{width:'30px', height:'30px', marginLeft:'4px',color:'goldenrod'}}/>
        </div>
      </div>
    </div>
  );
}

export default Header;

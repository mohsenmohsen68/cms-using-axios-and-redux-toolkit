import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { GiMoon } from "react-icons/gi";
import { IoIosSunny } from "react-icons/io";
import {
    StyledDiv,
    lightTheme} from "./../../styles/Styles"

function Header({changeTheme, theme}) {
    
  return (
    <StyledDiv
      className="row container mt-2 rounded-2 mx-auto shadow-sm"
      style={{ height: "80px" }}
    >
      <StyledDiv className="col-6 col-md-3 d-flex align-items-center justify-content-center ">
        <img src="/img/logo.jpg" alt="logo" width={98} height={70} />
      </StyledDiv>
      <StyledDiv className="d-none d-md-flex col-md-6">
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
      </StyledDiv>
      <StyledDiv className="col-6 col-md-3 ">
        <StyledDiv className="w-100 h-100 d-flex justify-content-center align-items-center">
            <HiOutlineLogout style={{width:'30px', height:'30px', marginLeft:'4px',color:'red'}}/>
            {theme === lightTheme ? 
            (<GiMoon onClick={()=>{changeTheme()}} style={{width:'30px', height:'30px', marginLeft:'4px',color:'black'}}/>) : 
            ( <IoIosSunny onClick={()=>{changeTheme()}} style={{width:'30px', height:'30px', marginLeft:'4px',color:'goldenrod'}}/> ) }
            <IoIosNotifications style={{width:'30px', height:'30px', marginLeft:'4px',color:'green'}}/>
             </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default Header;

import React from "react";
import { StyledDiv, Icon } from "../../styles/Styles";
import { BiRename } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { LuKey } from "react-icons/lu";
import "./Information.css";

export default function Information() {
  return (
    <StyledDiv className="h-100 w-100 m-0 p-0">
      <StyledDiv className="w-100 d-flex justify-content-evenly ">
        <div className="border d-flex inputWrapper bg-white mt-4">
          <BiRename className="h3 h-100" />

          <input
            type="text"
            placeholder="نام"
            className="textInput h-100"
            style={{ width: "90%", border: "0px" }}
          />
        </div>
        <div className="border d-flex inputWrapper bg-white mt-4">
          <BiRename className="h3 h-100" />

          <input
            type="text"
            placeholder="نام خانوادگی"
            className="textInput h-100"
            style={{ width: "90%", border: "0px" }}
          />
        </div>
      </StyledDiv>

      <StyledDiv className="w-100 d-flex justify-content-evenly mt-4 ">
        <div className="border d-flex inputWrapper bg-white ">
          <FaRegUserCircle className="h3 h-100" />

          <input
            type="text"
            placeholder="نام کاربری"
            className="textInput h-100"
            style={{ width: "90%", border: "0px" }}
          />
        </div>
        <div className="border d-flex inputWrapper bg-white ">
          <MdEmail className="h3 h-100" />

          <input
            type="text"
            placeholder="پست الکترونیکی"
            className="textInput h-100"
            style={{ width: "90%", border: "0px" }}
          />
        </div>
      </StyledDiv>

      <StyledDiv
        className=" d-flex gap-2 justify-content-evenly mt-4 mx-auto "
        style={{ width: "95%" }}
      >
        <div className="border d-flex inputWrapper bg-white ">
          <LuKey className="h3 h-100" />

          <input
            type="text"
            placeholder="رمز جاری"
            className="textInput h-100"
            style={{ width: "90%", border: "0px" }}
          />
        </div>
        <div className="border d-flex inputWrapper bg-white ">
          <LuKey className="h3 h-100" />

          <input
            type="text"
            placeholder="رمز جدید"
            className="textInput h-100"
            style={{ width: "90%", border: "0px" }}
          />
        </div>
        <div className="border d-flex inputWrapper bg-white ">
          <LuKey className="h3 h-100" />

          <input
            type="text"
            placeholder="تکرار رمز جدید"
            className="textInput h-100"
            style={{ width: "90%", border: "0px" }}
          />
        </div>
      </StyledDiv>

      <StyledDiv>
        <div className="row px-3 mt-4">
          <div className="col-3 position-relative d-flex justify-content-center" style={{ height: "200px" }}>
              <p className="bg-white position-absolute translate-middle-y">تصویر پروفایل</p>
                <img
              src="/img/profile.jpg"
              alt="profilePicture"
              className="w-100 h-100"
              />
            
          </div>
          <div className="col-9 position-relative d-flex justify-content-center " style={{ height: "200px" }}>
          <p className="bg-white position-absolute translate-middle-y">تصویر بنر پروفایل</p>
                <img
              src="/img/redux.webp"
              alt="profilePicture"
              className="w-100 h-100"
              />
          </div>
        </div>
      </StyledDiv>
    </StyledDiv>
  );
}

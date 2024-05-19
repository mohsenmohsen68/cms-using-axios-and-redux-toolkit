import React from "react";
import Button from "react-bootstrap/Button";
import { BiRename } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  StyledDiv,
  Title,
  SubTitle,
  Desc,
  Icon,
  lightTheme,
  darkTheme,
} from "./../../styles/Styles";

export default function SideBar() {
  return (
    <StyledDiv className="w-100 h-100 d-flex flex-column position-relative ">
      <StyledDiv>
        <img
          src="/img/redux.webp"
          className="w-100"
          style={{ height: "150px" }}
          alt="bannerImage"
        />
        <img
          src="/img/profile.jpg"
          className="w-45 rounded-circle position-absolute "
          style={{
            height: "80px",
            top: "90px",
            right: "50%",
            transform: "translate(50%,0%)",
          }}
          alt="profileImage"
        />
        <SubTitle className="mt-3"> علی احمدی </SubTitle>
        <Desc> توسعه دهنده فرانت اند </Desc>
      </StyledDiv>
      <StyledDiv className="py-0 my-0">
        <StyledDiv className="d-flex justify-content-between align-content-center px-2 py-0 my-0">
          <div className="d-flex">
            <Icon>
              <BiRename className="mx-1" />
            </Icon>
            <Desc>نام</Desc>
          </div>
          <Desc>علی</Desc>
        </StyledDiv>
        <hr className="m-0" />
      </StyledDiv>
      <StyledDiv className="d-flex justify-content-between align-content-center px-2 py-0 my-0">
        <div className="d-flex">
          <Icon>
            <BiRename className="mx-1" />
          </Icon>
          <Desc>نام خانوادگی</Desc>
        </div>
        <Desc>احمدی</Desc>
      </StyledDiv>
      <hr className="m-0" />
      <StyledDiv>
        <StyledDiv className="d-flex justify-content-between align-content-center px-2 py-0 my-0">
          <div className="d-flex">
            <Icon>
              <FaChalkboardTeacher className="mx-1" />
            </Icon>
            <Desc>دوره </Desc>
          </div>
          <Desc>ریداکس</Desc>
        </StyledDiv>
      </StyledDiv>
      <Button className="mb-3"> تغییر اطلاعات </Button>
    </StyledDiv>
  );
}

import React from "react";
import { Desc, StyledBtn, StyledDiv } from "../../styles/Styles";

export default function User({name, username, email}) {
  return (
    <StyledDiv className="d-flex justify-content-evenly border align-items-center ">
      <img
        src="/img/profile.jpg"
        alt="profileImage"
        className="rounded-circle border"
        style={{ width: "60px", height: "60px" }}
      />
      <div className="d-flex flex-column">
        <Desc> {name}</Desc>
        <Desc> {email} </Desc>
      </div>
      <StyledDiv className="d-flex gap-2">
        <StyledBtn className="bg-info"> پیام ها </StyledBtn>
        <StyledBtn className="bg-warning"> ویرایش کاربر </StyledBtn>
        <StyledBtn className="bg-danger"> حذف کاربر </StyledBtn>
      </StyledDiv>
    </StyledDiv>
  );
}

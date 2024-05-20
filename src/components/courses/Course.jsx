import React from "react";
import {
  Desc,
  Icon,
  StyledBtn,
  StyledDiv,
  SubSubTitle,
} from "../../styles/Styles";
import { IoIosPricetags } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";

export default function Course(props) {
  return (
    <StyledDiv className="row w-100 border" style={{ height: "150px" }}>
      <StyledDiv className="col-3">
        <img
          src="/img/redux.webp"
          alt="coursePicture"
          className="h-100"
          style={{ width: "200px" }}
        />
      </StyledDiv>

      <StyledDiv className="d-flex flex-column col-9 pb-2 ">
        <StyledDiv className=" p-2" style={{ flex: "4", textAlign: "start" }}>
          <SubSubTitle>دوره متخصص ریداکس</SubSubTitle>
          <Desc className="text-truncate ">
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </Desc>
        </StyledDiv>

        <StyledDiv
          className=" d-flex justify-content-between"
          style={{ flex: "1" }}
        >
          <StyledDiv
            className="d-flex justify-content-evenly"
            style={{ flex: "4" }}
          >
            {props.type === 'course' ? (<StyledDiv className="d-flex  align-items-center ">
              <Icon>
                <IoIosPricetags className="text-info"/>
              </Icon>
              <Desc
                style={{
                  fontSize: "14px",
                  paddingRight: "5px",
                  margin: "auto auto",
                }}
              >
                قیمت : {(350000).toLocaleString("fa-ir")}
              </Desc>
            </StyledDiv>) : (<></>)}

            <StyledDiv className="d-flex  align-items-center ">
              <Icon>
                <MdCategory className="text-info"/>
              </Icon>
              <Desc
                style={{
                  fontSize: "14px",
                  paddingRight: "5px",
                  margin: "auto auto",
                }}
              >
                دسته بندی : frontend
              </Desc>
            </StyledDiv>

            <StyledDiv className="d-flex  align-items-center ">
              <Icon>
                <FaChartLine className="text-info"/>
              </Icon>
              <Desc style={{
                  fontSize: "14px",
                  paddingRight: "5px",
                  margin: "auto auto",
                }}>
                {props.type === 'course' ? 'تعداد فروش': 'تعداد بازدید' }: {(10).toLocaleString("fa-ir")}
              </Desc>
            </StyledDiv>

          </StyledDiv>

          <StyledDiv
            className="d-flex justify-content-evenly align-items-center"
            style={{ flex: "1" }}
          >
            <StyledBtn className="bg-warning">ویرایش</StyledBtn>
            <StyledBtn className="bg-danger">حذف</StyledBtn>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

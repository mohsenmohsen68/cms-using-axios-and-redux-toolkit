import styled from "styled-components";



export const StyledDiv = styled.div`
  /* text-align: center; */
  padding: 0px;
  margin: 0px;
  background-color: ${(props) => props.theme.body};
`;

export const StyledBtn = styled.button`
background-color:green;
height: fit-content;
padding: 5px;
border:0px solid`


export const Title = styled.h1`
  font-size: 42px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;
export const SubTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;
export const SubSubTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;
export const Desc = styled.p`
  font-size: 16px;
  font-weight: 200;
  color : ${(props) => props.theme.desc};
`;
export const Icon = styled.p`
  margin: 0px;
  font-size: 22px;
  font-weight: 400;
  color : ${(props) => props.theme.icon};
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: rgba(136, 165, 191, 0.2) 2px 1px 2px 1px,
    rgba(255, 255, 255, 0.2) -2px -1px 2px 1px;
  margin: 2px auto;
  width: fit-content;
  padding: 9px;
  height: 100px;
`;

export const ErrorMsg = styled.h6`
  margin: 0px;
  color: red;
`

export const lightTheme = {
  body: "#fff",
  desc: "#3a413c",
  icon: "#3a413c",
  title: "#3a413c"
};

export const darkTheme = {
  body: "#3a413c",
  desc: "#fff",
  icon: "#fff",
  title: "#fff"
};
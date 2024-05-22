import React from "react";
import { Desc, StyledBtn, StyledDiv } from "../../styles/Styles";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/store/UsersReducer";
import swal from "sweetalert";

export default function User({ firstname, lastname, email,_id}) {
  const dispatch = useDispatch();

  const removeHandler = (id) =>{
    swal({
      title:'آیا از حذف کاربر مطمئن هستید؟',
      icon:'warning',
      buttons:['خیر','بلی']
    }).then((result)=>{
      console.log(result)
      if(result){
        dispatch(removeUser(_id))
        swal({
          title:'کاربر با موفقیت حذف گردید .',
          icon:'success',
          button:'اوکی'
        })
      }
    })
   
    
  }
  
//  useEffect(()=>{
//   dispatch(getUserFromServer('https://redux-cms.iran.liara.run/api/users'))
//  },[])
  return (
    <StyledDiv className="d-flex justify-content-evenly border align-items-center ">
      <img
        src="/img/profile.jpg"
        alt="profileImage"
        className="rounded-circle border"
        style={{ width: "60px", height: "60px" }}
      />
      <div className="d-flex flex-column">
        <Desc> {firstname} {lastname} </Desc>
        <Desc> {email} </Desc>
      </div>
      <StyledDiv className="d-flex gap-2">
        <StyledBtn className="bg-info"> پیام ها </StyledBtn>
        <StyledBtn className="bg-warning"> ویرایش کاربر </StyledBtn>
        <StyledBtn className="bg-danger" onClick={()=>removeHandler(_id)}> حذف کاربر </StyledBtn>
      </StyledDiv>
    </StyledDiv>
  );
}

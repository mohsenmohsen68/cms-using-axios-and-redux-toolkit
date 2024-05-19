import React from 'react'
import {StyledDiv, StyledBtn,Desc} from './../../styles/Styles'

export default function Users() {
  return (
    
     <StyledDiv className=' w-100 h-100 p-3'>
      <StyledDiv className='d-flex justify-content-evenly'>
        <input type="text" className="w-50" placeholder='نام یا ایمیل کاربر را وارد کنید ...' />
        <StyledBtn className='bg-danger'>حذف کاربر</StyledBtn>
      </StyledDiv>


      <StyledDiv className=' mt-3 p-3'>
        <StyledDiv className='d-flex justify-content-evenly border align-items-center '>
          <img src="/img/profile.jpg" alt="profileImage" className='rounded-circle border' style={{width:'60px', height:'60px'}} />
          <div className='d-flex flex-column'>
            <Desc> علی احمدی</Desc>
            <Desc> aliahmadi@gmail.com </Desc>
          </div>
          <StyledDiv className='d-flex gap-2'>
            <StyledBtn className='bg-info'> پیام ها </StyledBtn>
            <StyledBtn className='bg-warning'> ویرایش کاربر </StyledBtn>
            <StyledBtn className='bg-danger'> حذف کاربر </StyledBtn>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>


     </StyledDiv>
    
  )
}

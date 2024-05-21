import React, { useEffect } from 'react'
import {StyledDiv, StyledBtn,Desc} from './../../styles/Styles'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFromServer } from '../../Redux/store/UsersReducer';
import User from '../../components/user/User';

export default function Users() {
 const dispatch = useDispatch();
 const userData = useSelector(state => state.users[0])
 console.log('user',userData)
 useEffect(()=>{
  dispatch(getUserFromServer('https://jsonplaceholder.typicode.com/users '))
 },[])
  return (
    
     <StyledDiv className=' w-100 h-100 p-3'>
      <StyledDiv className='d-flex justify-content-evenly'>
        <input type="text" className="w-50" placeholder='نام یا ایمیل کاربر را وارد کنید ...' />
        <StyledBtn className='bg-danger'>حذف کاربر</StyledBtn>
      </StyledDiv>


      <StyledDiv className=' mt-3 p-3'>
        {userData?.map(item =><User key={item.id} {...item} />)}
      </StyledDiv>


     </StyledDiv>
    
  )
}

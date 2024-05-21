import React, { useEffect } from 'react'
import Course from '../../components/courses/Course'
import { StyledBtn, StyledDiv } from '../../styles/Styles'
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromServer } from '../../Redux/store/UsersReducer';

export default function Courses() {
  const dispatch = useDispatch();
  const coursesData = useSelector(state => state.users[0])
  console.log('user',coursesData)
  useEffect(()=>{
   dispatch(getUserFromServer('https://redux-cms.iran.liara.run/api/courses'))
  },[])
  return (
    <StyledDiv className='d-flex flex-column justify-content-between p-1 h-100 w-100'>
      
      {coursesData?.map(item => ( <Course type={'course'} {...item} />))}
     

      <StyledDiv className='d-flex justify-content-center gap-2'>
        <StyledBtn className='bg-success'> افزودن دوره جدید </StyledBtn>
        <StyledBtn className='bg-danger'> اعمال تخفیف جدید </StyledBtn>
        <StyledBtn className='bg-warning'> افزودن دسته بندی جدید </StyledBtn>
      </StyledDiv>
    </StyledDiv>
  )
}

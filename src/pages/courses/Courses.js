import React from 'react'
import Course from '../../components/courses/Course'
import { StyledBtn, StyledDiv } from '../../styles/Styles'

export default function Courses() {
  return (
    <StyledDiv className='d-flex flex-column justify-content-between p-1 h-100 w-100'>
      
      <Course/>

      <StyledDiv className='d-flex justify-content-center gap-2'>
        <StyledBtn className='bg-success'> افزودن دوره جدید </StyledBtn>
        <StyledBtn className='bg-danger'> اعمال تخفیف جدید </StyledBtn>
        <StyledBtn className='bg-warning'> افزودن دسته بندی جدید </StyledBtn>
      </StyledDiv>
    </StyledDiv>
  )
}

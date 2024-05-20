import React from 'react'
import { StyledBtn, StyledDiv } from '../../styles/Styles'
import Course from '../../components/courses/Course'

export default function Articles() {
  return (
    <StyledDiv className='d-flex flex-column justify-content-between p-1 h-100 w-100'>
      
      <Course type={'article'}/>

      <StyledDiv className='d-flex justify-content-center gap-2'>
        <StyledBtn className='bg-success'> افزودن مقاله جدید </StyledBtn>
        <StyledBtn className='bg-warning'> افزودن دسته بندی جدید </StyledBtn>
      </StyledDiv>
    </StyledDiv>
  )
}

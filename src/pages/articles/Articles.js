import React, { useEffect } from 'react'
import { StyledBtn, StyledDiv } from '../../styles/Styles'
import Course from '../../components/courses/Course'
import Article from './../../components/article/Article'
import { useDispatch, useSelector } from 'react-redux';
import { getArticlesFromServer } from '../../Redux/store/ArticlesReducer';

export default function Articles() {
  const dispatch = useDispatch();
  const articlesData = useSelector(state => state.articles[0])
  console.log('articles',articlesData)
  useEffect(()=>{
   dispatch(getArticlesFromServer('https://redux-cms.iran.liara.run/api/articles'))
  },[])
  return (
    <StyledDiv className='d-flex flex-column justify-content-between p-1 h-100 w-100'>
      
      {articlesData?.map(item => ( <Article {...item} />))}

      <StyledDiv className='d-flex justify-content-center gap-2'>
        <StyledBtn className='bg-success'> افزودن مقاله جدید </StyledBtn>
        <StyledBtn className='bg-warning'> افزودن دسته بندی جدید </StyledBtn>
      </StyledDiv>
    </StyledDiv>
  )
}

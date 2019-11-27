import React from 'react'
import PostWrapper from '../components/PostWrapper/PostWrapper'
import Sidebar from '../components/Sidebar/Sidebar'
import '../pages/index.scss'

const SingleTagIndex = ({pageContext}) => {
  const { posts, tagName } = pageContext
  return (
    <>
      <PostWrapper className='app-body_postwrapper' posts={posts} />
      <Sidebar className='app-body_sidebar' />
    </>
  )
}

export default SingleTagIndex

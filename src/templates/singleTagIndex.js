import React from 'react'
import PostWrapper from '../components/PostWrapper/PostWrapper'

const SingleTagIndex = ({pageContext}) => {
  const { posts, tagName } = pageContext
  return (
    <div>
      <div>
        Posts about {tagName}
      </div>

      <PostWrapper posts={posts} />
    </div>
  )
}

export default SingleTagIndex

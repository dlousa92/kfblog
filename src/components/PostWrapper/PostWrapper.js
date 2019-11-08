import React from 'react'
import { Link } from 'gatsby'
import './postwrapper.scss'

const PostWrapper = (edges) => {
  return (
    <div className='post-wrapper'>
      {edges.edges.map(edge => {
        const {frontmatter} = edge.node
        console.log(frontmatter)
        return (
          <div key={frontmatter.path} className='post'>
            <Link to={frontmatter.path} className='post-title'>
              {frontmatter.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PostWrapper

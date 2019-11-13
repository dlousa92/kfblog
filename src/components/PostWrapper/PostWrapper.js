import React from 'react'
import { Link } from 'gatsby'
import './postwrapper.scss'

const PostWrapper = (edges) => {
  return (
    <div className='post-wrapper'>
      {edges.edges.map(edge => {
        const { frontmatter, timeToRead } = edge.node
        const tagClassName = frontmatter.tags[0].replace(/\s/g, '')
        console.log(frontmatter)
        console.log('time to read', timeToRead)
        return (
          <div key={frontmatter.path} className='post'>
            <div className={`post-tag tag tag_${tagClassName}`}>{frontmatter.tags[0]}</div>
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

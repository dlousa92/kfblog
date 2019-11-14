import React from 'react'
import { Link } from 'gatsby'
import './postwrapper.scss'

const PostWrapper = (edges) => {
  return (
    <ul className='post-wrapper'>
      {edges.edges.map(edge => {
        const { frontmatter, timeToRead } = edge.node
        const tagClassName = frontmatter.tags[1].replace(/\s/g, '')
        console.log(frontmatter)
        console.log('time to read', timeToRead)
        return (
          <li key={frontmatter.path} className='post'>
            <Link to={frontmatter.path} className='post-title'>
              {frontmatter.title}
            </Link>
            <div className='post-info'>
              <div className={`post-info_tag tag tag_${tagClassName}`}>{frontmatter.tags[1]}</div>
              <p className='post-info_meta'>{frontmatter.date} &loz; {timeToRead} min read</p>
            </div>
            <div className='post-excerpt'>{frontmatter.excerpt}</div>
          </li>
        )
      })}
    </ul>
  )
}

export default PostWrapper

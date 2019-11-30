import React from 'react'
import { Link } from 'gatsby'
import './postwrapper.scss'

const PostWrapper = (edges) => {
  let posts
  let frontmatter
  let timeToRead

  // handles variable assignment if posts are coming from homepage or single tag template page
  if (edges.edges) {
    // homepage
    posts = edges.edges
  } else {
    // single tag index page
    posts = edges.posts
  }

  return (
    <ul className='post-wrapper'>
      {posts.map(post => {
        post.node ? { frontmatter, timeToRead } = post.node : { frontmatter, timeToRead } = post
        const tagClassName = frontmatter.tags[0].replace(/\s/g, '')
        return (
          <li key={frontmatter.path} className='post'>
            <Link to={frontmatter.path} className='post-title'>
              {frontmatter.title}
            </Link>
            <div className='post-info'>
              <div className={`post-info_tag tag tag_${tagClassName}`}>{frontmatter.tags[0]}</div>
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

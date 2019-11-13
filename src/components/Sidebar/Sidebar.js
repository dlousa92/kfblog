import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import './sidebar.scss'

const Sidebar = () => {
  const data = useStaticQuery(
    graphql`
    query SidebarQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `
  )
  const posts = data.allMarkdownRemark.nodes
  const tags = []

  posts.forEach(post => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach(tag => {
        if (tags.includes(tag)) {
          return
        }

        tags.push(tag)
      })
    }
  })
  return (
    <div className='single-tag-wrapper'>
      <h3 className='single-tag-wrapper_header'>Browse by Tag</h3>

      <div className='single-tag-wrapper_tags'>
        {tags.sort().map(tag => {
          const tagClassName = tag.replace(/\s/g, '')
          return <Link className={`single-tag tag tag_${tagClassName}`} key={tag} to={`/tags/${tag}/`} >{tag}</Link>
        })}
      </div>
    </div>
  )
}

export default Sidebar

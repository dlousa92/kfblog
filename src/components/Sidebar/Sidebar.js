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
    <div className='sidebar-tag-wrapper'>
      <h3 className='sidebar-tag-wrapper_header'>Browse by Topic</h3>

      <ul className='sidebar-tag-wrapper_tags'>
        <Link className='sidebar-tag tag tag_AllTags' to='/'>All Tags</Link>
        {tags.sort().map(tag => {
          const tagClassName = tag.replace(/\s/g, '')
          return <Link className={`sidebar-tag tag tag_${tagClassName}`} key={tag} to={`/tags/${tag}/`} >{tag}</Link>
        })}
      </ul>
    </div>
  )
}

export default Sidebar

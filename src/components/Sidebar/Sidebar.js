import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'

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
    <div>
      <ul>
        {tags.sort().map(tag => {
          return <li key={tag}>{tag}</li>
        })}
      </ul>
    </div>
  )
}

export default Sidebar

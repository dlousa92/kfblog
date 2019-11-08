import React from 'react'
import { Link } from 'gatsby'

const PostWrapper = (edges) => {
  console.log(edges)
  return (
    <div>
      {edges.edges.map(edge => {
        const {frontmatter} = edge.node
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PostWrapper

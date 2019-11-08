import React from 'react'

const PostWrapper = (edges) => {
  return (
    <div>
      {edges.map(edge => {
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

import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { graphql, Link } from 'gatsby'

const Homepage = ({data}) => {
  const { edges } = data.allMarkdownRemark
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
      <Sidebar />
      <Link to='/tags'>Browse by Tag</Link>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title,
            path,
            date,
            tags,
            excerpt
          }
        }
      }
    }
  }
`

export default Homepage

import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import PostWrapper from '../components/PostWrapper/PostWrapper'
import { graphql, Link } from 'gatsby'
import './index.scss'

const Homepage = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div className='app-body'>
      <Sidebar />
      <PostWrapper edges={edges} />
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

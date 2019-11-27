import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import PostWrapper from '../components/PostWrapper/PostWrapper'
import { graphql } from 'gatsby'
import './index.scss'

const Homepage = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <>
      <PostWrapper className='app-body_postwrapper' edges={edges} />
      <Sidebar />
    </>
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
          timeToRead
        }
      }
    }
  }
`

export default Homepage

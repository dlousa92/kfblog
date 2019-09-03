import React from 'react'
import Header from '../components/Header/Header'
import { graphql, Link } from 'gatsby'

const SingleTagIndex = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <div>single tag here</div>
    </div>
  )
}

export default SingleTagIndex

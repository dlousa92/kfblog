import React from 'react'
import Header from '../components/Header/Header'
import { graphql, Link } from 'gatsby'

const AllTagsIndex = ({data, pageContext}) => {
  console.log(pageContext)
  return (
    <div>
      <div>tags here</div>
    </div>
  )
}

export default AllTagsIndex

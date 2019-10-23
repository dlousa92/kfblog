import React from 'react'
import Header from '../components/Header/Header'
import { Link } from 'gatsby'

const AllTagsIndex = ({data, pageContext}) => {
  const { tags } = pageContext
  return (
    <div>
      <Header />
      <ul>
        {tags.map((tagName, index) => {
          return (
            <li key={index}>
              <Link to={`tags/${tagName}`}>
                Posts about {tagName}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllTagsIndex

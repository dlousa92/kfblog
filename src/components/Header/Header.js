import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './Header.scss'

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div className='app-header'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }`
      }
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header

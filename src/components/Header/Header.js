import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './Header.scss'

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <header className='app-header'>
      <div className='app-header-triangleleft' />
      <div className='app-header-text'>
        <h1 className='app-header-text_title'>{title}</h1>
        <p className='app-header-text_description'>{description}</p>
      </div>
      <div className='app-header-triangleright' />
    </header>
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

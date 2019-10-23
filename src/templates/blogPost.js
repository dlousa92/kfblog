import React from 'react'
import Header from '../components/Header/Header'
import {graphql, Link} from 'gatsby'

const Template = (props) => {
  console.log(props)

  const {next, prev} = props.pageContext
  const markdown = props.data.markdownRemark
  const title = markdown.frontmatter.title
  const content = markdown.html
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}} />

      {next && <Link to={next.frontmatter.path}>Next</Link>}
      {prev && <Link to={prev.frontmatter.path}>Previous</Link>}

      <Link to={'/'}>Home</Link>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default Template

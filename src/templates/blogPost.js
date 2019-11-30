import React from "react"
import { graphql, Link } from 'gatsby'
import './blogpost.scss'

const Template = props => {

  const { next, prev } = props.pageContext
  const markdown = props.data.markdownRemark
  const title = markdown.frontmatter.title
  const content = markdown.html
  return (
    <div>
      <h1>{title}</h1>
      <div className='blogpost-html' dangerouslySetInnerHTML={{ __html: content }} />

      {next && <Link to={next.frontmatter.path}>Next</Link>}
      {prev && <Link to={prev.frontmatter.path}>Previous</Link>}

      <Link to={"/"}>Home</Link>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default Template

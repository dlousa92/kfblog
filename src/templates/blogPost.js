import React from 'react'
import {graphql} from 'gatsby'

const Template = (props) => {
  console.log(props)
  const markdown = props.data.markdownRemark
  const title = markdown.frontmatter.title
  const content = markdown.html
  return (
    <div>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{__html: content}} />
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

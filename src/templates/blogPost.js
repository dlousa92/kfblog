import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './blogpost.scss'

const Template = props => {
  const { next, prev } = props.pageContext
  const markdown = props.data.markdownRemark
  const frontmatter = markdown.frontmatter
  const content = markdown.html
  const tagClassName = frontmatter.tags[0].replace(/\s/g, '')

  return (
    <article className='blogpost'>
      <div className='blogpost-meta'>
        <h1 className='blogpost-meta_title'>{frontmatter.title}</h1>
        <div className='blogpost-meta_info'>
          <p className='tag-wrapper'><span className={`blogpost-meta_info-tag tag tag_${tagClassName}`}>{frontmatter.tags[0]}</span></p>
          <div>
            <p>By {frontmatter.author}</p>
            <p>Date: {frontmatter.date}</p>
          </div>
        </div>
      </div>

      <div className='blogpost-html' dangerouslySetInnerHTML={{ __html: content }} />

      <ul className='blogpost-nav'>
        <li>{prev && <Link className='blogpost-nav_link' to={prev.frontmatter.path}>
          <FontAwesomeIcon icon={faArrowCircleLeft} /> Prev
        </Link>}</li>
        <li><Link className='blogpost-nav_link' to={'/'}>Home</Link></li>
        <li>{next && <Link className='blogpost-nav_link' to={next.frontmatter.path}>
          Next <FontAwesomeIcon icon={faArrowCircleRight} />
        </Link>}</li>
      </ul>
    </article>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      timeToRead
      frontmatter {
        author
        date
        tags
        title
      }
    }
  }
`
export default Template

import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const EssayIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Essays</h1>
      <p>These essays are the reflection of my observation—both from personal and professional experiences. There is no specific theme. I explore whatever comes to mind or topics I am being challenged by. Each essay peels the onion of my own ignorance by asking the hard questions. They help me enhance my own clarity and forces cohesive thought.</p>
      <ul>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
                <Link to={post.fields.slug} itemProp="url" className="post-link">
                  <span itemProp="headline">{title}</span>
                </Link>
                <small><span> | </span>{post.frontmatter.date}</small>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default EssayIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Essays" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/essays/" }}
      sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

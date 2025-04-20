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
      <p>These essays are a reflection of my observations, both personal and professional. There’s no particular theme; I explore whatever comes to mind or topics that challenge me. Each essay digs deeper into my own ignorance by posing difficult questions. They help me clarify my thoughts and develop coherent reasoning.</p>
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

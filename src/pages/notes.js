import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotesIndex = ({ data, location }) => {
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
      <h1>Notes</h1>
      <p>A compilation of in-depth explorations into topics that pulls me deeply. Each topic is a continuous journey, and I often revisit them as my knowledge expands.</p>
      <ul>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              {/* <article
                itemScope
                itemType="http://schema.org/Article"
              > */}
                <Link to={post.fields.slug} itemProp="url" className="post-link">
                  <span itemProp="headline">{title}</span>
                </Link>
                <small><span> | </span>{post.frontmatter.date}</small>
                {/* <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section> */}
              {/* </article> */}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default NotesIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Notes" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/notes/" }}
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

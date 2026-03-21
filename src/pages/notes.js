import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
const NotesIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const [selectedTag, setSelectedTag] = React.useState("all")

  // Extract all unique tags
  const allTags = ["all", ...new Set(posts.flatMap(post => post.frontmatter.tags || []))].sort()

  // Filter posts based on selected tag
  const filteredPosts = selectedTag === "all"
    ? posts
    : posts.filter(post => post.frontmatter.tags && post.frontmatter.tags.includes(selectedTag))

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
      <p className="ct-responsive-header-text"> A collection of deep dives, personal notes and essays. They are a reflection of my thoughts and observations. I explore topics that I cannot stop thinking about or pulls me deeply.</p>
      <ul className="notes-tag-list">
        {allTags.map(tag => (
          <li key={tag}>
            <button
              className={`notes-tag-button ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>

      <ul>
        {filteredPosts.map(post => {
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

export default NotesIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 *
 * @type {import('gatsby').HeadFC}
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
          tags
        }
      }
    }
  }
`

import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  gap: 0.5rem;
`

const TagButton = styled.button`
  background-color: ${props => props.active ? 'var(--color-primary, #0E1013)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'inherit'};
  border: 2px solid var(--color-primary, #0E1013);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 800;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.active ? 'var(--color-primary, #0E1013)' : '#ffffff'};
  }
`

const EssayIndex = ({ data, location }) => {
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
      <h1>Essays</h1>
      <p>These essays are a reflection of my observations at a both personal and professional level. There’s no particular theme. I explore questions that I cannot stop thinking about. Each essay digs deeper into my own ignorance which helps me clarify my thoughts.</p>

      <TagList>
        {allTags.map(tag => (
          <li key={tag}>
            <TagButton
              active={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </TagButton>
          </li>
        ))}
      </TagList>

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

export default EssayIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 *
 * @type {import('gatsby').HeadFC}
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
          tags
        }
      }
    }
  }
`

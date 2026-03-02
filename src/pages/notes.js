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
  margin-left: var(--spacing-0);
  gap: 0.5rem;
`

const TagButton = styled.button`
  background-color: ${props => props.active ? 'var(--color-dark)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-background)' : 'var(--color-dark)'};
  border: 2px solid var(--color-dark);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 800;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.active ? 'var(--color-dark)' : 'var(--color-secondary-accent)'};
    color: ${props => props.active ? 'var(--color-background)' : 'var(--color-light)'};
    border-color: ${props => props.active ? 'var(--color-dark)' : 'var(--color-secondary-accent)'};
  }
`

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
      <p> A collection of deep dives, personal notes and essays. They are a reflection of my thoughts and observations. I explore topics that I cannot stop thinking about or pulls me deeply. Each topic digs deeper into my own ignorance which helps me clarify my thoughts. This is a continuous journey, and I often revisit them as my knowledge expands.</p>
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

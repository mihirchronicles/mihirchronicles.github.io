import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BookshelfIndex = ({ data, location }) => {
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
      <h1>Bookshelf</h1>
      <p>Reading is a form of forced meditation that can be a fun and exciting way to explore life and embark on adventures. It’s crucial to make time for reading material that is both academically rigorous and profoundly insightful. To nurture a lifelong sense of curiosity, I employ a multi-disciplinary approach to select and read a wide range of books. Below are my book summaries.</p>
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
      <ul>
          <li>A Velocity of Being: Letters to a Young Reader</li>
          <li>The Hitchhiker's Guide to the Galaxy by Douglas Adams</li>
          <li>It Doesn't Have to Be Crazy at Work</li>
          <li>The Last Lecture</li>
          <li>When Breath Becomes Air</li>
          <li>Bad Blood: Secrets and Lies in a Silicon Valley Startup</li>
          <li>Grit</li>
          <li>Misbehaving: The Making of Behavioral Economics</li>
          <li>Cathedral of the Wild: An African Journey Home</li>
          <li>Man's Search for Meaning</li>
          <li>The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future</li>
          <li>Dark Matter</li>
          <li>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</li>
          <li>The Power of Habit: Why We Do What We Do in Life and Business</li>
          <li>How Google Works</li>
          <li>The Everything Store: Jeff Bezos and the Age of Amazon</li>
          <li>The Great Gatsby</li>
          <li>The Intelligent Investor</li>
          <li>The Creator's Code The Six Essential Skills of Extraordinary Entrepreneurs</li>
          <li>Start Something That Matters</li>
          <li>Zero to One: Notes on Startups, or How to Build the Future</li>
          <li>The Snowball: Warren Buffett and the Business of Life</li>
          <li>Steve Jobs</li>
          <li>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</li>
          <li>The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers</li>
          <li>Becoming Steve Jobs: The Evolution of a Reckless Upstart into a Visionary Leader</li>
          <li>The Martian</li>
        </ul>
    </Layout>
  )
}

export default BookshelfIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Bookshelf" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/bookshelf/" }}
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

import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const OTHER_BOOKS = [
  "Never Eat Alone: And Other Secrets to Success, One Relationship at a Time",
  "A Velocity of Being: Letters to a Young Reader",
  "The Hitchhiker's Guide to the Galaxy by Douglas Adams",
  "It Doesn't Have to Be Crazy at Work",
  "The Last Lecture",
  "When Breath Becomes Air",
  "Bad Blood: Secrets and Lies in a Silicon Valley Startup",
  "Grit",
  "Misbehaving: The Making of Behavioral Economics",
  "Cathedral of the Wild: An African Journey Home",
  "Man's Search for Meaning",
  "The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future",
  "Dark Matter",
  "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
  "The Power of Habit: Why We Do What We Do in Life and Business",
  "How Google Works",
  "The Everything Store: Jeff Bezos and the Age of Amazon",
  "The Great Gatsby",
  "The Intelligent Investor",
  "The Creator's Code The Six Essential Skills of Extraordinary Entrepreneurs",
  "Start Something That Matters",
  "Zero to One: Notes on Startups, or How to Build the Future",
  "The Snowball: Warren Buffett and the Business of Life",
  "Steve Jobs",
  "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
  "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers",
  "Becoming Steve Jobs: The Evolution of a Reckless Upstart into a Visionary Leader",
  "The Martian"
];

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
      <p className="ct-responsive-header-text">Reading is my form of forced meditation. Below are my book summaries.</p>

      <h2>Book Summaries</h2>
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

      <h2>Other Reads</h2>
      <ul>
        {OTHER_BOOKS.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default BookshelfIndex

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

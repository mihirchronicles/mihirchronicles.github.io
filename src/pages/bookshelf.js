import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BookshelfGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--spacing-6);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-12);
`;

const BookCoverCard = styled.div`
  background-color: ${props => props.color || 'var(--color-primary-accent)'};
  color: var(--color-light);
  border-radius: 2px 6px 6px 2px;
  box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1), 
              inset -1px 0 2px rgba(255, 255, 255, 0.3), 
              5px 5px 15px rgba(0, 0, 0, 0.15);
  aspect-ratio: 2 / 3;
  padding: var(--spacing-4) var(--spacing-3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;

  /* Spine effect */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(0, 0, 0, 0.1) 10%,
      rgba(0, 0, 0, 0.2) 40%,
      rgba(255, 255, 255, 0.1) 80%,
      rgba(0, 0, 0, 0.1) 100%
    );
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1), 
                inset -1px 0 2px rgba(255, 255, 255, 0.3), 
                8px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const BookTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: var(--fontSize-1);
  font-weight: var(--fontWeight-bold);
  margin: 0;
  margin-left: 8px; /* Accounts for the spine */
  margin-top: var(--spacing-2);
  line-height: 1.3;
  color: var(--color-light);
`;

const BookAuthor = styled.small`
  font-family: var(--font-body);
  font-size: var(--fontSize-0);
  margin-left: 8px;
  margin-top: var(--spacing-2);
  opacity: 0.9;
  font-weight: var(--fontWeight-normal);
  color: var(--color-light);
`;

const UnlinkedBookTitle = styled.span`
  font-family: var(--font-heading);
  font-size: var(--fontSize-1);
  font-weight: var(--fontWeight-bold);
  margin: 0;
  margin-left: 8px;
  margin-top: var(--spacing-2);
  line-height: 1.3;
  color: var(--color-light);
  display: block;
`;

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

const BOOK_COLORS = [
  '#F74A1F', // primary-accent
  '#41434C', // secondary-accent
  '#2E5EAA', // blue
  '#1D7044', // green
  '#9A348E', // purple
  '#D3602D', // orange
  '#A0B392'  // sage
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
      <p>Reading is a form of forced meditation. To nurture a lifelong sense of curiosity, I employ a multi-disciplinary approach to select and read a wide range of books. Below are my book summaries.</p>

      <BookshelfGrid>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const colorIndex = title.length % BOOK_COLORS.length;

          return (
            <Link to={post.fields.slug} itemProp="url" key={post.fields.slug} style={{ textDecoration: 'none' }}>
              <BookCoverCard color={BOOK_COLORS[colorIndex]}>
                <BookTitle itemProp="headline">{title}</BookTitle>
                <BookAuthor>{post.frontmatter.date}</BookAuthor>
              </BookCoverCard>
            </Link>
          )
        })}
      </BookshelfGrid>

      <h2>Other Reads</h2>
      <BookshelfGrid>
        {OTHER_BOOKS.map((title, index) => {
          const colorIndex = title.length % BOOK_COLORS.length;

          return (
            <BookCoverCard key={index} color={BOOK_COLORS[colorIndex]} style={{ opacity: 0.85 }}>
              <UnlinkedBookTitle>{title}</UnlinkedBookTitle>
            </BookCoverCard>
          )
        })}
      </BookshelfGrid>
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

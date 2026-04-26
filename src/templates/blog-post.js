import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, previousMdx, next, nextMdx, site, markdownRemark, mdx },
  location,
  children
}) => {
  const post = markdownRemark || mdx
  const siteTitle = site.siteMetadata?.title || `Title`
  const hasToc = post.tableOfContents && post.tableOfContents.length > 0; // mdx toc is an object, markdownRemark toc is string. For mdx we might need to adjust this later if needed. For now let's just do truthy check or use mdx toc.items length
  const isMdx = !!mdx;

  /* Active State Tracking */
  React.useEffect(() => {
    if (!hasToc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const tocLinks = document.querySelectorAll(".toc-container a");
            tocLinks.forEach((link) => {
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      {
        rootMargin: "0px 0px -80% 0px", // Trigger when top of section is 20% down
      }
    );

    const headings = document.querySelectorAll(
      ".blog-post h2, .blog-post h3, .blog-post h4"
    );
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, [hasToc]);

  return (
    <Layout location={location} title={siteTitle} isBlogPost={hasToc}>
      <div className={hasToc ? "blog-post-grid" : ""}>
        {hasToc && (
          <aside className="toc-container">
            <nav dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
          </aside>
        )}
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <hr></hr>
          </header>
          {isMdx ? (
            <section itemProp="articleBody">
              {children}
            </section>
          ) : (
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          )}
          <footer>
          </footer>
        </article>
      </div>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark, mdx } }) => {
  const post = markdownRemark || mdx;
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents(absolute: false)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    previousMdx: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    nextMdx: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutIndex = ({ data, location }) => {
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
      <h1>About</h1>

      <StaticImage src="../images/mehere.png" alt="MihirChronicles" className="about-image" />
      <p className="ct-responsive-header-text">I build products for a living. A lifelong student of design, capital markets and human psychology. I care about climate and impact investing. Trees have my heart.</p>
      <p className="ct-responsive-header-text">Exploration is dear to me. Learning matters more to me than status games like chasing titles, and I hope that doesn't change as I get older. Teaching is harder. It means putting ego and selfishness to rest. That is why I share what I learn along the way. I put a lot of love and labor into it.</p>
      <p className="ct-responsive-header-text">I have picked up a few games I enjoy. I move between them, but together they keep me balanced.</p>
      <p className="ct-responsive-header-text"><strong>The game of markets.</strong> Why investing? I was raised by a single mother. When we had almost nothing, investing was my way out. I put my teenage earnings into stocks to be self-sufficient and help my mom with bills. I bought my first stock at 17, right before the 2008 recession, and lost everything I'd saved from summer jobs within months. Losing that much money that young was hard, but it taught me lessons that shaped how I think. It is when markets became fascinating to me. Markets are people. Understand one and you understand the other. Money is the greatest incentive to study human behavior, and a great multiplier for making dreams real. Capital, allocated well, moves society forward. </p>
      <p className="ct-responsive-header-text"><strong>The game of creation.</strong> There is something beautiful about bringing an abstraction to life. Had I not studied finance and accounting, I'd have gone to school for design or engineering. I built my first product after college – a bamboo pen packaged with postcards. Making the thing and sharing it was fulfilling. Then I learned to write code. Creating became my obsession. My motto now is – don't complain, create.</p>
      <p className="ct-responsive-header-text"><strong>The game of harmony.</strong> I cherish immersing in nature – the woods, trails, mountains and stars while reading in solitude, teaching my sons about life, and making beautiful things. All these things help me build surplus of positive energy. There is no pain. My soul is alive. All I am striving for is to become a tree – rooted, growing slowly, abandoning dead paths and finding new ones, seeking light, working from the inside out, cultivating others, exploring for its own sake. This is when I am in my truest element.</p>

      <p><i>Scientia potentia est,</i></p>
      <p><i>Mihir Patel</i></p>
    </Layout>
  )
}

export default AboutIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`

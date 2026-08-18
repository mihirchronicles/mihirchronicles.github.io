import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import nationalParksAndForests from "../data/photographs/national-parks-and-forests.json"
import fieldTrips from "../data/photographs/field-trips.json"
import telescope from "../data/photographs/telescope.json"
import talks from "../data/photographs/talks.json"
import artCulture from "../data/photographs/art-culture.json"
import architecture from "../data/photographs/architecture.json"
import personalQuests from "../data/photographs/personal-quests.json"

const photographsData = [
  nationalParksAndForests,
  fieldTrips,
  telescope,
  talks,
  artCulture,
  architecture,
  personalQuests,
]

const RECENT_MOMENTS_COUNT = 5

const buildRecentPhotos = (data) => {
  const imageMap = new Map()
  data.allFile.nodes.forEach((node) => {
    imageMap.set(node.relativePath, node.gridImage?.gatsbyImageData)
  })

  const allPhotos = photographsData.flatMap((roll) =>
    roll.photos.map((photo) => ({
      ...photo,
      rollSlug: roll.slug,
      rollTitle: roll.title,
      image: imageMap.get(`photographs/${photo.file}`),
    }))
  )

  allPhotos.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
  return allPhotos.slice(0, RECENT_MOMENTS_COUNT)
}

const AboutIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const recentPhotos = React.useMemo(() => buildRecentPhotos(data), [data])
  const rollTitles = [...new Set(recentPhotos.map((photo) => photo.rollTitle))].join(" · ")

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
      <p>I build and design products for a living. A lifelong student of capital markets, sustainability, and human psychology. This site is where I share what I am learning. I put a lot of love and labor into it.</p>
      <p>Exploration is dear to me. Learning matters more to me than status games like chasing titles, and I hope that doesn't change as I get older. Teaching is harder. It means putting ego and selfishness to rest. That is why I share what I learn.</p>
      <p>I have picked up a few games I enjoy. I move between them, but together they keep me balanced.</p>
      <p><strong>The game of markets.</strong> Why investing? I was raised by a single mother. When we had almost nothing, investing was my way out. I put my teenage earnings into stocks to be self-sufficient and help my mom with bills. I bought my first stock at 17, right before the 2008 recession, and lost everything I'd saved from summer jobs within months. Losing that much money that young was hard, but it taught me lessons that shaped how I think. It is when markets became fascinating to me. Markets are people. Understand one and you understand the other. Money is the greatest incentive to study human behavior, and a great multiplier for making dreams real. Capital, allocated well, moves society forward. </p>
      <p><strong>The game of creation.</strong> There is something beautiful about bringing an abstraction to life. Had I not studied finance and accounting, I'd have gone to school for design or engineering. I built my first product after college - a bamboo pen packaged with postcards. Making the thing and sharing it was fulfilling. Then I learned to write code. Creating became my obsession. My motto now: don't complain, create.</p>
      <p><strong>The game of harmony.</strong> I cherish immersing in nature - the woods, trails, mountains and stars while reading in solitude, teaching my son about life, and making beautiful things. All these things help me build surplus of positive energy. There is no pain. My soul is alive. All I am striving for is to become a tree - rooted, growing slowly, abandoning dead paths and finding new ones, seeking light, working from the inside out, cultivating others, exploring for its own sake. This is when I am in my truest element.</p>

      {recentPhotos.length > 0 && (
        <section className="photo-teaser">
          <div className="photo-teaser-header">
            <span className="photo-teaser-label">Recent moments</span>
            <Link to="/photographs" className="photo-teaser-link">All photographs →</Link>
          </div>
          <div className="photo-teaser-grid">
            {recentPhotos.map((photo) => (
              <Link key={photo.file} to={`/photographs#${photo.rollSlug}`} className="photo-teaser-tile">
                {photo.image && (
                  <GatsbyImage image={photo.image} alt={photo.caption || `${photo.place}, ${photo.date}`} />
                )}
              </Link>
            ))}
          </div>
          <p className="photo-teaser-footer mono-text">{rollTitles}</p>
        </section>
      )}

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
    allFile(filter: { relativeDirectory: { glob: "photographs/*" } }) {
      nodes {
        relativePath
        gridImage: childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`

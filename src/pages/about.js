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
      
      <div>
        <StaticImage src="../images/mehere.png"alt="MihirChronicles" className="about-image"/>
      </div>
      <p>I build <strong>products</strong> for living. A life-long student of <strong>human behavior</strong> & <strong>financial markets</strong>. This site shares my continuous learning and investigation of topics I am interested in. I put a lot of love and labor into it.</p>
      <p>Exploration is dear to my heart. Learning is more fun & valuable to me than status seeking games such as acquiring fancy titles. I hope learning does not change as I get older. Learning is one thing, but teaching is another. The latter is much harder to strive for because we have to put our demons like ego and selfish acts to rest. This is why I share what I learn here.</p>
      <p>I have picked up a few games in life that I thoroughly enjoy. I have listed them below. I go back and forth between these games, but they all balance me well.</p>
      <p><strong>The game of studying markets</strong> is always fun because it challenges me to adapt. First, why investing? I was raised by a single mother. And when we were in the thick of barely having anything, investing was my way out. I set out to invest my teenage earnings in stocks to be self-sufficient and help my mom with bills. Besides that, there is no better way to learn about the real world than throwing myself out there. I purchased my first stock at the age of 17, which happened to be right before the 2008 recession. In a few months, I lost all my savings that I accumulated from my summer jobs. The pain from losing a huge sum of money at young age was tough to swallow, but I learned several lessons early on in my life. It shaped my choices and way of thinking. This is when understanding the psychology of markets and business became fascinating to me. In the end, markets are people. If we understand markets, we understand people, and vice-versa. Money is the greatest incentive to study human behavior, emotions, and decision-making. It is also a great multiplier of making dreams come true. Capital allocation, if done right, is a great way to move society forward.</p>
      <p><strong>The game of creation</strong> is another one. There is something beautiful about bringing abstraction to life. If I wouldn't have studied finance and accounting, I would have gone to school for design or engineering. I built my first product after graduating from college. It wasn't rocket science—a bamboo pen with postcards packaged beautifully. The ability to bring the vision to life and sharing with others was fulfilling. Soon after that, I learned how to write code. Creating has become my obsession. My motto is now “don't complain, create.”</p>
      <p>Lastly, <strong>the game of finding harmony with soul</strong>. I cherish immersing out in the nature, being out in the woods, hiking trails, climbing mountains, gazing at the stars, reading in solitude, teaching my son about life and creating beautiful things. When I pursue these things, I am in my truest element. There is no pain, and more importantly my soul is alive. All these things help me build surplus of positive energy. All I am striving for is to become a tree with continuous goals—firmly rooted, building deep systems, growing slowly, abandoning fail paths, finding new paths, seeking light, free from external conditions, working bottoms up, building inside out, cultivating others, and exploring for the sake of exploration without any expectations.</p>
      <p>
        <strong>Below are my non-negiotiable golden rules:</strong>
        <ul>
          <li><strong>Dance with the universe.</strong> You are responsible for your life, so design it as such. You are an author and an actor in your own story. The universe awaits—ignore it or dance with it.</li>
          <li><strong>Humor is the common denominator.</strong> Humor defuses tension, humanizes the room, and strips away misery.</li>
          <li><strong>Cultivate high agency.</strong> Act from internal drive, not social pressure. Lead by example, not instruction.  Show, don't tell. Avoid the default & lazy passive mindset.</li>
          <li><strong>Reject animosity.</strong> Negative state of mind is toxic. Let love lead.</li>
          <li><strong>Writing is deep introspection.</strong> It is where you meet your own ignorance face-to-face.</li>
          <li><strong>Now are the good old times.</strong> Tomorrow's nostalgia is today's moment.</li>
        </ul>
      </p>
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

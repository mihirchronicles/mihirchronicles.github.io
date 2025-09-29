import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ArtIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Art</h1>
      <p>Art has been a powerful tool for me to expand my imagination and foster a sense of curiosity and creativity. Engaging in artistic endeavors provides an excellent way to escape from the mundane realities of life and allowing one to indulge in fun and playful moments.</p>
      <div>
        <StaticImage src="../images/art/beachday.png" alt="beach day" className="gallery-image"/>
        <StaticImage src="../images/art/pleasesmile.png" alt="smile" className="gallery-image"/>
        <StaticImage src="../images/art/reading_under_lamp.png" alt="readingunderlamp" className="gallery-image"/>
        <StaticImage src="../images/art/landscape.png" alt="landscape" className="gallery-image"/>
        <StaticImage src="../images/art/austin-music.png" alt="austinmusic" className="gallery-image"/>
        <StaticImage src="../images/art/readers.png" alt="readers" className="gallery-image"/>
        <StaticImage src="../images/art/reading.png" alt="reading" className="gallery-image"/>
        <StaticImage src="../images/art/paindoc.jpg" alt="paindoc" className="gallery-image"/>
        <StaticImage src="../images/art/hugart.png"alt="hugart" className="gallery-image"/>
        <StaticImage src="../images/art/couple.png" alt="couple" className="gallery-image"/>
        <StaticImage src="../images/art/incredible_people.png" alt="incrediblepeople" className="gallery-image"/>
        <StaticImage src="../images/art/beach.png" alt="beach" className="gallery-image"/>
        <StaticImage src="../images/art/leo_art.jpeg" alt="leo" className="gallery-image"/>      </div>
    </Layout>
  )
}

export default ArtIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Art" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

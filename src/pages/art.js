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
      <p>Getting lost in imagination, colors, and shapes is a wonderful exercise. Art has helped me expand my imagination and curiosity. Making art is a great way to escape reality, have fun, and be silly. Below are some of my sketches and paintings.</p>
      <div>
        <StaticImage src="../images/art/landscape.png" alt="landscape" className="gallery-image"/>
        <StaticImage src="../images/art/austin-music.png" alt="austinmusic" className="gallery-image"/>
        <StaticImage src="../images/art/peoplegarden.png" alt="peoplegarden" className="gallery-image"/>
        <StaticImage src="../images/art/readers.png" alt="readers" className="gallery-image"/>
        <StaticImage src="../images/art/reading.png" alt="reading" className="gallery-image"/>
        <StaticImage src="../images/art/paindoc.jpg" alt="paindoc" className="gallery-image"/>
        <StaticImage src="../images/art/hugart.png"alt="hugart" className="gallery-image"/>
        <StaticImage src="../images/art/supportart.png" alt="supportart" className="gallery-image"/>
        <StaticImage src="../images/art/kind_avacado.png" alt="kind_avacado" className="gallery-image"/>
        <StaticImage src="../images/art/dancewithuniverse.png"alt="dancewithuniverse" className="gallery-image"/>
        <StaticImage src="../images/art/diaper.png"alt="diaper" className="gallery-image"/>
        <StaticImage src="../images/art/couple.png" alt="couple" className="gallery-image"/>
        <StaticImage src="../images/art/incredible_people.png" alt="incredible people" className="gallery-image"/>
        <StaticImage src="../images/art/beach.png" alt="beach" className="gallery-image"/>
        <StaticImage src="../images/art/faces.png" alt="faces" className="gallery-image"/>
        <StaticImage src="../images/art/dance.png" alt="dance" className="gallery-image"/>
        <StaticImage src="../images/art/thirty.png" alt="thirty" className="gallery-image"/>
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

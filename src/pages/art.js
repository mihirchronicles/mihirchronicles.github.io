import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
const ArtIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    <StaticImage src="../images/art/chicity.png" alt="chi city" className="gallery-image" />,
    <StaticImage src="../images/art/beachday.png" alt="beach day" className="gallery-image" />,
    <StaticImage src="../images/art/pleasesmile.png" alt="smile" className="gallery-image" />,
    <StaticImage src="../images/art/reading_under_lamp.png" alt="readingunderlamp" className="gallery-image" />,
    <StaticImage src="../images/art/landscape.png" alt="landscape" className="gallery-image" />,
    <StaticImage src="../images/art/austin-music.png" alt="austinmusic" className="gallery-image" />,
    <StaticImage src="../images/art/readers.png" alt="readers" className="gallery-image" />,
    <StaticImage src="../images/art/reading.png" alt="reading" className="gallery-image" />,
    <StaticImage src="../images/art/paindoc.jpg" alt="paindoc" className="gallery-image" />,
    <StaticImage src="../images/art/hugart.png" alt="hugart" className="gallery-image" />,
    <StaticImage src="../images/art/couple.png" alt="couple" className="gallery-image" />,
    <StaticImage src="../images/art/incredible_people.png" alt="incrediblepeople" className="gallery-image" />,
    <StaticImage src="../images/art/beach.png" alt="beach" className="gallery-image" />,
    <StaticImage src="../images/art/leo_art.jpeg" alt="leo" className="gallery-image" />
  ]

  const thumbnails = [
    <StaticImage src="../images/art/chicity.png" alt="chi city" />,
    <StaticImage src="../images/art/beachday.png" alt="beach day" />,
    <StaticImage src="../images/art/pleasesmile.png" alt="smile" />,
    <StaticImage src="../images/art/reading_under_lamp.png" alt="readingunderlamp" />,
    <StaticImage src="../images/art/landscape.png" alt="landscape" />,
    <StaticImage src="../images/art/austin-music.png" alt="austinmusic" />,
    <StaticImage src="../images/art/readers.png" alt="readers" />,
    <StaticImage src="../images/art/reading.png" alt="reading" />,
    <StaticImage src="../images/art/paindoc.jpg" alt="paindoc" />,
    <StaticImage src="../images/art/hugart.png" alt="hugart" />,
    <StaticImage src="../images/art/couple.png" alt="couple" />,
    <StaticImage src="../images/art/incredible_people.png" alt="incrediblepeople" />,
    <StaticImage src="../images/art/beach.png" alt="beach" />,
    <StaticImage src="../images/art/leo_art.jpeg" alt="leo" />
  ]

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Art</h1>
      <p className="ct-responsive-header-text">Art has always been a powerful tool to expand my sense of creativity. Engaging with shapes and colors feels joyful. It helps me escape from the mundane realities of life and allows me to indulge in fun and playful moments.</p>
      <div className="art-carousel-wrapper">
        <div className="art-main-image-container">
          <button className="art-nav-button prev" onClick={prevImage} aria-label="Previous Image">❮</button>
          {images[currentIndex]}
          <button className="art-nav-button next" onClick={nextImage} aria-label="Next Image">❯</button>
        </div>

        <div className="art-thumbnail-container">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className={`art-thumbnail-wrapper ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              {thumb}
            </div>
          ))}
        </div>
      </div>
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

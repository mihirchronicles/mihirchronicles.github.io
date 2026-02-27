import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: var(--spacing-8);
`

const MainImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 10;
  border-radius: var(--spacing-1);
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  width: 100%;
  justify-content: flex-start;
  
  /* Hide scrollbar for cleaner look */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ThumbnailWrapper = styled.div`
  flex: 0 0 80px;
  height: 80px;
  cursor: pointer;
  opacity: ${props => props.active ? 1 : 0.4};
  transition: opacity 0.2s, border-color 0.2s;
  border: ${props => props.active ? '3px solid var(--color-primary-accent)' : '3px solid transparent'};
  border-radius: var(--spacing-1);
  overflow: hidden;

  &:hover {
    opacity: 1;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

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
      <p>Art has been a powerful tool for me to expand my imagination and foster a sense of curiosity and creativity. Engaging in artistic endeavors provides an excellent way to escape from the mundane realities of life and allowing one to indulge in fun and playful moments.</p>

      <CarouselWrapper>
        <MainImageContainer>
          <NavButton className="prev" onClick={prevImage} aria-label="Previous Image">❮</NavButton>
          {images[currentIndex]}
          <NavButton className="next" onClick={nextImage} aria-label="Next Image">❯</NavButton>
        </MainImageContainer>

        <ThumbnailContainer>
          {thumbnails.map((thumb, index) => (
            <ThumbnailWrapper
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            >
              {thumb}
            </ThumbnailWrapper>
          ))}
        </ThumbnailContainer>
      </CarouselWrapper>
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

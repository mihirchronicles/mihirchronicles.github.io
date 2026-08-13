import * as React from "react"
import { useRef, useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Lightbox from "../components/lightbox"
import nationalParksAndForests from "../data/photographs/national-parks-and-forests.json"
import fieldTrips from "../data/photographs/field-trips.json"
import telescope from "../data/photographs/telescope.json"
import talks from "../data/photographs/talks.json"
import artCulture from "../data/photographs/art-culture.json"
import buildings from "../data/photographs/buildings.json"
import personalQuests from "../data/photographs/personal-quests.json"
import { monthLabel } from "../utils/date"

const ROLLS_PAGE_SIZE = 8

const photographsData = [
  nationalParksAndForests,
  fieldTrips,
  telescope,
  talks,
  artCulture,
  buildings,
  personalQuests,
]

const buildRolls = (data) => {
  const imageMap = new Map()
  data.allFile.nodes.forEach((node) => {
    imageMap.set(node.relativePath, {
      grid: node.gridImage?.gatsbyImageData,
      large: node.largeImage?.gatsbyImageData,
    })
  })

  const rolls = photographsData.map((roll) => {
    const photos = [...roll.photos]
      .sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
      .map((photo) => {
        const images = imageMap.get(`photographs/${photo.file}`) || {}
        return {
          ...photo,
          image: images.grid,
          imageLarge: images.large,
          alt: photo.caption || `${photo.place}, ${photo.date}`,
        }
      })
    return { ...roll, photos }
  })

  return rolls.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

const PhotographsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const rolls = React.useMemo(() => buildRolls(data), [data])
  const [showAllRolls, setShowAllRolls] = useState(false)
  const [openRollSlug, setOpenRollSlug] = useState(null)
  const [openIndex, setOpenIndex] = useState(0)
  const triggerRef = useRef(null)

  const visibleRolls = showAllRolls ? rolls : rolls.slice(0, ROLLS_PAGE_SIZE)
  const activeRoll = openRollSlug ? rolls.find((roll) => roll.slug === openRollSlug) : null

  const openLightbox = (roll, index, triggerEl) => {
    triggerRef.current = triggerEl
    setOpenRollSlug(roll.slug)
    setOpenIndex(index)
  }

  const closeLightbox = () => {
    setOpenRollSlug(null)
    triggerRef.current?.focus()
  }

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Photographs</h1>
      <p className="ct-responsive-header-text">A small pile of collections that have stayed with me over the years. These collections pull me deeper and deeper as I age. Some are places. Some are people. All centered around human soul.</p>
      <div className="photographs-rolls">
        {visibleRolls.map((roll, rollIndex) => {
          const hasLead = roll.photos.length >= 5
          const gridClass = hasLead
            ? "photo-roll-grid photo-roll-grid--lead-left"
            : "photo-roll-grid photo-roll-grid--no-lead"
          const overflowCount = roll.photos.length > 5 ? roll.photos.length - 4 : 0
          const visibleCount = hasLead ? Math.min(5, roll.photos.length) : roll.photos.length
          const tiles = roll.photos.slice(0, visibleCount)

          return (
            <section id={roll.slug} className="photo-roll" key={roll.slug}>
              <div className="photo-roll-header">
                <span className="photo-roll-title">{roll.title}</span>
                <span className="photo-roll-meta mono-text">
                  {monthLabel(roll.date)}, {roll.photos.length} photo{roll.photos.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className={gridClass}>
                {tiles.map((photo, i) => {
                  const isLead = hasLead && i === 0
                  const isOverflowTile = overflowCount > 0 && i === 4
                  const tileStyle = isLead ? { gridRow: "span 2", gridColumn: 1 } : undefined

                  return (
                    <button
                      type="button"
                      key={photo.file}
                      className={`photo-tile${isLead ? " photo-tile--lead" : ""}${isOverflowTile ? " photo-tile--overflow" : ""}`}
                      style={tileStyle}
                      onClick={(e) => openLightbox(roll, i, e.currentTarget)}
                      aria-label={photo.alt}
                    >
                      {photo.image && <GatsbyImage image={photo.image} alt={photo.alt} />}
                      {isOverflowTile && <span className="photo-tile-overflow-count">+{overflowCount}</span>}
                    </button>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      {!showAllRolls && rolls.length > ROLLS_PAGE_SIZE && (
        <button type="button" className="ct-button photo-show-more" onClick={() => setShowAllRolls(true)}>
          Show earlier rolls
        </button>
      )}

      {activeRoll && (
        <Lightbox roll={activeRoll} index={openIndex} onNavigate={setOpenIndex} onClose={closeLightbox} />
      )}
    </Layout>
  )
}

export default PhotographsIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Photographs" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { relativeDirectory: { glob: "photographs/*" } }) {
      nodes {
        relativePath
        gridImage: childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
        largeImage: childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`

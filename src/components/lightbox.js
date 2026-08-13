/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import * as React from "react"
import { useEffect, useRef } from "react"
import { getSrc } from "gatsby-plugin-image"
import { formatDate } from "../utils/date"

const SWIPE_THRESHOLD = 50

const Lightbox = ({ roll, index, onClose, onNavigate }) => {
  const backdropRef = useRef(null)
  const closeButtonRef = useRef(null)
  const touchStartX = useRef(null)

  const photos = roll.photos
  const total = photos.length
  const photo = photos[index]

  const goPrev = React.useCallback(() => {
    onNavigate((index - 1 + total) % total)
  }, [index, total, onNavigate])

  const goNext = React.useCallback(() => {
    onNavigate((index + 1) % total)
  }, [index, total, onNavigate])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        goPrev()
      } else if (e.key === "ArrowRight") {
        goNext()
      } else if (e.key === "Tab") {
        const focusable = backdropRef.current?.querySelectorAll("button")
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose, goPrev, goNext])

  useEffect(() => {
    const preload = (i) => {
      const src = getSrc(photos[i].imageLarge)
      if (src) {
        const img = new Image()
        img.src = src
      }
    }
    preload((index + 1) % total)
    preload((index - 1 + total) % total)
  }, [index, total, photos])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (deltaX > SWIPE_THRESHOLD) {
      goPrev()
    } else if (deltaX < -SWIPE_THRESHOLD) {
      goNext()
    }
  }

  const altText = photo.caption || `${photo.place}, ${formatDate(photo.date)}`

  return (
    <div
      className="photo-lightbox-backdrop"
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      aria-label={roll.title}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        type="button"
        className="photo-lightbox-close"
        aria-label="Close"
        ref={closeButtonRef}
        onClick={onClose}
      >
        ✕
      </button>

      <div className="photo-lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="art-nav-button prev"
          aria-label="Previous photo"
          onClick={(e) => {
            e.stopPropagation()
            goPrev()
          }}
        >
          ❮
        </button>

        <div className="photo-lightbox-image-wrap" key={index}>
          <img
            className="photo-lightbox-image"
            src={getSrc(photo.imageLarge)}
            alt={altText}
          />
        </div>

        <button
          type="button"
          className="art-nav-button next"
          aria-label="Next photo"
          onClick={(e) => {
            e.stopPropagation()
            goNext()
          }}
        >
          ❯
        </button>
      </div>

      <div className="photo-lightbox-caption-block" onClick={(e) => e.stopPropagation()}>
        {photo.caption && <div className="photo-lightbox-caption">{photo.caption}</div>}
        <div className="photo-lightbox-meta mono-text">
          {photo.place} · {formatDate(photo.date)} · {index + 1} / {total}
        </div>
      </div>
    </div>
  )
}

export default Lightbox

import * as React from "react"

const useCarousel = (total) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const goNext = React.useCallback(() => setActiveIndex(i => (i + 1) % total), [total])
  const goPrev = React.useCallback(() => setActiveIndex(i => (i - 1 + total) % total), [total])

  React.useEffect(() => {
    const handler = e => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  return [activeIndex, setActiveIndex, goNext, goPrev]
}

export default useCarousel

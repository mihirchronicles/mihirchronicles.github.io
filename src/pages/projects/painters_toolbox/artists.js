import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

// ─── Artist Data ────────────────────────────────────────────────────────────
import artists from "./artists.json"

// ─── Component ──────────────────────────────────────────────────────────────
const ArtistsIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const [activeIdx, setActiveIdx] = React.useState(0)
    const [imgErrors, setImgErrors] = React.useState({})

    const total = artists.length

    const goNext = React.useCallback(() => setActiveIdx(i => (i + 1) % total), [total])
    const goPrev = React.useCallback(() => setActiveIdx(i => (i - 1 + total) % total), [total])

    // keyboard navigation
    React.useEffect(() => {
        const handler = e => {
            if (e.key === 'ArrowRight') goNext()
            if (e.key === 'ArrowLeft') goPrev()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [goNext, goPrev])

    const handleImgError = (key) => setImgErrors(prev => ({ ...prev, [key]: true }))

    const getCardOffset = (i) => {
        const raw = (i - activeIdx + total) % total
        return raw <= 3 ? raw : -1
    }

    const cardStyle = (offset) => {
        if (offset === 0) return { zIndex: 10, transform: 'translateY(0px) scale(1)', opacity: 1, pointerEvents: 'auto' }
        if (offset === 1) return { zIndex: 9, transform: 'translateY(10px) scale(0.975)', opacity: 0.85, pointerEvents: 'none' }
        if (offset === 2) return { zIndex: 8, transform: 'translateY(20px) scale(0.950)', opacity: 0.65, pointerEvents: 'none' }
        if (offset === 3) return { zIndex: 7, transform: 'translateY(30px) scale(0.925)', opacity: 0.35, pointerEvents: 'none' }
        return { zIndex: 6, opacity: 0, pointerEvents: 'none', transform: 'translateY(40px) scale(0.9)' }
    }

    const artist = artists[activeIdx]

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Famous Artists: Masters of the Craft" />

            <style>{`
                /* Card stack - desktop: absolute stacking; mobile: single card in flow */
                .artist-card-item {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    border-radius: var(--spacing-2);
                    background: var(--color-background);
                    border: 1px solid var(--color-secondary-accent);
                    transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .card-stack-wrap {
                    position: relative;
                    height: 560px;
                    margin: 0 auto;
                }

                @media (max-width: 767px) {
                    /* Reset card to normal flow, only active card visible */
                    .card-stack-wrap { height: auto !important; padding-bottom: var(--spacing-4); }
                    .artist-card-item { position: static !important; display: none !important; transform: none !important; opacity: 1 !important; }
                    .artist-card-offset-0 { display: block !important; }
                    /* Card inner layout */
                    .artist-card-inner { flex-direction: column !important; gap: var(--spacing-3) !important; padding: var(--spacing-4) !important; height: auto !important; }
                    /* Portrait */
                    .artist-portrait-wrap { width: 100% !important; height: 220px !important; min-width: unset !important; }
                    .portrait-img { object-fit: contain !important; object-position: center center !important; background: var(--color-background); }
                    /* Works */
                    .work-thumb { width: 60px !important; height: 60px !important; }

                    .ct-button { padding: var(--spacing-2) var(--spacing-4) !important; font-size: var(--fontSize-0) !important; }
                }
                @media (max-width: 480px) {
                    .artist-portrait-wrap { height: 180px !important; }

                }
                .work-thumb {
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    border-radius: var(--spacing-1);
                    border: 2px solid var(--color-dark);
                    background: var(--color-background);
                }
                .portrait-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top center;
                }
                .portrait-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 4rem;
                    font-weight: bold;
                    font-family: var(--font-heading);
                    color: #fff;
                    opacity: 0.85;
                }


            `}</style>

            <header style={{ textAlign: 'left', marginBottom: 'var(--spacing-16)' }}>
                <h1 className="main-heading">Famous Artists</h1>
                <p className="ct-responsive-header-text">
                    World's most famous artists who permanently altered the course of painting. Study what they understood about light, form, color, and the nature of seeing itself, and you will paint differently forever.
                </p>
                <div style={{ marginTop: 'var(--spacing-8)' }}>
                    <a href="#explore" className="ct-button">Meet the Masters &darr;</a>
                </div>
            </header>

            <hr className="project-hr" />

            {/* ─── CARD STACK ──────────────────────────────────────────── */}
            <section id="explore" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Explore</span>
                    <h2>Masterpieces</h2>
                    <p>Use the arrows or keyboard ← → to move through the deck. Each card reveals their masterpieces and technique.</p>
                </div>



                {/* Card stack */}
                <div className="card-stack-wrap">
                    {artists.map((a, i) => {
                        const offset = getCardOffset(i)
                        if (offset < 0) return null
                        return (
                            <div key={a.name} className={`artist-card-item artist-card-offset-${offset}`} style={cardStyle(offset)}>
                                <div className="artist-card-inner" style={{ display: 'flex', gap: 'var(--spacing-6)', padding: 'var(--spacing-6)', boxSizing: 'border-box' }}>

                                    {/* Portrait column */}
                                    <div className="artist-portrait-wrap" style={{ width: '200px', minWidth: '180px', borderRadius: 'var(--spacing-1)', overflow: 'hidden', border: '2px solid var(--color-dark)', flexShrink: 0, height: '440px' }}>
                                        {!imgErrors[`portrait-${i}`] ? (
                                            <img
                                                src={a.portrait}
                                                alt={a.name}
                                                className="portrait-img"
                                                onError={() => handleImgError(`portrait-${i}`)}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="portrait-placeholder" style={{ backgroundColor: a.accent }}>
                                                {a.name.split(' ').map(w => w[0]).join('')}
                                            </div>
                                        )}
                                    </div>

                                    {/* Details column */}
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
                                        {/* Header */}
                                        <div style={{ marginBottom: 'var(--spacing-4)' }}>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-2)' }}>
                                                <h2 style={{ margin: 0, fontSize: 'var(--fontSize-4)' }}>{a.name}</h2>
                                                <span style={{ display: 'inline-block', padding: '2px 10px', borderRadius: '12px', fontSize: 'var(--fontSize-0)', fontWeight: 'bold', backgroundColor: a.accent, color: '#fff', whiteSpace: 'nowrap' }}>{a.era}</span>
                                            </div>
                                            <p style={{ margin: '0 0 var(--spacing-1) 0', fontSize: 'var(--fontSize-0)' }}>{a.nationality} · {a.years}</p>
                                            <p style={{ margin: 0, fontSize: 'var(--fontSize-0)', fontWeight: 'bold' }}>Style: {a.style}</p>
                                        </div>

                                        {/* Known for */}
                                        <div style={{ padding: 'var(--spacing-3)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)', marginBottom: 'var(--spacing-4)' }}>
                                            <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 var(--spacing-1) 0' }}>Known For</p>
                                            <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>{a.knownFor}</p>
                                        </div>

                                        {/* Famous works */}
                                        <div>
                                            <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 var(--spacing-3) 0' }}>Famous Works</p>
                                            <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
                                                {a.works.map((w, wi) => (
                                                    <div key={wi} style={{ textAlign: 'center', maxWidth: '90px' }}>
                                                        {!imgErrors[`work-${i}-${wi}`] ? (
                                                            <img
                                                                src={w.img}
                                                                alt={w.title}
                                                                className="work-thumb"
                                                                onError={() => handleImgError(`work-${i}-${wi}`)}
                                                                loading="lazy"
                                                            />
                                                        ) : (
                                                            <div className="work-thumb" style={{ backgroundColor: a.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 'var(--fontSize-0)' }}>
                                                                Art
                                                            </div>
                                                        )}
                                                        <p style={{ fontSize: 'var(--fontSize-0)', margin: 'var(--spacing-1) 0 0 0', lineHeight: 1.3 }}>{w.title}</p>
                                                        <p style={{ fontSize: 'var(--fontSize-0)', margin: 0 }}>{w.year}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Technique panel - below the stack */}
                <div className="ct-card" style={{ marginTop: 'var(--spacing-4)', borderLeft: `4px solid ${artist.accent}` }}>
                    <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 var(--spacing-2) 0' }}>Painter's Technique: {artist.name}</p>
                    <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>{artist.technique}</p>
                </div>

                {/* Navigation controls */}
                <div className="card-nav-controls">
                    <button onClick={goPrev} className="ct-button" aria-label="Previous artist">&larr; Prev</button>
                    <div className="nav-dots-desktop">
                        {artists.map((_, i) => (
                            <button key={i} className={`nav-dot${i === activeIdx ? ' active' : ''}`} onClick={() => setActiveIdx(i)} aria-label={`Go to artist ${i + 1}`}><span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>{i + 1}</span></button>
                        ))}
                    </div>
                    <div className="nav-counter-mobile mono-text">
                        {activeIdx + 1} / {total}
                    </div>
                    <button onClick={goNext} className="ct-button" aria-label="Next artist">Next &rarr;</button>
                </div>
            </section>

            <hr className="project-hr" />

            {/* ─── REFERENCE TABLE ─────────────────────────────────────── */}
            <section id="reference" style={{ marginBottom: 'var(--spacing-16)' }}>
                <span className="ct-pill">Reference</span>
                <h2>Artist Index</h2>
                <p>A reference table of artists above. Click any card above to explore their work in depth.</p>
                <div style={{ overflowX: 'auto', marginTop: 'var(--spacing-8)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-2)' }}>
                    <table className="reference-table" style={{ marginBottom: '0px' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Artist</th>
                                <th>Years</th>
                                <th>Era</th>
                                <th>Nationality</th>
                                <th>Style</th>
                                <th>Famous Works</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artists.map((a, i) => (
                                <tr key={a.name} style={{ cursor: 'pointer' }} onClick={() => { setActiveIdx(i); document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                    <td className="mono-text" style={{ fontWeight: 'bold' }}>{String(i + 1).padStart(2, '0')}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                                            <span className="era-dot" style={{ backgroundColor: a.accent }} />
                                            <strong>{a.name}</strong>
                                        </div>
                                    </td>
                                    <td className="mono-text" style={{ whiteSpace: 'nowrap' }}>{a.years}</td>
                                    <td>
                                        <div>
                                            <span style={{ display: 'inline-block', padding: '1px 8px', borderRadius: '12px', fontSize: 'var(--fontSize-0)', fontWeight: 'bold', backgroundColor: a.accent, color: '#fff', whiteSpace: 'nowrap', marginBottom: 'var(--spacing-1)' }}>{a.era}</span>
                                            <p style={{ margin: 0, fontSize: 'var(--fontSize-0)', lineHeight: 1.4, opacity: 0.8 }}>{a.eraDesc}</p>
                                        </div>
                                    </td>
                                    <td style={{ whiteSpace: 'nowrap' }}>{a.nationality}</td>
                                    <td>{a.style}</td>
                                    <td>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                            {a.works.map((w, wi) => (
                                                <span key={wi} style={{ fontSize: 'var(--fontSize-0)' }}>· {w.title} <span>({w.year})</span></span>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ─── SOURCES ─────────────────────────────────────────────── */}
            <section style={{ marginBottom: 'var(--spacing-16)' }}>
                <hr className="project-hr" />
                <span className="ct-pill">Sources</span>
                <h2>References</h2>
                <p>Biographical details, dates, and era descriptions are drawn from the following sources. All images are public domain works sourced from Wikimedia Commons.</p>
                <ul style={{ marginTop: 'var(--spacing-4)' }}>
                    <li><a href="https://en.wikipedia.org/wiki/Wikipedia:Contents/Arts_and_culture" target="_blank" rel="noopener noreferrer">Wikipedia Arts &amp; Culture</a>: biographical summaries, dates, and movements</li>
                    <li><a href="https://commons.wikimedia.org/" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>: public domain portraits and artwork images</li>
                    <li><a href="https://www.metmuseum.org/toah/" target="_blank" rel="noopener noreferrer">The Metropolitan Museum of Art (Heilbrunn Timeline of Art History)</a>: era context and movement overviews</li>
                    <li><a href="https://www.khanacademy.org/humanities/art-history" target="_blank" rel="noopener noreferrer">Khan Academy Art History</a>: technique descriptions and style analysis</li>
                    <li>H.W. Janson, <em>History of Art</em> (8th edition): general reference for biographical and technique notes.</li>
                </ul>
            </section>

        </Layout>
    )
}

export default ArtistsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

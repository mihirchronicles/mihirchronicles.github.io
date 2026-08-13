/* eslint-disable jsx-a11y/control-has-associated-label, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import * as React from "react"

// ─── Artist Data ────────────────────────────────────────────────────────────
import artists from "./artists.json"
import useCarousel from "../../../utils/useCarousel"

// ─── Component ──────────────────────────────────────────────────────────────
const ArtistsIndex = () => {
    const [imgErrors, setImgErrors] = React.useState({})

    const total = artists.length
    const [activeIdx, setActiveIdx, goNext, goPrev] = useCarousel(total)

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
        <>
            <header style={{ textAlign: 'left', marginBottom: 'var(--spacing-16)' }}>
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
                <div className="artist-card-stack-wrap">
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
                            <button key={i} className={`nav-dot${i === activeIdx ? ' active' : ''}`} onClick={() => setActiveIdx(i)} aria-label={`Go to artist ${i + 1}`}><span className="sr-only">{i + 1}</span></button>
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

        </>
    )
}

export default ArtistsIndex


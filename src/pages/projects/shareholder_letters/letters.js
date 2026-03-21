import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

import lettersData from "./letters_data.json"

const letters = lettersData.letters

const LettersIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const [activeIdx, setActiveIdx] = React.useState(0)

    const total = letters.length

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

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Shareholder Letters: Wisdom from the Elite" />

            <style>{`
                /* Card stack - desktop: absolute stacking; mobile: single card in flow */
                .letter-card-item {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    border-radius: var(--spacing-2);
                    background: var(--color-background);
                    border: 1px solid var(--color-secondary-accent);
                    transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    height: 640px;
                }
                .card-stack-wrap {
                    position: relative;
                    height: 640px;
                    margin: 0 auto;
                }

                @media (max-width: 767px) {
                    /* Reset card to normal flow, only active card visible */
                    .card-stack-wrap { height: auto !important; padding-bottom: var(--spacing-4); }
                    .letter-card-item { position: static !important; display: none !important; transform: none !important; opacity: 1 !important; margin-bottom: var(--spacing-4); height: auto !important; }
                    .letter-card-offset-0 { display: block !important; }
                    .letter-card-inner { flex-direction: column !important; gap: var(--spacing-4) !important; padding: var(--spacing-4) !important; height: auto !important; }
                    .author-info-wrap { width: 100% !important; min-width: unset !important; border-right: none !important; padding-right: 0 !important; border-bottom: 2px dashed var(--color-secondary-accent); padding-bottom: var(--spacing-4); }
                }
            `}</style>

            <header style={{ textAlign: 'left', marginBottom: 'var(--spacing-16)' }}>
                <h1 className="main-heading">Shareholder Letters</h1>
                <p className="ct-responsive-header-text">
                    An interactive guide to the most influential shareholder letters and memos. Learn about capital allocation, long-term thinking, risk, and leadership from the world's finest operators and investors.
                </p>
                <div style={{ marginTop: 'var(--spacing-8)' }}>
                    <a href="#explore" className="ct-button">Start Reading &darr;</a>
                </div>
            </header>

            <hr className="project-hr" />

            <section id="explore" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div style={{ marginBottom: 'var(--spacing-6)' }}>
                    <span className="ct-pill">Insights</span>
                    <h2>The Executives</h2>
                    <p>Use the arrows or keyboard ← → to read the key insights from each letter.</p>
                </div>

                {/* Card stack */}
                <div className="card-stack-wrap">
                    {letters.map((L, i) => {
                        const offset = getCardOffset(i)
                        if (offset < 0) return null
                        return (
                            <div key={L.id} className={`letter-card-item letter-card-offset-${offset}`} style={cardStyle(offset)}>
                                <div className="letter-card-inner" style={{ display: 'flex', gap: 'var(--spacing-8)', padding: 'var(--spacing-8)', boxSizing: 'border-box', height: '100%' }}>
                                    
                                    {/* Author column */}
                                    <div className="author-info-wrap" style={{ width: '220px', minWidth: '220px', flexShrink: 0, borderRight: '2px dashed var(--color-secondary-accent)', paddingRight: 'var(--spacing-6)' }}>
                                        <h2 style={{ fontSize: 'var(--fontSize-4)', marginTop: 0, marginBottom: 'var(--spacing-1)' }}>{L.author}</h2>
                                        <p style={{ fontWeight: 'bold', margin: '0 0 var(--spacing-4) 0', color: 'var(--color-primary-accent)' }}>{L.company}</p>
                                        
                                        <div style={{ marginBottom: 'var(--spacing-4)' }}>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.6 }}>Core Focus</span>
                                            <p style={{ margin: 'var(--spacing-1) 0 0 0', fontWeight: 'bold' }}>{L.focus}</p>
                                        </div>

                                        <p style={{ fontSize: 'var(--fontSize-0)', opacity: 0.9, lineHeight: 1.5 }}>
                                            {L.description}
                                        </p>
                                        
                                        <div style={{ marginTop: 'var(--spacing-4)' }}>
                                            <a href={L.sourceLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold' }}>
                                                Read Source Letters &rarr;
                                            </a>
                                        </div>
                                    </div>

                                    {/* Lessons column */}
                                    <div style={{ flex: 1, minWidth: 0, overflowY: 'auto', paddingRight: 'var(--spacing-4)' }}>
                                        <h3 style={{ fontSize: 'var(--fontSize-2)', marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--spacing-4)' }}>Key Insights</h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
                                            {L.lessons.map((lesson, idx) => (
                                                <div key={idx}>
                                                    <h4 style={{ fontSize: 'var(--fontSize-1)', margin: '0 0 var(--spacing-2) 0', display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-2)' }}>
                                                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-dark)', color: 'var(--color-background)', width: '24px', height: '24px', borderRadius: '50%', fontSize: '0.8rem', flexShrink: 0 }}>{idx + 1}</span>
                                                        <span>{lesson.title}</span>
                                                    </h4>
                                                    <p style={{ margin: '0 0 var(--spacing-2) 0', fontSize: 'var(--fontSize-0)' }}>{lesson.content}</p>
                                                    <blockquote style={{ margin: 0, fontSize: 'var(--fontSize-0)', fontStyle: 'italic', color: 'var(--color-primary-accent)', borderLeft: '2px solid var(--color-primary-accent)', paddingLeft: 'var(--spacing-3)' }}>
                                                        "{lesson.quote}"
                                                    </blockquote>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Navigation controls */}
                <div className="card-nav-controls">
                    <button onClick={goPrev} className="ct-button" aria-label="Previous">&larr; Prev</button>
                    <div className="nav-dots-desktop">
                        {letters.map((_, i) => (
                            <button key={i} className={`nav-dot${i === activeIdx ? ' active' : ''}`} onClick={() => setActiveIdx(i)} aria-label={`Go to letter ${i + 1}`}>
                                <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>{i + 1}</span>
                            </button>
                        ))}
                    </div>
                    <div className="nav-counter-mobile mono-text">
                        {activeIdx + 1} / {total}
                    </div>
                    <button onClick={goNext} className="ct-button" aria-label="Next">Next &rarr;</button>
                </div>
                
                <p style={{ textAlign: 'center', marginTop: 'var(--spacing-4)', fontSize: 'var(--fontSize-0)' }} className="mono-text nav-counter-desktop">
                    {activeIdx + 1} / {total}
                </p>
            </section>
        </Layout>
    )
}

export default LettersIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

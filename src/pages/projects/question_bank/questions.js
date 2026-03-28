import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

import questionsData from "./questions_data.json";

const initialQuestions = questionsData.initialQuestions || [];
const wisdomCards = questionsData.wisdomCards || [];

const tagsList = ["all", "growth", "conversational", "life", "product", "investing"];

const QuestionsIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const [activeTag, setActiveTag] = React.useState("all")
    const [randomQuestion, setRandomQuestion] = React.useState(null)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const [activeWisdomIdx, setActiveWisdomIdx] = React.useState(0)

    const totalWisdom = wisdomCards.length
    const goNextWisdom = React.useCallback(() => setActiveWisdomIdx(i => (i + 1) % totalWisdom), [totalWisdom])
    const goPrevWisdom = React.useCallback(() => setActiveWisdomIdx(i => (i - 1 + totalWisdom) % totalWisdom), [totalWisdom])

    React.useEffect(() => {
        const handler = e => {
            if (e.key === 'ArrowRight') goNextWisdom()
            if (e.key === 'ArrowLeft') goPrevWisdom()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [goNextWisdom, goPrevWisdom])

    const getWisdomCardOffset = (i) => {
        const raw = (i - activeWisdomIdx + totalWisdom) % totalWisdom
        return raw <= 3 ? raw : -1
    }

    const wisdomCardStyle = (offset) => {
        if (offset === 0) return { zIndex: 10, transform: 'translateY(0px) scale(1)', opacity: 1, pointerEvents: 'auto' }
        if (offset === 1) return { zIndex: 9, transform: 'translateY(10px) scale(0.975)', opacity: 0.85, pointerEvents: 'none' }
        if (offset === 2) return { zIndex: 8, transform: 'translateY(20px) scale(0.950)', opacity: 0.65, pointerEvents: 'none' }
        if (offset === 3) return { zIndex: 7, transform: 'translateY(30px) scale(0.925)', opacity: 0.35, pointerEvents: 'none' }
        return { zIndex: 6, opacity: 0, pointerEvents: 'none', transform: 'translateY(40px) scale(0.9)' }
    }

    const filteredQuestions = React.useMemo(() => {
        if (activeTag === "all") return initialQuestions;
        return initialQuestions.filter(q => q.tags.includes(activeTag));
    }, [activeTag])

    const pickRandom = () => {
        setIsAnimating(true)
        setTimeout(() => {
            const list = activeTag === "all" ? initialQuestions : filteredQuestions;
            if (list.length === 0) {
                setIsAnimating(false)
                return;
            }
            const randomIndex = Math.floor(Math.random() * list.length);
            setRandomQuestion(list[randomIndex]);
            setIsAnimating(false)
        }, 300)
    }

    const tagColors = {
        life: "#1565c0",
        product: "#8B4513",
        investing: "#2e7d32",
        conversational: "#6a4a8a"
    }

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Questions: To Journal and Think About" />

            <style>{`

                .random-card-custom {
                    text-align: center;
                    margin-bottom: var(--spacing-12);
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    min-height: 280px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-width: 2px;
                }
                .random-card-custom.animating {
                    opacity: 0.5;
                    transform: scale(0.98);
                }
                .random-question-text {
                    font-size: var(--fontSize-4);
                    font-family: var(--font-heading);
                    font-weight: bold;
                    margin-bottom: var(--spacing-6);
                    line-height: 1.3;
                    max-width: 800px;
                }
                .filter-bar {
                    display: flex;
                    gap: var(--spacing-2);
                    flex-wrap: wrap;
                    margin-bottom: var(--spacing-8);
                }
                .filter-pill {
                    padding: var(--spacing-2) var(--spacing-4);
                    border-radius: 20px;
                    border: 1px solid var(--color-secondary-accent);
                    background: transparent;
                    font-size: var(--fontSize-0);
                    font-family: var(--font-heading);
                    font-weight: bold;
                    color: var(--color-dark);
                    cursor: pointer;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .filter-pill:hover {
                    border-color: var(--color-dark);
                    background: rgba(128,128,128,0.1);
                }
                .filter-pill.active {
                    background: var(--color-dark);
                    color: var(--color-background);
                    border-color: var(--color-dark);
                }
                .q-tag {
                    display: inline-block;
                    padding: 2px 10px;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: bold;
                    color: #fff !important;
                    margin-right: 6px;
                    margin-bottom: 4px;
                    text-transform: capitalize;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                .q-tag:hover {
                    opacity: 0.8;
                }
                .q-tag-outline {
                    color: var(--color-light) !important;
                    background-color: var(--color-primary-accent) !important;
                    border: 1px solid var(--color-primary-accent);
                }
                
                .wisdom-card-item {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    border-radius: var(--spacing-2);
                    background: var(--color-background);
                    border: 1px solid var(--color-secondary-accent);
                    transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    padding: var(--spacing-6);
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    height: 420px;
                    overflow-y: auto;
                }
                .wisdom-stack-wrap {
                    position: relative;
                    height: 460px;
                    margin: 0 auto;
                }

                @media (max-width: 767px) {
                    .random-card-custom { padding: var(--spacing-6) var(--spacing-4); min-height: 240px; }
                    .wisdom-stack-wrap { height: auto !important; padding-bottom: var(--spacing-4); }
                    .wisdom-card-item { position: static !important; display: none !important; transform: none !important; opacity: 1 !important; margin-bottom: var(--spacing-4); height: auto !important; }
                    .wisdom-card-offset-0 { display: block !important; }

                    .ct-button { padding: var(--spacing-2) var(--spacing-4) !important; font-size: var(--fontSize-0) !important; }
                }
                    .random-question-text { font-size: var(--fontSize-3); }
                }
            `}</style>

            <header style={{ textAlign: 'left', marginBottom: 'var(--spacing-16)' }}>
                <h1 className="main-heading">Question Bank</h1>
                <p className="ct-responsive-header-text">
                    A collection of interesting prompts for journaling, deep thinking, interviewing, and sparking meaningful conversations. The questions are filterable by categories.
                </p>
                <div style={{ marginTop: 'var(--spacing-8)' }}>
                    <a href="#directory" className="ct-button">
                        View Directory &darr;
                    </a>
                </div>
            </header>

            <hr className="project-hr" />

            <section id="wisdom-cards" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div style={{ marginBottom: 'var(--spacing-6)' }}>
                    <h2>High Signal Questions</h2>
                    <p style={{ opacity: 0.8, marginTop: 'var(--spacing-2)' }}>
                        Below are some high signal questions that help you gain widom and insights. Use the arrows or keyboard ← → to explore. Each card pairs a question with a mental model.
                    </p>
                </div>



                <div className="wisdom-stack-wrap">
                    {wisdomCards.map((card, i) => {
                        const offset = getWisdomCardOffset(i);
                        if (offset < 0) return null;
                        return (
                            <div key={card.id} className={`wisdom-card-item wisdom-card-offset-${offset}`} style={wisdomCardStyle(offset)}>
                                <div style={{ marginBottom: 'var(--spacing-4)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                    <span className="q-tag q-tag-outline" style={{ marginRight: 0 }}>
                                        {card.category}
                                    </span>
                                    <span style={{ fontSize: '0.75rem', opacity: 0.6, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Intensity {card.intensity}/5
                                    </span>
                                </div>
                                <h3 style={{ fontSize: 'var(--fontSize-3)', marginBottom: 'var(--spacing-4)', lineHeight: 1.3 }}>
                                    &ldquo;{card.question}&rdquo;
                                </h3>
                                <p style={{ fontSize: 'var(--fontSize-1)', opacity: 0.9, lineHeight: 1.5 }}>
                                    {card.explanation}
                                </p>
                                <p style={{ fontSize: 'var(--fontSize-1)', opacity: 0.9, lineHeight: 1.5 }}>
                                    <strong>Mental Model:</strong> {card.mental_model}
                                </p>
                                <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-6)', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                    {card.tags.map(t => (
                                        <span key={t} className="q-tag" style={{ backgroundColor: '#444' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="card-nav-controls">
                    <button onClick={goPrevWisdom} className="ct-button" aria-label="Previous card">&larr; Prev</button>
                    <div className="nav-dots-desktop">
                        {wisdomCards.map((_, i) => (
                            <button key={i} className={`nav-dot${i === activeWisdomIdx ? ' active' : ''}`} onClick={() => setActiveWisdomIdx(i)} aria-label={`Go to card ${i + 1}`}>
                                <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>{i + 1}</span>
                            </button>
                        ))}
                    </div>
                    <div className="nav-counter-mobile mono-text">
                        {activeWisdomIdx + 1} / {totalWisdom}
                    </div>
                    <button onClick={goNextWisdom} className="ct-button" aria-label="Next card">Next &rarr;</button>
                </div>

                <p style={{ textAlign: 'center', marginTop: 'var(--spacing-4)', fontSize: 'var(--fontSize-0)' }} className="mono-text nav-counter-desktop">
                    {activeWisdomIdx + 1} / {totalWisdom}
                </p>
            </section>

            <section id="directory" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 'var(--spacing-6)' }}>
                    <h2>Question Bank Directory</h2>
                    <span style={{ fontSize: 'var(--fontSize-0)', opacity: 0.6, fontWeight: 'bold' }}>
                        {filteredQuestions.length} {filteredQuestions.length === 1 ? 'question' : 'questions'}
                    </span>
                </div>

                <div className={`ct-card random-card-custom ${isAnimating ? 'animating' : ''}`} style={{ marginBottom: 'var(--spacing-8)' }}>
                    {randomQuestion ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ marginBottom: 'var(--spacing-3)' }}>
                                {randomQuestion.tags.map(t => (
                                    <span
                                        key={t}
                                        role="button"
                                        tabIndex={0}
                                        className="q-tag"
                                        style={{ backgroundColor: tagColors[t] || '#333' }}
                                        onClick={() => setActiveTag(t)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setActiveTag(t);
                                            }
                                        }}
                                        title={`Filter by ${t}`}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="random-question-text">&ldquo;{randomQuestion.text}&rdquo;</div>
                        </div>
                    ) : (
                        <div className="random-question-text" style={{ color: 'var(--color-secondary-accent)' }}>
                            Ready for a thought experiment?
                        </div>
                    )}
                    <button className="ct-button" onClick={pickRandom}>
                        {randomQuestion ? "Pick Another" : "Pick Random Question"}
                    </button>
                </div>

                <div className="filter-bar">
                    {tagsList.map(t => (
                        <button
                            key={t}
                            className={`filter-pill ${activeTag === t ? 'active' : ''}`}
                            onClick={() => setActiveTag(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <div style={{ overflowX: 'auto', marginTop: 'var(--spacing-8)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-2)' }}>
                    <table className="reference-table" style={{ marginBottom: '0px' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '60px' }}>#</th>
                                <th style={{ minWidth: '400px' }}>Question</th>
                                <th style={{ width: '200px' }}>Tags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredQuestions.map((q, idx) => (
                                <tr key={q.id}>
                                    <td className="mono-text" style={{ fontWeight: 'bold' }}>
                                        {String(idx + 1).padStart(3, '0')}
                                    </td>
                                    <td style={{ fontWeight: '500', fontSize: 'var(--fontSize-1)' }}>{q.text}</td>
                                    <td>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
                                            {q.tags.map(t => (
                                                <span
                                                    key={t}
                                                    role="button"
                                                    tabIndex={0}
                                                    className="q-tag"
                                                    style={{ backgroundColor: tagColors[t] || '#333', marginBottom: 0 }}
                                                    onClick={() => setActiveTag(t)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.preventDefault();
                                                            setActiveTag(t);
                                                        }
                                                    }}
                                                    title={`Filter by ${t}`}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredQuestions.length === 0 && (
                                <tr>
                                    <td colSpan="3" style={{ textAlign: 'center', padding: 'var(--spacing-8)' }}>
                                        No questions found for this category.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

        </Layout>
    )
}

export default QuestionsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

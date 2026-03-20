import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

import initialQuestions from "./questions_data.json";

const tagsList = ["all", "growth", "conversational", "life", "product", "investing"];

const QuestionsIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const [activeTag, setActiveTag] = React.useState("all")
    const [randomQuestion, setRandomQuestion] = React.useState(null)
    const [isAnimating, setIsAnimating] = React.useState(false)

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
                .questions-header {
                    margin-bottom: var(--spacing-16);
                }
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
                @media (max-width: 767px) {
                    .random-card-custom { padding: var(--spacing-6) var(--spacing-4); min-height: 240px; }
                    .random-question-text { font-size: var(--fontSize-3); }
                }
            `}</style>

            <header className="questions-header">
                <h1 className="main-heading">Question Bank</h1>
                <p className="ct-responsive-header-text">
                    A curated collection of interesting prompts for journaling, deep thinking, interviewing, and sparking meaningful conversations. I have been collecting interesting quesitons in my notes app for a while now and thought it would be cool to share them. The questions are filterable by category or you can pick a random one to explore.
                </p>
                <div style={{ marginTop: 'var(--spacing-8)' }}>
                    <a href="#directory" className="ct-button">
                        View Directory &darr;
                    </a>
                </div>
            </header>

            <hr style={{ marginBottom: 'var(--spacing-12)' }} />

            <div className={`ct-card random-card-custom ${isAnimating ? 'animating' : ''}`}>
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

            <section id="directory" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 'var(--spacing-4)' }}>
                    <h2>Directory</h2>
                    <span style={{ fontSize: 'var(--fontSize-0)', opacity: 0.6, fontWeight: 'bold' }}>
                        {filteredQuestions.length} {filteredQuestions.length === 1 ? 'question' : 'questions'}
                    </span>
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

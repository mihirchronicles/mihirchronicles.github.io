import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const PaintBrushesIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    // States for Phase 01: Shapes
    const [activeShape, setActiveShape] = React.useState('Round'); // Round, Flat, Filbert

    // States for Phase 02: Pressure & Load
    const [brushPressure, setBrushPressure] = React.useState(5); // 1-10
    const [paintLoad, setPaintLoad] = React.useState(100); // 0-100%

    // States for Phase 03: Specialty Brushes
    const [activeSpecialty, setActiveSpecialty] = React.useState('Fan');

    const specialtyBrushes = {
        Fan: {
            label: 'Fan',
            useCase: 'Foliage, grass, fur, hair, clouds',
            medium: 'Oil, Acrylic',
            technique: 'Lightly drag across the canvas to split the bristles into individual strands. Use with a dry brush for soft blending without hard edges between tones.',
            svgPath: (
                <g>
                    {/* Handle */}
                    <path d="M45 300 L55 300 L57 200 L43 200 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Ferrule */}
                    <rect x="40" y="180" width="20" height="25" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Fan bristles */}
                    {[...Array(13)].map((_, i) => {
                        const angle = -80 + i * 13.3;
                        const rad = angle * Math.PI / 180;
                        const x2 = 50 + Math.sin(rad) * 100;
                        const y2 = 175 - Math.cos(rad) * 100;
                        return <line key={i} x1="50" y1="175" x2={x2} y2={y2} stroke="#451a03" strokeWidth="2" strokeLinecap="round" />;
                    })}
                </g>
            )
        },
        Liner: {
            label: 'Liner / Rigger',
            useCase: 'Thin lines, ship rigging, lettering, fine detail',
            medium: 'Oil, Acrylic, Watercolor',
            technique: 'Thin your paint to an ink-like consistency. Load the full belly of the brush and pull in a single continuous motion, letting the long hairs maintain a uniform fine line without lifting.',
            svgPath: (
                <g>
                    {/* Handle */}
                    <path d="M45 300 L55 300 L57 120 L43 120 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Ferrule */}
                    <rect x="42" y="100" width="16" height="22" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Long thin bristle */}
                    <path d="M47 100 Q50 30 50 10 Q50 30 53 100 Z" fill="#451a03" />
                </g>
            )
        },
        Mop: {
            label: 'Mop',
            useCase: 'Large washes, blending skies, lifting wet paint',
            medium: 'Watercolor, Gouache',
            technique: 'Load with a large amount of dilute pigment. Apply in broad, sweeping arcs without pressure. For skies, work wet-on-wet to allow colors to bloom and diffuse naturally at the edges.',
            svgPath: (
                <g>
                    {/* Handle */}
                    <path d="M45 300 L55 300 L57 180 L43 180 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Ferrule */}
                    <rect x="38" y="155" width="24" height="28" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Large dome bristle */}
                    <ellipse cx="50" cy="120" rx="30" ry="40" fill="#451a03" />
                </g>
            )
        },
        Angular: {
            label: 'Angular / Sword',
            useCase: 'Curved strokes, petals, flowing calligraphy lines',
            medium: 'Oil, Acrylic, Watercolor',
            technique: 'Use the thin edge for fine lines and the flat belly for wide strokes in a single stroke. The angled tip lets you pivot between thick and thin by rotating your wrist mid-stroke.',
            svgPath: (
                <g>
                    {/* Handle */}
                    <path d="M45 300 L55 300 L57 185 L43 185 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Ferrule */}
                    <rect x="40" y="163" width="20" height="25" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Angled flat bristle */}
                    <path d="M40 163 L60 163 L70 90 L50 100 Z" fill="#451a03" />
                </g>
            )
        },
        Hake: {
            label: 'Hake',
            useCase: 'Soft blending, varnishing, large dry-brush textures',
            medium: 'Watercolor, Oil (varnish)',
            technique: 'Hold lightly near the end of the long handle and use the full width for feathering strokes. Never press hard, the Hake\'s power is in its whisper-light touch across a wet surface.',
            svgPath: (
                <g>
                    {/* Long handle */}
                    <path d="M45 300 L55 300 L56 160 L44 160 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Wide ferrule area */}
                    <rect x="28" y="140" width="44" height="22" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Wide flat bristles */}
                    {[...Array(7)].map((_, i) => {
                        const x = 32 + i * 6;
                        return <line key={i} x1={x} y1="140" x2={x} y2="60" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />;
                    })}
                </g>
            )
        },
        Bright: {
            label: 'Bright',
            useCase: 'Short controlled strokes, thick paint, sharp-edged marks',
            medium: 'Oil, Heavy Acrylic',
            technique: 'Load heavily with stiff paint and push into the canvas with deliberate, short jabs. The cupped, short bristles hold their shape under pressure, giving you precise control over impasto passages without the bristles fanning out.',
            svgPath: (
                <g>
                    {/* Handle */}
                    <path d="M45 300 L55 300 L57 185 L43 185 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Ferrule */}
                    <rect x="39" y="163" width="22" height="25" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Short flat bristle block with slight curve */}
                    <path d="M39 163 L61 163 L62 115 Q50 108 38 115 Z" fill="#451a03" />
                </g>
            )
        },
        Stippling: {
            label: 'Stippling',
            useCase: 'Texture, foliage, stone, stippled backgrounds',
            medium: 'Oil, Acrylic, Gouache',
            technique: 'Hold perpendicular to the surface and pounce straight up and down with a dry or lightly loaded brush. Never drag. Each pounce deposits a cluster of individual pigment dots that build up into rich, granular texture.',
            svgPath: (
                <g>
                    {/* Handle */}
                    <path d="M45 300 L55 300 L57 175 L43 175 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Ferrule — wide, short */}
                    <rect x="36" y="153" width="28" height="24" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Dense cluster of short, stiff bristles */}
                    {[...Array(5)].map((_, col) =>
                        [...Array(4)].map((_, row) => {
                            const bx = 39 + col * 5.5;
                            const by = 153 - row * 14;
                            const offsetX = (col + row) % 2 === 0 ? 1 : -1;
                            return <line key={`${col}-${row}`} x1={bx} y1={by} x2={bx + offsetX} y2={by - 12} stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />;
                        })
                    )}
                </g>
            )
        },
        PaletteKnife: {
            label: 'Palette Knife',
            useCase: 'Impasto, mixing paint on palette, scraping back wet paint',
            medium: 'Oil, Heavy Acrylic',
            technique: 'Hold like a spatula and drag the flat blade across the canvas to spread thick paint in one smooth plane. Tilt the blade to its edge for precise ridges. Use the tip to scratch through wet layers to reveal color underneath (sgraffito).',
            svgPath: (
                <g>
                    {/* Handle — rounded wood grip */}
                    <path d="M45 300 L55 300 L56 210 L44 210 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    <ellipse cx="50" cy="215" rx="8" ry="12" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Metal shank */}
                    <rect x="48" y="155" width="4" height="58" fill="#94a3b8" stroke="var(--color-dark)" strokeWidth="1" />
                    {/* Flat blade — trowel shape */}
                    <path d="M35 155 L65 155 L60 80 Q50 70 40 80 Z" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Blade highlight */}
                    <line x1="45" y1="148" x2="43" y2="88" stroke="#fff" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                </g>
            )
        },
        Badger: {
            label: 'Badger Blender',
            useCase: 'Softening edges, removing brushmarks, blending wet oil glazes',
            medium: 'Oil',
            technique: 'Use completely dry, never load with paint. Lightly tap or sweep across the wet surface in a circular motion. The extremely soft hair lifts and diffuses pigment without disturbing the underlying layer, creating seamless tonal gradations.',
            svgPath: (
                <g>
                    {/* Handle */}
                    <path d="M45 300 L55 300 L56 175 L44 175 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Wide ferrule */}
                    <rect x="33" y="153" width="34" height="24" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                    {/* Very wide, soft dome of bristles */}
                    <ellipse cx="50" cy="118" rx="28" ry="38" fill="#78716c" />
                    {/* Lighter tips to show the two-tone badger hair */}
                    <ellipse cx="50" cy="88" rx="20" ry="18" fill="#d6d3d1" opacity="0.7" />
                    {/* Fine hair lines */}
                    {[...Array(9)].map((_, i) => {
                        const bx = 36 + i * 3.5;
                        return <line key={i} x1={bx} y1="153" x2={50 + (bx - 50) * 0.6} y2="70" stroke="#44403c" strokeWidth="1" strokeLinecap="round" opacity="0.5" />;
                    })}
                </g>
            )
        }
    };


    const techniques = [
        {
            name: 'Impasto',
            description: 'Paint applied so thickly it creates 3D texture on the canvas. The palette knife or stiff hog-hair brush leave physical ridges that catch light. Favored by Van Gogh and Rembrandt.',
            medium: 'Oil, Heavy Acrylic',
            level: 'Advanced'
        },
        {
            name: 'Glazing',
            description: 'Thin, transparent layers of color laid over a completely dry base. Each glaze modifies the color beneath without mixing with it, creating luminous depth impossible with a single opaque layer.',
            medium: 'Oil, Acrylic',
            level: 'Intermediate'
        },
        {
            name: 'Scumbling',
            description: 'A dry, rough brush loaded with opaque paint is dragged lightly across a dry layer below, allowing the lower color to show through the gaps. Creates atmospheric haze, weathered textures, and broken light.',
            medium: 'Oil, Acrylic, Pastel',
            level: 'Intermediate'
        },
        {
            name: 'Wet-on-Wet',
            description: 'Fresh paint is applied directly into wet paint. Colors blend softly on the canvas surface. The technique demands speed and confidence, as there is no rework once the brush touches wet pigment.',
            medium: 'Oil, Watercolor',
            level: 'Advanced'
        },
        {
            name: 'Dry Brush',
            description: 'A brush with very little paint, worked across a textured surface. Only the raised peaks of the canvas catch pigment, leaving a broken, scratchy stroke that is perfect for wood grain, fur, and sparkling water.',
            medium: 'All',
            level: 'Beginner'
        },
        {
            name: 'Feathering',
            description: 'Soft, whisking strokes made with the very tip of the bristles to blend two adjacent color zones together. The brush barely grazes the surface, pulling color across the boundary with each light pass.',
            medium: 'Oil, Acrylic',
            level: 'Intermediate'
        }
    ];

    const levelColors = { Beginner: '#43ae6aff', Intermediate: '#4978c3ff', Advanced: '#ef4444' };


    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Paint Brushes: Tools of Expression" />

            <style>{`

                /* SVG Brush Preview */
                .brush-preview-container {
                    width: 100%;
                    max-width: 300px;
                    height: 400px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                .brush-element {
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }



            `}</style>

            <header style={{ textAlign: 'left', marginBottom: 'var(--spacing-16)' }}>
                <h1 className="main-heading">Paint Brushes</h1>
                <p className="ct-responsive-header-text">
                    From the anatomy of animal hair to the physics of fluid dynamics on digital canvas. A guide to the most essential instrument in an artist's arsenal.
                </p>
                <div style={{ marginTop: 'var(--spacing-8)' }}>
                    <a href="#beginner" className="ct-button">Start the Journey &darr;</a>
                </div>
            </header>

            <hr className="project-hr" />

            <section id="beginner" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 01</span>
                    <h2>Beginner: Anatomy & Shapes</h2>
                    <p>Every brush is composed of three parts: the handle (wood or plastic), the ferrule (the metal band holding everything together), and the bristles (natural hair or synthetic filaments). The shape of the bristles dictates the exact footprint of paint left on the canvas.</p>
                </div>

                <div className="ct-card text-center" style={{ marginTop: 'var(--spacing-8)' }}>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-4)', justifyContent: 'center', marginBottom: 'var(--spacing-8)' }}>
                        <button
                            onClick={() => setActiveShape('Round')}
                            className="ct-button"
                            style={{
                                backgroundColor: activeShape === 'Round' ? 'var(--color-dark)' : 'var(--color-background)',
                                color: activeShape === 'Round' ? 'var(--color-background)' : 'var(--color-dark)',
                                boxShadow: activeShape === 'Round' ? 'none' : '6px 6px 0px 0px var(--color-dark)',
                                transform: activeShape === 'Round' ? 'translate(6px, 6px)' : 'none'
                            }}
                        >Round</button>
                        <button
                            onClick={() => setActiveShape('Flat')}
                            className="ct-button"
                            style={{
                                backgroundColor: activeShape === 'Flat' ? 'var(--color-dark)' : 'var(--color-background)',
                                color: activeShape === 'Flat' ? 'var(--color-background)' : 'var(--color-dark)',
                                boxShadow: activeShape === 'Flat' ? 'none' : '6px 6px 0px 0px var(--color-dark)',
                                transform: activeShape === 'Flat' ? 'translate(6px, 6px)' : 'none'
                            }}
                        >Flat</button>
                        <button
                            onClick={() => setActiveShape('Filbert')}
                            className="ct-button"
                            style={{
                                backgroundColor: activeShape === 'Filbert' ? 'var(--color-dark)' : 'var(--color-background)',
                                color: activeShape === 'Filbert' ? 'var(--color-background)' : 'var(--color-dark)',
                                boxShadow: activeShape === 'Filbert' ? 'none' : '6px 6px 0px 0px var(--color-dark)',
                                transform: activeShape === 'Filbert' ? 'translate(6px, 6px)' : 'none'
                            }}
                        >Filbert</button>
                    </div>

                    <div className="ct-grid cols-2" style={{ marginBottom: 0 }}>
                        <div className="brush-preview-container" style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)' }}>
                            <svg viewBox="0 0 100 300" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                                {/* Ferrule */}
                                <rect x="35" y="150" width="30" height="40" fill="#cbd5e1" stroke="var(--color-dark)" strokeWidth="2" />
                                <line x1="35" y1="160" x2="65" y2="160" stroke="var(--color-dark)" strokeWidth="1" opacity="0.5" />
                                <line x1="35" y1="180" x2="65" y2="180" stroke="var(--color-dark)" strokeWidth="1" opacity="0.5" />

                                {/* Handle */}
                                <path d="M35 190 L65 190 L60 300 L40 300 Z" fill="#b45309" stroke="var(--color-dark)" strokeWidth="2" />

                                {/* Bristles changing based on shape */}
                                <g className="brush-element">
                                    {activeShape === 'Round' && (
                                        <path d="M35 150 Q50 50 50 10 Q50 50 65 150 Z" fill="#451a03" />
                                    )}
                                    {activeShape === 'Flat' && (
                                        <rect x="35" y="80" width="30" height="70" fill="#451a03" />
                                    )}
                                    {activeShape === 'Filbert' && (
                                        <path d="M35 150 L35 100 Q50 70 65 100 L65 150 Z" fill="#451a03" />
                                    )}
                                </g>
                            </svg>
                        </div>

                        <div style={{ textAlign: 'left', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', borderRadius: 'var(--spacing-1)', border: '1px solid var(--color-secondary-accent)' }}>
                            <h3 style={{ margin: '0 0 var(--spacing-4) 0', color: 'var(--color-primary-accent)' }}>The {activeShape} Brush</h3>
                            <p style={{ margin: '0', fontSize: 'var(--fontSize-0)' }}>
                                {activeShape === 'Round' && "A versatile classic. The pointed tip allows for fine detail work and sweeping, variable-width wash strokes when pressed down. The belly holds a lot of water."}
                                {activeShape === 'Flat' && "Its sharp squared edge makes it perfect for blocking in large areas of solid color quickly, painting straight edges, and creating sharp structural angles."}
                                {activeShape === 'Filbert' && "A hybrid of round and flat. Its oval shape creates strokes with soft, rounded edges, making it the favorite brush of classical portrait painters for blending skin tones."}
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            <hr className="project-hr" />

            <section id="intermediate" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 02</span>
                    <h2>Intermediate: Pressure & Opacity</h2>
                    <p>Unlike a digital pen tool, a physical brush is highly responsive to the artist's kinetic energy. The amount of <strong>Pressure</strong> applied against the canvas alters the stroke's width, while the <strong>Paint Load</strong> (how wet the brush is) dictates the opacity and texture.</p>
                </div>

                <div className="ct-card" style={{ marginTop: 'var(--spacing-8)' }}>

                    <div style={{
                        width: '100%',
                        height: '200px',
                        backgroundColor: 'var(--color-light)',
                        border: '1px solid var(--color-secondary-accent)',
                        borderRadius: 'var(--spacing-1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <svg viewBox="0 0 500 100" style={{ width: '100%', height: '100%' }}>
                            <defs>
                                <filter id="dryBrushNoise" x="0" y="0" width="100%" height="100%">
                                    {/* Procedural noise based on paint load inverse (less paint = more noise) */}
                                    <feTurbulence type="fractalNoise" baseFrequency={0.05 + ((100 - paintLoad) / 100) * 0.5} numOctaves="3" result="noise" />
                                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 7 -3" in="noise" result="highContrastNoise" />

                                    {/* The magic: composite the noise out of the SourceGraphic if load is low */}
                                    {paintLoad < 90 && (
                                        <feComposite operator="in" in="SourceGraphic" in2="highContrastNoise" result="dryStroke" />
                                    )}
                                    {paintLoad >= 90 && (
                                        <feComposite operator="in" in="SourceGraphic" in2="SourceGraphic" result="dryStroke" />
                                    )}

                                    {/* Apply overall opacity based on load */}
                                    <feComponentTransfer in="dryStroke">
                                        <feFuncA type="linear" slope={Math.max(0.2, paintLoad / 100)} />
                                    </feComponentTransfer>
                                </filter>
                            </defs>

                            <path
                                d="M50 50 Q150 20 250 50 T450 50"
                                fill="none"
                                stroke="#F74A1F"
                                strokeWidth={brushPressure * 4}
                                strokeLinecap="round"
                                filter="url(#dryBrushNoise)"
                                style={{ transition: 'stroke-width 0.2s ease, filter 0.2s ease' }}
                            />
                        </svg>
                    </div>

                    <div className="ct-grid cols-2" style={{ marginTop: 'var(--spacing-8)', marginBottom: 0, alignItems: 'start' }}>

                        <div>
                            <div className="flex-row-between">
                                <label htmlFor="pressureSlider" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Hand Pressure</label>
                                <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{brushPressure * 10}%</span>
                            </div>
                            <input
                                id="pressureSlider"
                                type="range"
                                className="color-range"
                                min="1"
                                max="10"
                                value={brushPressure}
                                onChange={e => setBrushPressure(parseInt(e.target.value))}
                            />
                            <p style={{ fontSize: 'var(--fontSize-0)', opacity: 0.8, margin: 0 }}>Increased downward pressure forces the bristles to splay outward, yielding a vastly thicker stroke. Light pressure creates delicate, hair-thin lines.</p>
                        </div>

                        <div>
                            <div className="flex-row-between">
                                <label htmlFor="loadSlider" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Paint Load (Medium)</label>
                                <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{paintLoad}%</span>
                            </div>
                            <input
                                id="loadSlider"
                                type="range"
                                className="color-range"
                                min="0"
                                max="100"
                                value={paintLoad}
                                onChange={e => setPaintLoad(parseInt(e.target.value))}
                            />
                            <p style={{ fontSize: 'var(--fontSize-0)', opacity: 0.8, margin: 0 }}>A fully loaded wet brush creates an opaque, contiguous line (Impasto). A brush with very little paint catches only the high points of the canvas texture, creating a scratchy, broken effect known as "Dry Brush."</p>
                        </div>

                    </div>

                </div>
            </section>

            <hr className="project-hr" />

            <section id="advanced" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 03</span>
                    <h2>Advanced: Specialty Brushes & Techniques</h2>
                    <p>Beyond the foundational three shapes, a painter's toolkit expands into specialized brushes engineered for specific tasks — from laying vast washes to rendering a single strand of hair. Mastery of these, combined with technique, separates a competent painter from a deliberate one.</p>
                </div>

                {/* Specialty Brush Explorer */}
                <div className="ct-card" style={{ marginTop: 'var(--spacing-8)' }}>
                    <h3 style={{ marginTop: 0 }}>Specialty Brush Explorer</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-8)' }}>
                        {Object.keys(specialtyBrushes).map(key => (
                            <button
                                key={key}
                                onClick={() => setActiveSpecialty(key)}
                                className="ct-button"
                                style={{
                                    backgroundColor: activeSpecialty === key ? 'var(--color-dark)' : 'var(--color-background)',
                                    color: activeSpecialty === key ? 'var(--color-background)' : 'var(--color-dark)',
                                    boxShadow: activeSpecialty === key ? 'none' : '6px 6px 0px 0px var(--color-dark)',
                                    transform: activeSpecialty === key ? 'translate(6px, 6px)' : 'none'
                                }}
                            >
                                {specialtyBrushes[key].label}
                            </button>
                        ))}
                    </div>

                    <div className="ct-grid cols-2" style={{ marginBottom: 0 }}>
                        <div className="brush-preview-container" style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)' }}>
                            <svg viewBox="0 0 100 320" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                                {specialtyBrushes[activeSpecialty].svgPath}
                            </svg>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
                            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                                <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 var(--spacing-2) 0' }}>Best For</p>
                                <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>{specialtyBrushes[activeSpecialty].useCase}</p>
                            </div>
                            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                                <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 var(--spacing-2) 0' }}>Medium</p>
                                <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>{specialtyBrushes[activeSpecialty].medium}</p>
                            </div>
                            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                                <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-secondary-accent)', margin: '0 0 var(--spacing-2) 0' }}>How to Use</p>
                                <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>{specialtyBrushes[activeSpecialty].technique}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Painting Techniques Reference */}
                <div style={{ marginTop: 'var(--spacing-16)' }}>
                    <h3>Painting Technique Reference</h3>
                    <p>The brush is only the instrument — technique is the language. These are the six foundational mark-making methods every painter builds a vocabulary from.</p>
                    <div className="ct-grid cols-3" style={{ marginBottom: 0, marginTop: 'var(--spacing-8)' }}>
                        {techniques.map(t => (
                            <div key={t.name} className="ct-card" style={{ padding: 'var(--spacing-5)', margin: 0, border: '1px solid var(--color-dark)' }}>
                                <p style={{ margin: '0 0 var(--spacing-3) 0' }}><strong>{t.name}</strong></p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)', alignItems: 'center' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '2px 8px',
                                        borderRadius: '12px',
                                        fontSize: 'var(--fontSize-0)',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.05em',
                                        backgroundColor: levelColors[t.level],
                                        color: '#fff',
                                        whiteSpace: 'nowrap'
                                    }}>{t.level}</span>
                                </div>
                                <p style={{ fontSize: 'var(--fontSize-0)', margin: 'var(--spacing-2) 0 0 0' }}><strong>MEDIUM:</strong> {t.medium}</p>
                                <br></br>
                                <p style={{ fontSize: 'var(--fontSize-0)', margin: '0 0 var(--spacing-4) 0' }}>{t.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </Layout>
    )
}

export default PaintBrushesIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

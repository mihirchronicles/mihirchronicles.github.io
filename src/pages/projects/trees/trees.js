import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const TreesIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    // Phase 01: Species selector
    const [activeSpecies, setActiveSpecies] = React.useState('Oak')

    // Phase 02: Branch sliders
    const [branchAngle, setBranchAngle] = React.useState(30)
    const [taperRatio, setTaperRatio] = React.useState(65)

    // Phase 03: Light direction
    const [lightDir, setLightDir] = React.useState('TopLeft')

    // ─── Species data ────────────────────────────────────────────────────
    const species = {
        Oak: {
            label: 'Oak',
            silhouette: 'Broad Spreading Crown',
            branching: 'Alternate, wide angles (45–70°)',
            medium: 'Oil, Acrylic',
            paintersNote: 'Paint the crown as three stacked cloud masses, one lit from above, one mid-tone, one deep shadow below. The trunk shortens to almost nothing beneath the crown at distance.',
            svgPath: (
                <g>
                    {/* Ground hint */}
                    <line x1="20" y1="295" x2="180" y2="295" stroke="var(--color-secondary-accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    {/* Trunk */}
                    <path d="M90 295 Q88 260 85 230 Q90 215 95 230 Q97 260 110 295 Z" fill="#7c5c3a" stroke="var(--color-dark)" strokeWidth="1.5" />
                    {/* Main scaffold branches */}
                    <line x1="90" y1="240" x2="50" y2="200" stroke="#7c5c3a" strokeWidth="7" strokeLinecap="round" />
                    <line x1="95" y1="235" x2="145" y2="195" stroke="#7c5c3a" strokeWidth="6" strokeLinecap="round" />
                    <line x1="92" y1="225" x2="92" y2="175" stroke="#7c5c3a" strokeWidth="5" strokeLinecap="round" />
                    {/* Secondary branches */}
                    <line x1="50" y1="200" x2="30" y2="170" stroke="#7c5c3a" strokeWidth="4" strokeLinecap="round" />
                    <line x1="50" y1="200" x2="70" y2="165" stroke="#7c5c3a" strokeWidth="3" strokeLinecap="round" />
                    <line x1="145" y1="195" x2="165" y2="165" stroke="#7c5c3a" strokeWidth="3.5" strokeLinecap="round" />
                    <line x1="145" y1="195" x2="130" y2="160" stroke="#7c5c3a" strokeWidth="3" strokeLinecap="round" />
                    {/* Crown masses */}
                    <ellipse cx="92" cy="130" rx="65" ry="48" fill="#3d7a45" opacity="0.9" />
                    <ellipse cx="55" cy="155" rx="40" ry="32" fill="#3d7a45" opacity="0.85" />
                    <ellipse cx="140" cy="150" rx="38" ry="30" fill="#3d7a45" opacity="0.85" />
                    {/* Highlight top mass */}
                    <ellipse cx="88" cy="105" rx="45" ry="32" fill="#5fa865" opacity="0.7" />
                    {/* Sky holes */}
                    <ellipse cx="75" cy="140" rx="10" ry="7" fill="var(--color-background)" opacity="0.4" />
                    <ellipse cx="115" cy="145" rx="8" ry="6" fill="var(--color-background)" opacity="0.35" />
                    {/* Labels */}
                    <text x="115" y="260" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Trunk</text>
                    <line x1="110" y1="258" x2="96" y2="255" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                    <text x="150" y="130" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Crown</text>
                    <line x1="148" y1="128" x2="135" y2="120" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                    <text x="155" y="195" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Branch</text>
                    <line x1="153" y1="193" x2="145" y2="190" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                </g>
            )
        },
        Pine: {
            label: 'Pine / Conifer',
            silhouette: 'Triangular - Single Leader',
            branching: 'Whorled tiers, near-horizontal (10–25°)',
            medium: 'Watercolor, Oil',
            paintersNote: 'Work top to bottom. Each tier is a dark wedge with a lighter front edge. The silhouette edge is ragged and irregular, resist the urge to make it smooth.',
            svgPath: (
                <g>
                    <line x1="20" y1="295" x2="180" y2="295" stroke="var(--color-secondary-accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    {/* Trunk */}
                    <rect x="92" y="240" width="16" height="55" fill="#7c5c3a" stroke="var(--color-dark)" strokeWidth="1.5" rx="2" />
                    {/* Triangular tiers — bottom to top */}
                    <polygon points="100,225 30,260 170,260" fill="#2d5c35" stroke="var(--color-dark)" strokeWidth="1" />
                    <polygon points="100,185 45,220 155,220" fill="#2d5c35" stroke="var(--color-dark)" strokeWidth="1" />
                    <polygon points="100,150 58,183 142,183" fill="#326238" stroke="var(--color-dark)" strokeWidth="1" />
                    <polygon points="100,118 68,148 132,148" fill="#3a7040" stroke="var(--color-dark)" strokeWidth="1" />
                    <polygon points="100,90 76,118 124,118" fill="#3a7040" stroke="var(--color-dark)" strokeWidth="1" />
                    <polygon points="100,68 82,92 118,92" fill="#4a8050" stroke="var(--color-dark)" strokeWidth="1" />
                    {/* Leader tip */}
                    <polygon points="100,40 88,70 112,70" fill="#4a8050" stroke="var(--color-dark)" strokeWidth="1" />
                    <polygon points="100,22 92,42 108,42" fill="#5a906a" />
                    {/* Tier highlights (front edge) */}
                    <line x1="62" y1="183" x2="138" y2="183" stroke="#5a8c5a" strokeWidth="2" opacity="0.5" />
                    <line x1="48" y1="220" x2="152" y2="220" stroke="#4a7a4a" strokeWidth="2" opacity="0.5" />
                    {/* Labels */}
                    <text x="118" y="252" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Trunk</text>
                    <line x1="116" y1="250" x2="108" y2="248" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                    <text x="12" y="246" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Tier</text>
                    <line x1="30" y1="244" x2="50" y2="248" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                    <text x="106" y="56" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Leader</text>
                    <line x1="104" y1="54" x2="101" y2="40" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                </g>
            )
        },
        Willow: {
            label: 'Weeping Willow',
            silhouette: 'Umbrella Crown, Cascading',
            branching: 'Upright scaffold, drooping pendulous shoots',
            medium: 'Watercolor, Oil',
            paintersNote: 'Paint the upward-arching scaffold branches first. Then hang cascading curtains of thin downward strokes from them. The trunk is barely visible, the curtain IS the tree.',
            svgPath: (
                <g>
                    <line x1="20" y1="295" x2="180" y2="295" stroke="var(--color-secondary-accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    {/* Trunk */}
                    <path d="M95 295 Q93 260 91 230 Q95 215 99 230 Q101 255 105 295 Z" fill="#7c5c3a" stroke="var(--color-dark)" strokeWidth="1.5" />
                    {/* Main upward scaffold */}
                    <path d="M95 230 Q75 200 50 180" fill="none" stroke="#7c5c3a" strokeWidth="5" strokeLinecap="round" />
                    <path d="M97 225 Q115 195 150 178" fill="none" stroke="#7c5c3a" strokeWidth="5" strokeLinecap="round" />
                    <path d="M96 220 Q96 190 96 165" fill="none" stroke="#7c5c3a" strokeWidth="4" strokeLinecap="round" />
                    {/* Crown top dome */}
                    <ellipse cx="96" cy="155" rx="60" ry="28" fill="#4a8050" opacity="0.85" />
                    {/* Cascading curtain strands */}
                    {[20, 35, 50, 65, 80, 96, 112, 128, 145, 160, 172].map((x, i) => {
                        const startY = 155 + (i % 2 === 0 ? -8 : -12)
                        const endY = 245 + (i % 3 === 0 ? 10 : 0)
                        const cx2 = x + (i % 2 === 0 ? 5 : -5)
                        return <path key={i} d={`M${x} ${startY} Q${cx2} ${(startY + endY) / 2} ${x} ${endY}`} fill="none" stroke="#4a8050" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
                    })}
                    {/* Labels */}
                    <text x="108" y="260" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Trunk</text>
                    <line x1="106" y1="258" x2="100" y2="255" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                    <text x="0" y="210" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Cascade</text>
                    <line x1="40" y1="207" x2="30" y2="215" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                </g>
            )
        },
        Palm: {
            label: 'Palm',
            silhouette: 'Single Column Trunk, Radiating Fronds',
            branching: 'No branches, fronds radiate from a single growing point',
            medium: 'Acrylic, Gouache',
            paintersNote: 'The trunk is never straight, paint it as a gentle S-curve with horizontal ring scars. Fronds arch upward then droop at the tips. Paint each frond as a single confident stroke.',
            svgPath: (
                <g>
                    <line x1="20" y1="295" x2="180" y2="295" stroke="var(--color-secondary-accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    {/* Trunk S-curve with texture rings */}
                    <path d="M88 295 Q92 260 96 220 Q98 185 100 155 Q103 130 100 110" fill="none" stroke="#b5824a" strokeWidth="14" strokeLinecap="round" />
                    <path d="M89 295 Q93 260 97 220 Q99 185 101 155 Q104 130 101 110" fill="none" stroke="#c9954f" strokeWidth="10" strokeLinecap="round" />
                    {/* Ring scars */}
                    {[130, 150, 170, 195, 220, 248, 272].map((y, i) => (
                        <line key={i} x1={88 + i * 0.5} y1={y} x2={104 + i * 0.3} y2={y} stroke="#7c5c3a" strokeWidth="1.5" opacity="0.6" />
                    ))}
                    {/* Fronds radiating from crown */}
                    {[
                        { cx: 100, cy: 108, tx: 30, ty: 55 },
                        { cx: 100, cy: 108, tx: 55, ty: 35 },
                        { cx: 100, cy: 108, tx: 85, ty: 25 },
                        { cx: 100, cy: 108, tx: 115, ty: 25 },
                        { cx: 100, cy: 108, tx: 148, ty: 38 },
                        { cx: 100, cy: 108, tx: 168, ty: 60 },
                        { cx: 100, cy: 108, tx: 40, ty: 80 },
                        { cx: 100, cy: 108, tx: 160, ty: 85 },
                        { cx: 100, cy: 108, tx: 100, ty: 20 },
                    ].map((f, i) => (
                        <path key={i} d={`M${f.cx} ${f.cy} Q${(f.cx + f.tx) / 2 + (i % 2 === 0 ? 8 : -8)} ${(f.cy + f.ty) / 2} ${f.tx} ${f.ty}`} fill="none" stroke="#4a7a28" strokeWidth="2.5" strokeLinecap="round" />
                    ))}
                    {/* Labels */}
                    <text x="112" y="200" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Trunk</text>
                    <line x1="110" y1="198" x2="105" y2="195" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                    <text x="10" y="50" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Frond</text>
                    <line x1="34" y1="50" x2="42" y2="58" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                </g>
            )
        },
        Birch: {
            label: 'Birch',
            silhouette: 'Multi-Stem Clump, Narrow Upright Oval',
            branching: 'Alternate, wiry, slightly drooping at tips',
            medium: 'Watercolor, Oil',
            paintersNote: 'The white bark is your lightest value, protect it by painting around it. Birch crowns are transparent: paint sky through the crown, then add fine dark twigs as calligraphy over the top.',
            svgPath: (
                <g>
                    <line x1="20" y1="295" x2="180" y2="295" stroke="var(--color-secondary-accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    {/* Three trunks — white bark with dark marks */}
                    <path d="M80 295 Q78 240 76 180 Q78 140 80 100" fill="none" stroke="#e8e0d0" strokeWidth="9" strokeLinecap="round" />
                    <path d="M100 295 Q100 245 100 190 Q101 155 102 80" fill="none" stroke="#ede8e0" strokeWidth="10" strokeLinecap="round" />
                    <path d="M118 295 Q120 248 121 195 Q122 160 120 110" fill="none" stroke="#e8e0d0" strokeWidth="8" strokeLinecap="round" />
                    {/* Bark detail marks */}
                    {[120, 150, 175, 200, 225, 255, 275].map((y, i) => (
                        <line key={i} x1={76 + i * 0.3} y1={y} x2={84 + i * 0.2} y2={y + 3} stroke="#555" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
                    ))}
                    {[130, 160, 185, 210, 240].map((y, i) => (
                        <line key={`b${i}`} x1={98} y1={y} x2={106} y2={y + 3} stroke="#555" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
                    ))}
                    {/* Transparent crown — sparse foliage clusters */}
                    <ellipse cx="100" cy="120" rx="55" ry="65" fill="#5a8a3a" opacity="0.25" />
                    <ellipse cx="82" cy="140" rx="28" ry="35" fill="#5a8a3a" opacity="0.3" />
                    <ellipse cx="112" cy="130" rx="30" ry="32" fill="#5a8a3a" opacity="0.3" />
                    <ellipse cx="98" cy="95" rx="22" ry="25" fill="#6a9a4a" opacity="0.35" />
                    {/* Fine wiry branches */}
                    {[
                        { x1: 80, y1: 140, x2: 45, y2: 115 }, { x1: 80, y1: 130, x2: 55, y2: 105 },
                        { x1: 100, y1: 130, x2: 68, y2: 100 }, { x1: 102, y1: 120, x2: 130, y2: 90 },
                        { x1: 118, y1: 145, x2: 152, y2: 118 }, { x1: 119, y1: 135, x2: 145, y2: 108 },
                    ].map((b, i) => (
                        <line key={i} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2} stroke="#444" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
                    ))}
                    {/* Labels */}
                    <text x="130" y="220" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">White bark</text>
                    <line x1="128" y1="218" x2="120" y2="215" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                    <text x="10" y="100" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">Sparse</text>
                    <text x="10" y="110" fontSize="9" fill="var(--color-secondary-accent)" fontFamily="monospace">crown</text>
                    <line x1="38" y1="108" x2="55" y2="118" stroke="var(--color-secondary-accent)" strokeWidth="0.8" />
                </g>
            )
        }
    }

    // ─── Phase 02: Procedural fractal tree ───────────────────────────────
    const buildBranches = (x, y, angle, length, depth, taper) => {
        if (depth === 0 || length < 3) return []
        const rad = (angle - 90) * Math.PI / 180
        const x2 = x + Math.cos(rad) * length
        const y2 = y + Math.sin(rad) * length
        const width = Math.max(0.5, (depth / 7) * 6)
        const branches = [{ x1: x, y1: y, x2, y2, width, depth }]
        const nextLen = length * (taper / 100)
        branches.push(...buildBranches(x2, y2, angle - branchAngle, nextLen, depth - 1, taper))
        branches.push(...buildBranches(x2, y2, angle + branchAngle, nextLen, depth - 1, taper))
        return branches
    }
    const fractalBranches = buildBranches(160, 300, 0, 70, 7, taperRatio)

    // ─── Phase 02: Branch principles ─────────────────────────────────────
    const branchPrinciples = [
        { name: 'Rule of Thirds', description: 'The trunk occupies roughly the bottom third of the total tree height. The crown fills the upper two-thirds. Violating this makes trees look stunted or top-heavy.' },
        { name: 'Taper', description: 'Each branch generation is proportionally narrower than its parent, roughly 60–70% of the parent width. A branch that does not taper reads as a pipe, not living wood.' },
        { name: 'Alternating vs Opposite', description: 'Oaks and elms alternate left-right branches as they ascend. Maples and ashes branch in opposite symmetrical pairs. This is species identity in a single rule.' },
        { name: 'Terminal Bud Lift', description: 'Branch tips always curve slightly upward toward light. Even the lowest drooping branches tip up at the end. This gives trees their feeling of living energy.' },
        { name: 'Negative Space', description: 'The sky holes within a crown define it as powerfully as the foliage. A crown with no gaps reads as a cut-out shape. Paint the sky through the tree, not around it.' },
        { name: 'Gravity Droop', description: 'Lower branches sag under their own weight and the weight of foliage. Upper branches are more vertical. Paint the angular difference between lower and upper scaffold branches.' },
    ]

    // ─── Phase 03: Light direction configs ───────────────────────────────
    const lightConfigs = {
        TopLeft: { highlight: [-25, -25], label: 'Top-Left' },
        TopRight: { highlight: [25, -25], label: 'Top-Right' },
        Top: { highlight: [0, -35], label: 'Top' },
        Overhead: { highlight: [0, -15], label: 'Overhead' },
    }
    const lc = lightConfigs[lightDir]
    const hx = 100 + lc.highlight[0]
    const hy = 130 + lc.highlight[1]
    const shadowDx = -lc.highlight[0] * 0.6
    const shadowDy = 30

    // ─── Phase 03: Workflow steps ─────────────────────────────────────────
    const workflowSteps = [
        { step: '01', name: 'Sky First', description: 'Lay in the full sky before touching the tree. The tree is painted into and over the sky, not behind it. This gives atmospheric depth to the silhouette edges.' },
        { step: '02', name: 'Shadow Mass', description: 'Block the darkest foliage mass first, the underside and deep interior of the crown. This is your anchor. All lighter values must relate to this dark.' },
        { step: '03', name: 'Mid-Tone Fill', description: 'Add the mid-tone green across the bulk of the crown. Work broadly. This is the “local color” of the tree, not its light or shadow, just its own hue.' },
        { step: '04', name: 'Highlight Clusters', description: 'Apply the lightest green only on the upward-facing foliage surfaces. Keep it small, highlights should never cover more than 20% of the crown area.' },
        { step: '05', name: 'Branch Breaks', description: 'Pull branches and sky back through the crown with negative painting. This is what separates a believable tree from a green blob. Work dark over light.' },
        { step: '06', name: 'Edge Quality', description: 'Vary hard and soft edges around the silhouette, hard in light, soft in shadow. A single continuous hard edge kills the illusion of depth in the crown.' },
    ]

    // ─── Color palette ───────────────────────────────────────────────────
    const treePalette = [
        { name: 'Deep Shadow', hex: '#1a3320', mix: 'Sap Green + Ivory Black + touch of Burnt Umber' },
        { name: 'Shadow Green', hex: '#2d5c35', mix: 'Sap Green + Ultramarine Blue' },
        { name: 'Mid Green', hex: '#3d7a45', mix: 'Sap Green + Yellow Ochre' },
        { name: 'Warm Highlight', hex: '#7db864', mix: 'Sap Green + Cadmium Yellow + White' },
    ]

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Trees: Architecture of Growth" />

            <style>{`

                /* Tree SVG container */
                .tree-preview-container {
                    width: 100%;
                    max-width: 300px;
                    height: 380px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }



            `}</style>

            <header style={{ textAlign: 'left', marginBottom: 'var(--spacing-16)' }}>
                <h1 className="main-heading">Trees</h1>
                <p className="ct-responsive-header-text">
                    Trees have captivated me for as long as I can remember: their form, their structure, the way light moves through them. This interactive guide explores tree anatomy through an artist's eye, breaking down each element from foundational basics to more nuanced detail, so you can observe, understand, and paint them with greater confidence.
                </p>
                <div style={{ marginTop: 'var(--spacing-8)' }}>
                    <a href="#beginner" className="ct-button">Start the Journey &darr;</a>
                </div>
            </header>

            <hr className="project-hr" />

            {/* ─── PHASE 01 ──────────────────────────────────────────────── */}
            <section id="beginner" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 01</span>
                    <h2>Beginner: Anatomy &amp; Silhouette</h2>
                    <p>Every tree species has a characteristic silhouette determined by its branching architecture. Before mixing a single color, a painter must be able to identify and reproduce a tree's silhouette from memory. Select a species below to study its structure.</p>
                </div>

                <div className="ct-card" style={{ marginTop: 'var(--spacing-8)' }}>
                    {/* Species selector buttons */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)', justifyContent: 'center', marginBottom: 'var(--spacing-8)' }}>
                        {Object.keys(species).map(key => (
                            <button
                                key={key}
                                onClick={() => setActiveSpecies(key)}
                                className="ct-button"
                                style={{
                                    backgroundColor: activeSpecies === key ? 'var(--color-dark)' : 'var(--color-background)',
                                    color: activeSpecies === key ? 'var(--color-background)' : 'var(--color-dark)',
                                    boxShadow: activeSpecies === key ? 'none' : '6px 6px 0px 0px var(--color-dark)',
                                    transform: activeSpecies === key ? 'translate(6px, 6px)' : 'none'
                                }}
                            >
                                {species[key].label}
                            </button>
                        ))}
                    </div>

                    <div className="ct-grid cols-2" style={{ marginBottom: 0 }}>
                        {/* SVG Silhouette */}
                        <div className="tree-preview-container" style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                            <svg viewBox="0 0 200 320" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                                {species[activeSpecies].svgPath}
                            </svg>
                        </div>

                        {/* Info panel */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-5)' }}>
                            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                                <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 var(--spacing-2) 0' }}>Silhouette Type</p>
                                <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>{species[activeSpecies].silhouette}</p>
                            </div>
                            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                                <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 var(--spacing-2) 0' }}>Branching Pattern</p>
                                <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>{species[activeSpecies].branching}</p>
                            </div>
                            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                                <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-secondary-accent)', margin: '0 0 var(--spacing-2) 0' }}>Painter's Note</p>
                                <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>{species[activeSpecies].paintersNote}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="project-hr" />

            {/* ─── PHASE 02 ──────────────────────────────────────────────── */}
            <section id="intermediate" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 02</span>
                    <h2>Intermediate: Branch Logic &amp; Growth</h2>
                    <p>Branches are not random. They follow consistent mathematical relationships: angle, taper, and hierarchy that are the same across all deciduous species. Once internalized, these rules let you invent convincing trees from imagination alone. Adjust the sliders to see the rules in action.</p>
                </div>

                <div className="ct-card" style={{ marginTop: 'var(--spacing-8)' }}>
                    {/* Fractal tree SVG preview */}
                    <div style={{ width: '100%', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)', backgroundColor: 'var(--color-background)', display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-8)', overflow: 'hidden' }}>
                        <svg viewBox="0 0 320 310" style={{ width: '100%', maxWidth: '420px', height: '260px' }}>
                            {fractalBranches.map((b, i) => (
                                <line
                                    key={i}
                                    x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
                                    stroke={b.depth > 5 ? '#7c5c3a' : b.depth > 3 ? '#5a4228' : '#3d2e1a'}
                                    strokeWidth={b.width}
                                    strokeLinecap="round"
                                    style={{ transition: 'all 0.15s ease' }}
                                />
                            ))}
                        </svg>
                    </div>

                    {/* Two sliders side by side */}
                    <div className="ct-grid cols-2" style={{ marginBottom: 0, alignItems: 'start' }}>
                        <div>
                            <div className="flex-row-between">
                                <label htmlFor="angleSlider" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Branching Angle</label>
                                <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{branchAngle}°</span>
                            </div>
                            <input
                                id="angleSlider"
                                type="range"
                                className="color-range"
                                min="10"
                                max="60"
                                value={branchAngle}
                                onChange={e => setBranchAngle(parseInt(e.target.value))}
                            />
                            <p style={{ fontSize: 'var(--fontSize-0)', opacity: 0.8, margin: 0 }}>Narrow angles (10–20°) produce tall columnar forms like Lombardy poplars. Wide angles (45–60°) create the broad spreading crowns of oaks and beeches.</p>
                        </div>

                        <div>
                            <div className="flex-row-between">
                                <label htmlFor="taperSlider" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Branch Retention</label>
                                <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{taperRatio}%</span>
                            </div>
                            <input
                                id="taperSlider"
                                type="range"
                                className="color-range"
                                min="50"
                                max="85"
                                value={taperRatio}
                                onChange={e => setTaperRatio(parseInt(e.target.value))}
                            />
                            <p style={{ fontSize: 'var(--fontSize-0)', opacity: 0.8, margin: 0 }}>Each child branch retains this percentage of its parent's length. Low values produce small, bushy trees. High values produce tall, open-structured trees with long reach.</p>
                        </div>
                    </div>
                </div>

                {/* Branch principles grid */}
                <div style={{ marginTop: 'var(--spacing-16)' }}>
                    <h3>Six Rules of Branch Architecture</h3>
                    <p>Every believable painted tree obeys these principles, even when painted loosely and from memory.</p>
                    <div className="ct-grid cols-3" style={{ marginBottom: 0, marginTop: 'var(--spacing-8)' }}>
                        {branchPrinciples.map(p => (
                            <div key={p.name} className="ct-card" style={{ padding: 'var(--spacing-5)', margin: 0 }}>
                                <p style={{ margin: '0 0 var(--spacing-3) 0' }}><strong>{p.name}</strong></p>
                                <p style={{ fontSize: 'var(--fontSize-0)', margin: 0 }}>{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="project-hr" />

            {/* ─── PHASE 03 ──────────────────────────────────────────────── */}
            <section id="advanced" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 03</span>
                    <h2>Advanced: Light, Shadow &amp; Painting Method</h2>
                    <p>A tree crown is not painted leaf-by-leaf. It is painted as a collection of <strong>foliage masses</strong> each mass is a clump of leaves treated as a single unified shape, lit from one consistent direction. The painter's greatest skill is learning to see and paint these masses rather than individual leaves.</p>
                </div>

                <div className="ct-card" style={{ marginTop: 'var(--spacing-8)' }}>
                    {/* Light direction selector */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)', justifyContent: 'center', marginBottom: 'var(--spacing-8)' }}>
                        {Object.keys(lightConfigs).map(dir => (
                            <button
                                key={dir}
                                onClick={() => setLightDir(dir)}
                                className="ct-button"
                                style={{
                                    backgroundColor: lightDir === dir ? 'var(--color-dark)' : 'var(--color-background)',
                                    color: lightDir === dir ? 'var(--color-background)' : 'var(--color-dark)',
                                    boxShadow: lightDir === dir ? 'none' : '6px 6px 0px 0px var(--color-dark)',
                                    transform: lightDir === dir ? 'translate(6px, 6px)' : 'none'
                                }}
                            >
                                {lightConfigs[dir].label}
                            </button>
                        ))}
                    </div>

                    <div className="ct-grid cols-2" style={{ marginBottom: 0 }}>
                        {/* Lit tree SVG */}
                        <div className="tree-preview-container" style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                            <svg viewBox="0 0 200 320" style={{ width: '100%', height: '100%' }}>
                                {/* Ground */}
                                <line x1="20" y1="295" x2="180" y2="295" stroke="var(--color-secondary-accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                                {/* Trunk with cast shadow */}
                                <path d={`M95 295 Q93 260 91 235 Q95 218 99 235 Q101 258 105 295 Z`} fill="#5c3d1e" stroke="var(--color-dark)" strokeWidth="1.5" />
                                {/* Main scaffold branches */}
                                <line x1="93" y1="245" x2="55" y2="205" stroke="#5c3d1e" strokeWidth="6" strokeLinecap="round" />
                                <line x1="96" y1="240" x2="145" y2="200" stroke="#5c3d1e" strokeWidth="5" strokeLinecap="round" />
                                <line x1="94" y1="230" x2="94" y2="180" stroke="#5c3d1e" strokeWidth="5" strokeLinecap="round" />
                                {/* Shadow mass — darkest, interior/bottom */}
                                <ellipse cx="95" cy={140 - shadowDy * 0.2} rx="58" ry="44" fill="#1a3320" />
                                {/* Mid-tone mass */}
                                <ellipse cx={95 - shadowDx * 0.15} cy={132} rx="50" ry="38" fill="#2d5c35" />
                                {/* Highlight mass — lit side */}
                                <ellipse cx={hx} cy={hy} rx="38" ry="28" fill="#5a8a40" />
                                {/* Brightest highlight cluster */}
                                <ellipse cx={hx + lc.highlight[0] * 0.15} cy={hy + lc.highlight[1] * 0.15} rx="22" ry="16" fill="#7db864" opacity="0.85" />
                                {/* Sky holes / negative space */}
                                <ellipse cx={95 + shadowDx * 0.3} cy={150} rx="9" ry="6" fill="var(--color-background)" opacity="0.45" />
                                <ellipse cx={95 + shadowDx * 0.5} cy={135} rx="6" ry="5" fill="var(--color-background)" opacity="0.35" />
                                {/* Cast shadow on ground */}
                                <ellipse cx={100 + shadowDx} cy={296} rx="40" ry="6" fill="var(--color-dark)" opacity="0.15" />
                                {/* Light source indicator */}
                                <circle cx={100 + lc.highlight[0] * 1.2} cy={50 + lc.highlight[1] * 0.8} r="10" fill="#fbbf24" opacity="0.85" />
                                <line x1={100 + lc.highlight[0] * 1.2} y1={50 + lc.highlight[1] * 0.8} x2={hx} y2={hy} stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
                                {/* Labels */}
                                <text x="10" y="130" fontSize="8" fill="#7db864" fontFamily="monospace">Highlight</text>
                                <text x="10" y="155" fontSize="8" fill="#2d5c35" fontFamily="monospace">Mid-tone</text>
                                <text x="10" y="178" fontSize="8" fill="#4a8a4a" fontFamily="monospace">Shadow</text>
                            </svg>
                        </div>

                        {/* Explanation panel */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-5)' }}>
                            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                                <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-secondary-accent)', margin: '0 0 var(--spacing-2) 0' }}>Think in Masses</p>
                                <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>The crown is three shapes: a light mass (top-lit), a mid-tone body, and a dark shadow mass (underside). Paint these three shapes, not individual leaves. The illusion of foliage emerges automatically.</p>
                            </div>
                            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                                <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 var(--spacing-2) 0' }}>The 20% Rule</p>
                                <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>Highlights should cover no more than 20% of the crown area. The moment you overdo the light mass, the tree flattens. Keep the dark masses dominant, they create the sense of volume and interior depth.</p>
                            </div>
                            <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-secondary-accent)', borderRadius: 'var(--spacing-1)' }}>
                                <p style={{ fontSize: 'var(--fontSize-0)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 var(--spacing-2) 0' }}>Cast Shadow</p>
                                <p style={{ margin: 0, fontSize: 'var(--fontSize-0)' }}>The cast shadow on the ground anchors the tree to the earth. Without it, trees appear to float. The shadow ellipse always falls opposite the light source and is slightly cooler in temperature than the bark color.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Painting workflow */}
                <div style={{ marginTop: 'var(--spacing-16)' }}>
                    <h3>Painting Workflow</h3>
                    <p>A structured sequence prevents common mistakes. Follow these six steps in order, resist jumping ahead to details before the masses are resolved.</p>
                    <div className="ct-grid cols-3" style={{ marginBottom: 0, marginTop: 'var(--spacing-8)' }}>
                        {workflowSteps.map(s => (
                            <div key={s.step} className="ct-card" style={{ padding: 'var(--spacing-5)', margin: 0, border: '1px solid var(--color-dark)' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-3)' }}>
                                    <span style={{ fontSize: 'var(--fontSize-1)', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-accent)', lineHeight: 1 }}>{s.step}</span>
                                    <p style={{ margin: 0 }}><strong>{s.name}</strong></p>
                                </div>
                                <p style={{ fontSize: 'var(--fontSize-0)', margin: 0 }}>{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Color palette */}
                <div style={{ marginTop: 'var(--spacing-16)' }}>
                    <h3>Foliage Color Palette</h3>
                    <p>Four values cover every zone in a lit tree. Each can be mixed from a small set of standard pigments. Temperature shifts (warm highlights, cool shadows) create depth even before any texture is added.</p>
                    <div className="ct-grid cols-2" style={{ marginBottom: 0, marginTop: 'var(--spacing-8)' }}>
                        {treePalette.map(p => (
                            <div key={p.name} className="ct-card" style={{ padding: 'var(--spacing-5)', margin: 0, display: 'flex', gap: 'var(--spacing-4)', alignItems: 'flex-start' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: p.hex, borderRadius: 'var(--spacing-1)', border: '2px solid var(--color-dark)', flexShrink: 0 }} />
                                <div>
                                    <p style={{ margin: '0 0 var(--spacing-1) 0', fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>{p.name}</p>
                                    <p style={{ margin: '0 0 var(--spacing-2) 0', fontSize: 'var(--fontSize-0)', fontFamily: 'monospace', color: 'var(--color-secondary-accent)' }}>{p.hex}</p>
                                    <p style={{ margin: 0, fontSize: 'var(--fontSize-0)', opacity: 0.8 }}>{p.mix}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default TreesIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

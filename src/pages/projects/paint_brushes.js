import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const PaintBrushesIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    // States for Phase 01: Shapes
    const [activeShape, setActiveShape] = React.useState('Round'); // Round, Flat, Filbert

    // States for Phase 02: Pressure & Load
    const [brushPressure, setBrushPressure] = React.useState(5); // 1-10
    const [paintLoad, setPaintLoad] = React.useState(100); // 0-100%

    // States for Phase 03: Digital Canvas
    const [brushSize, setBrushSize] = React.useState(20);
    const [brushType, setBrushType] = React.useState('Oil');
    const canvasRef = React.useRef(null);
    const isDrawing = React.useRef(false);
    const lastPos = React.useRef({ x: 0, y: 0 });

    // Canvas drawing logic
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Setup canvas for high-DPI displays if not already set
        const rect = canvas.getBoundingClientRect();
        if (canvas.width !== rect.width * 2) {
            canvas.width = rect.width * 2;
            canvas.height = rect.height * 2;
            ctx.scale(2, 2);
            // Initial background
            ctx.fillStyle = '#f8f9fa';
            ctx.fillRect(0, 0, rect.width, rect.height);
        }

        const getPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            let clientX, clientY;

            if (e.touches && e.touches.length > 0) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }

            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        };

        const drawWatercolor = (x, y) => {
            ctx.globalAlpha = 0.05;
            ctx.fillStyle = '#3b82f6'; // Blue watercolor

            // Multiple overlapping circles for a wet edge effect
            for (let i = 0; i < 5; i++) {
                const offsetX = (Math.random() - 0.5) * brushSize * 0.5;
                const offsetY = (Math.random() - 0.5) * brushSize * 0.5;
                const radius = brushSize * 0.5 + Math.random() * brushSize * 0.5;

                ctx.beginPath();
                ctx.arc(x + offsetX, y + offsetY, radius, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const drawOil = (x, y, lastX, lastY) => {
            ctx.globalAlpha = 1.0;
            ctx.strokeStyle = '#b91c1c'; // Red oil
            ctx.lineWidth = brushSize;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();

            // Simulate bristle texture
            ctx.globalAlpha = 0.3;
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#7f1d1d';
            for (let i = 0; i < brushSize; i += 4) {
                const offset = (i - brushSize / 2);
                ctx.beginPath();
                ctx.moveTo(lastX + offset, lastY + offset);
                ctx.lineTo(x + offset, y + offset);
                ctx.stroke();
            }
        };

        const startDrawing = (e) => {
            isDrawing.current = true;
            lastPos.current = getPos(e);

            // Draw a single dot
            const { x, y } = lastPos.current;
            if (brushType === 'Watercolor') {
                drawWatercolor(x, y);
            } else {
                drawOil(x, y, x, y);
            }
        };

        const draw = (e) => {
            if (!isDrawing.current) return;
            e.preventDefault(); // Prevent scrolling on touch

            const pos = getPos(e);
            if (brushType === 'Watercolor') {
                drawWatercolor(pos.x, pos.y);
            } else {
                drawOil(pos.x, pos.y, lastPos.current.x, lastPos.current.y);
            }
            lastPos.current = pos;
        };

        const stopDrawing = () => {
            isDrawing.current = false;
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mouseout', stopDrawing);

            canvas.removeEventListener('touchstart', startDrawing);
            canvas.removeEventListener('touchmove', draw);
            canvas.removeEventListener('touchend', stopDrawing);
        };
    }, [brushSize, brushType]);

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Paint Brushes: Tools of Expression" />

            <style>{`
                .ct-pill {
                    display: inline-block;
                    padding: var(--spacing-1) var(--spacing-3);
                    border-radius: 9999px;
                    border: 1px solid var(--color-text);
                    font-size: var(--fontSize-0);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: var(--spacing-6);
                }
                .ct-button {
                    display: inline-block;
                    padding: var(--spacing-3) var(--spacing-6);
                    background-color: var(--color-primary-accent);
                    color: var(--color-light);
                    border: solid var(--color-dark) var(--spacing-1);
                    border-radius: var(--spacing-1);
                    cursor: pointer;
                    font-weight: var(--fontWeight-black);
                    font-family: var(--font-heading);
                    text-decoration: none;
                }
                .ct-button:hover {
                    background-color: var(--color-dark);
                    color: var(--color-background);
                }
                .ct-button:active {
                    transform: translate(6px, 6px);
                    box-shadow: 0px 0px 0px 0px var(--color-dark);
                }
                .ct-card {
                    margin: var(--spacing-10) 0;
                    padding: var(--spacing-8);
                    border: 1px solid var(--color-text);
                    background-color: var(--color-background);
                    box-shadow: 8px 8px 0px 0px var(--color-text);
                }
                .flex-row-between {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .flex-col-center {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .mono-text {
                    font-family: var(--font-monospace);
                }
                .ct-grid {
                    display: grid;
                    gap: var(--spacing-8);
                }
                @media (min-width: 42rem) {
                    .ct-grid.cols-2 {
                        grid-.cttemplate-columns: 1fr 1fr;
                    }
                    .ct-grid.cols-3 {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }
                
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

                /* Phase 2 Slider Styles */
                .color-range {
                    -webkit-appearance: none;
                    width: 100%;
                    background: transparent;
                    margin: 1.5rem 0;
                }
                .color-range:focus {
                    outline: none;
                }
                .color-range::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 24px;
                    width: 16px;
                    border-radius: var(--spacing-1);
                    background: var(--color-background);
                    cursor: pointer;
                    margin-top: -10px;
                    border: 2px solid var(--color-dark);
                    box-shadow: 2px 2px 0px 0px var(--color-dark);
                    transition: transform 0.1s, box-shadow 0.1s;
                }
                .color-range::-moz-range-thumb {
                    height: 24px;
                    width: 16px;
                    border-radius: var(--spacing-1);
                    background: var(--color-background);
                    cursor: pointer;
                    border: 2px solid var(--color-dark);
                    box-shadow: 2px 2px 0px 0px var(--color-dark);
                    transition: transform 0.1s, box-shadow 0.1s;
                }
                .color-range:active::-webkit-slider-thumb {
                    background: var(--color-dark);
                    transform: translate(2px, 2px);
                    box-shadow: 0px 0px 0px 0px var(--color-dark);
                }
                .color-range:active::-moz-range-thumb {
                    background: var(--color-dark);
                    transform: translate(2px, 2px);
                    box-shadow: 0px 0px 0px 0px var(--color-dark);
                }
                .color-range::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    background: var(--color-dark);
                    border: 1px solid var(--color-dark);
                    border-radius: 4px;
                }
                .color-range::-moz-range-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    background: var(--color-dark);
                    border: 1px solid var(--color-dark);
                    border-radius: 4px;
                }
                @media (max-width: 767px) {
                    .main-heading {
                        font-size: var(--fontSize-6);
                        line-height: var(--lineHeight-tight);
                    }
                    .ct-responsive-header-text {
                        font-size: var(--fontSize-2) !important;
                    }
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

            <hr style={{ marginBottom: 'var(--spacing-12)' }} />

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

                    <div className="ct-grid cols-2" style={{ alignItems: 'center' }}>
                        <div className="brush-preview-container" style={{ backgroundColor: 'var(--color-light)', border: '1px solid var(--color-secondary-accent)' }}>
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

                        <div style={{ textAlign: 'left', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-light)', borderRadius: 'var(--spacing-1)', border: '1px solid var(--color-secondary-accent)' }}>
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

            <hr style={{ marginBottom: 'var(--spacing-12)' }} />

            <section id="intermediate" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 02</span>
                    <h2>Intermediate: Pressure & Opacity</h2>
                    <p>Unlike a digital pen tool, a physical brush is highly responsive to the artist's kinetic energy. The amount of <strong>Pressure</strong> applied against the canvas alters the stroke's width, while the <strong>Paint Load</strong> (how wet the brush is) dictates the opacity and texture.</p>
                </div>

                <div className="ct-card text-center" style={{ marginTop: 'var(--spacing-8)' }}>

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
                                stroke="#b91c1c"
                                strokeWidth={brushPressure * 4}
                                strokeLinecap="round"
                                filter="url(#dryBrushNoise)"
                                style={{ transition: 'stroke-width 0.2s ease, filter 0.2s ease' }}
                            />
                        </svg>
                    </div>

                    <div className="ct-grid cols-2" style={{ marginTop: 'var(--spacing-8)', textAlign: 'left', gap: 'var(--spacing-12)' }}>
                        <div>
                            <div className="flex-row-between">
                                <label htmlFor="pressureSlider" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Hand Pressure</label>
                                <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>
                                    {brushPressure * 10}%
                                </span>
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
                            <p style={{ fontSize: 'var(--fontSize-0)', opacity: 0.8, marginTop: 'var(--spacing-2)' }}>Increased downward pressure forces the bristles to splay outward, yielding a vastly thicker stroke. Light pressure creates delicate, hair-thin lines.</p>
                        </div>

                        <div>
                            <div className="flex-row-between">
                                <label htmlFor="loadSlider" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Paint Load (Medium)</label>
                                <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>
                                    {paintLoad}%
                                </span>
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
                            <p style={{ fontSize: 'var(--fontSize-0)', opacity: 0.8, marginTop: 'var(--spacing-2)' }}>A fully loaded wet brush creates an opaque, contiguous line (Impasto). A brush with very little paint catches only the high points of the canvas texture, creating a scratchy, broken effect known as "Dry Brush."</p>
                        </div>
                    </div>

                </div>
            </section>

            <hr style={{ marginBottom: 'var(--spacing-12)' }} />

            <section id="advanced" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 03</span>
                    <h2>Advanced: The Digital Canvas</h2>
                    <p>When physical media moves to the screen, software engineers must write complex mathematical algorithms to simulate real-world physics. A "brush" in Photoshop or Procreate is essentially a repeating graphical stamp applied along an interpolated vector path.</p>
                </div>

                <div className="ct-card text-center" style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-background)', border: 'none', marginTop: 'var(--spacing-8)' }}>
                    <div className="flex-col-center">

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-4)', justifyContent: 'center', margin: 'var(--spacing-4) 0 var(--spacing-8) 0' }}>
                            <button
                                onClick={() => setBrushType('Oil')}
                                className="ct-button"
                                style={{
                                    backgroundColor: brushType === 'Oil' ? 'var(--color-light)' : 'transparent',
                                    color: brushType === 'Oil' ? 'var(--color-dark)' : 'var(--color-light)',
                                    boxShadow: brushType === 'Oil' ? 'none' : '6px 6px 0px 0px var(--color-light)',
                                    transform: brushType === 'Oil' ? 'translate(6px, 6px)' : 'none',
                                    border: '1px solid var(--color-light)'
                                }}
                            >Oil Engine</button>
                            <button
                                onClick={() => setBrushType('Watercolor')}
                                className="ct-button"
                                style={{
                                    backgroundColor: brushType === 'Watercolor' ? 'var(--color-light)' : 'transparent',
                                    color: brushType === 'Watercolor' ? 'var(--color-dark)' : 'var(--color-light)',
                                    boxShadow: brushType === 'Watercolor' ? 'none' : '6px 6px 0px 0px var(--color-light)',
                                    transform: brushType === 'Watercolor' ? 'translate(6px, 6px)' : 'none',
                                    border: '1px solid var(--color-light)'
                                }}
                            >Watercolor Engine</button>
                            <button
                                onClick={() => {
                                    const canvas = canvasRef.current;
                                    if (canvas) {
                                        const ctx = canvas.getContext('2d');
                                        ctx.fillStyle = '#f8f9fa';
                                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                                    }
                                }}
                                className="ct-button"
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'var(--color-light)',
                                    boxShadow: '6px 6px 0px 0px var(--color-light)',
                                    transform: 'none',
                                    border: '1px solid var(--color-light)',
                                }}
                            >Clear Canvas</button>
                        </div>

                        <div style={{ width: '100%', height: '400px', backgroundColor: 'var(--color-light)', borderRadius: 'var(--spacing-2)', cursor: 'crosshair', touchAction: 'none' }}>
                            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', borderRadius: 'var(--spacing-2)' }}></canvas>
                        </div>

                        <div style={{ width: '100%', maxWidth: '30rem', marginTop: 'var(--spacing-8)', textAlign: 'left' }}>
                            <div className="flex-row-between" style={{ color: 'var(--color-background)' }}>
                                <label htmlFor="sizeSlider" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Brush Size (Pixels)</label>
                                <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)' }}>{brushSize}px</span>
                            </div>
                            <input
                                id="sizeSlider" type="range" className="color-range" min="5" max="100" value={brushSize}
                                onChange={e => setBrushSize(parseInt(e.target.value))}
                                style={{ width: '100%', cursor: 'pointer', margin: 'var(--spacing-4) 0' }}
                            />
                            <p style={{ fontSize: 'var(--fontSize-0)', opacity: 0.8, marginTop: 'var(--spacing-2)' }}>
                                {brushType === 'Oil' && "The Oil Engine uses a thick, opaque primary line with secondary semi-transparent parallel lines running alongside it to simulate stiff hog-hair bristles dragging through heavy paint."}
                                {brushType === 'Watercolor' && "The Watercolor Engine relies on extreme translucency and organic scatter algorithms. It rapidly clusters semi-transparent circles of varying radii across a wide diffuse area to simulate pigment blooming in water."}
                            </p>
                        </div>

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

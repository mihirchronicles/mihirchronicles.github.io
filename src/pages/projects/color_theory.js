import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ColorTheoryIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    // States for intermediate section
    const [h, setH] = React.useState(180)
    const [s, setS] = React.useState(50)
    const [v, setV] = React.useState(80)

    const [hexInput, setHexInput] = React.useState("#007F7F")

    const colorWheelRef = React.useRef(null)
    const rgbChartRef = React.useRef(null)
    const chartInstance = React.useRef(null)

    // Advanced section state
    const [isIllusionActive, setIsIllusionActive] = React.useState(true)

    // Helper
    const hsvToRgb = (h, s, v) => {
        s = s / 100;
        v = v / 100;
        let c = v * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = v - c;
        let r = 0, g = 0, b = 0;

        if (0 <= h && h < 60) { r = c; g = x; b = 0; }
        else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
        else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
        else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
        else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
        else if (300 <= h && h <= 360) { r = c; g = 0; b = x; }

        return [
            Math.round((r + m) * 255),
            Math.round((g + m) * 255),
            Math.round((b + m) * 255)
        ];
    }

    const rgbToHsv = (r, g, b) => {
        r /= 255; g /= 255; b /= 255;
        let cmax = Math.max(r, Math.max(g, b));
        let cmin = Math.min(r, Math.min(g, b));
        let diff = cmax - cmin;
        let h = -1, s = -1;

        if (cmax === cmin) h = 0;
        else if (cmax === r) h = (60 * ((g - b) / diff) + 360) % 360;
        else if (cmax === g) h = (60 * ((b - r) / diff) + 120) % 360;
        else if (cmax === b) h = (60 * ((r - g) / diff) + 240) % 360;

        if (cmax === 0) s = 0;
        else s = (diff / cmax) * 100;

        let v = cmax * 100;
        return [Math.round(h), Math.round(s), Math.round(v)];
    }

    const handleHexChange = (e) => {
        const val = e.target.value;
        setHexInput(val);

        // Remove hash for regex check
        const cleanHex = val.replace("#", "");
        if (/^[0-9A-F]{6}$/i.test(cleanHex)) {
            // Valid complete hex, convert back to HSV
            const r = parseInt(cleanHex.substring(0, 2), 16);
            const g = parseInt(cleanHex.substring(2, 4), 16);
            const b = parseInt(cleanHex.substring(4, 6), 16);

            const [newH, newS, newV] = rgbToHsv(r, g, b);
            setH(newH);
            setS(newS);
            setV(newV);
        }
    }

    const rgb = React.useMemo(() => hsvToRgb(h, s, v), [h, s, v])
    const rgbString = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    const hex = "#" + ((1 << 24) | (rgb[0] << 16) | (rgb[1] << 8) | rgb[2]).toString(16).slice(1).toUpperCase()

    // Sync input when HSV sliders move
    React.useEffect(() => {
        setHexInput(hex);
    }, [hex])

    React.useEffect(() => {
        // Draw color wheel
        if (colorWheelRef.current) {
            const canvas = colorWheelRef.current;
            const ctx = canvas.getContext('2d');
            const radius = canvas.width / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height); // clear for good measure

            for (let angle = 0; angle < 360; angle++) {
                ctx.beginPath();
                ctx.moveTo(radius, radius);
                ctx.arc(radius, radius, radius, (angle - 90) * Math.PI / 180, (angle - 88) * Math.PI / 180);
                ctx.closePath();
                ctx.fillStyle = `hsl(${angle}, 100%, 50%)`;
                ctx.fill();
            }

            ctx.beginPath();
            ctx.arc(radius, radius, radius * 0.3, 0, 2 * Math.PI);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
        }
    }, [])

    // Setup Chart and sync theme changes
    React.useEffect(() => {
        let chartCheckInterval;

        const initChart = () => {
            if (window.Chart && rgbChartRef.current && !chartInstance.current) {
                const chartCtx = rgbChartRef.current.getContext('2d');

                const textColor = getComputedStyle(document.body).getPropertyValue('--color-dark').trim() || '#0E1013';
                const gridColor = getComputedStyle(document.body).getPropertyValue('--color-secondary-accent').trim() || '#41434C';

                chartInstance.current = new window.Chart(chartCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Red', 'Green', 'Blue'],
                        datasets: [{
                            label: 'Intensity (0-255)',
                            data: [0, 0, 0],
                            backgroundColor: ['#ef4444', '#22c55e', '#3b82f6'],
                            borderWidth: 0,
                            borderRadius: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 255,
                                grid: { color: gridColor, drawBorder: false },
                                ticks: { color: textColor }
                            },
                            x: {
                                grid: { display: false },
                                ticks: { color: textColor }
                            }
                        },
                        plugins: {
                            legend: { display: false }
                        }
                    }
                });
            }
        };

        const updateChartTheme = () => {
            if (chartInstance.current) {
                const textColor = getComputedStyle(document.body).getPropertyValue('--color-dark').trim();
                const gridColor = getComputedStyle(document.body).getPropertyValue('--color-secondary-accent').trim();

                chartInstance.current.options.scales.x.ticks.color = textColor;
                chartInstance.current.options.scales.y.ticks.color = textColor;
                chartInstance.current.options.scales.y.grid.color = gridColor;
                chartInstance.current.update();
            }
        };

        chartCheckInterval = setInterval(initChart, 100);

        // Observer to watch for body class changes (dark mode toggle)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    // Small delay to let CSS variables apply
                    setTimeout(updateChartTheme, 50);
                }
            });
        });

        if (typeof document !== 'undefined') {
            observer.observe(document.body, { attributes: true });
        }

        return () => {
            clearInterval(chartCheckInterval);
            observer.disconnect();
            if (chartInstance.current) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }
        }
    }, [])

    React.useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.data.datasets[0].data = rgb;
            chartInstance.current.update();
        }
    }, [rgb])

    return (
        <Layout location={location} title={siteTitle}>
            <style>{`
                .color-theory-container {
                    /* Custom styles using site variables */
                }
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
                .color-track-hue {
                    background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
                    height: 12px;
                    border-radius: var(--spacing-1);
                    margin-top: var(--spacing-2);
                    margin-bottom: 2rem;
                    border: 2px solid var(--color-dark);
                }
                .color-track-sat {
                    background: linear-gradient(to right, #888, #0ff);
                    height: 12px;
                    border-radius: var(--spacing-1);
                    margin-top: var(--spacing-2);
                    margin-bottom: 2rem;
                    border: 2px solid var(--color-dark);
                }
                .color-track-val {
                    background: linear-gradient(to right, #000, #fff);
                    height: 12px;
                    border-radius: var(--spacing-1);
                    margin-top: var(--spacing-2);
                    margin-bottom: 2rem;
                    border: 2px solid var(--color-dark);
                }
                .ct-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-8);
                    margin-bottom: var(--spacing-16);
                }
                @media (min-width: 768px) {
                    .ct-grid.cols-2 {
                        grid-template-columns: 1fr 1fr;
                        align-items: center;
                    }
                    .ct-grid.cols-3 {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }
                @media (max-width: 767px) {
                    .ct-grid {
                        gap: var(--spacing-10);
                    }
                }
                .ct-card {
                    padding: var(--spacing-6);
                    border: 1px solid var(--color-secondary-accent);
                    border-radius: var(--spacing-2);
                    background: var(--color-background);
                }
                .ct-preview-box {
                    width: 100%;
                    height: 15rem;
                    border-radius: var(--spacing-2);
                    border: 1px solid var(--color-secondary-accent);
                }
                .ct-illusion-row {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 20rem;
                    border-radius: var(--spacing-2);
                    overflow: hidden;
                    border: 1px solid var(--color-secondary-accent);
                }
                @media (min-width: 768px) {
                    .ct-illusion-row {
                        flex-direction: row;
                    }
                }
                .ct-illusion-col {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.7s ease-in-out;
                }
                .ct-illusion-center {
                    width: 6rem;
                    height: 6rem;
                    background-color: #8b7d6b;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    transition: transform 0.3s;
                }
                .ct-illusion-center:hover {
                    transform: scale(1.1);
                }
                .ct-button {
                    display: inline-block;
                    padding: var(--spacing-3) var(--spacing-6);
                    background-color: var(--color-dark);
                    color: var(--color-background);
                    border: none;
                    border-radius: var(--spacing-1);
                    cursor: pointer;
                    font-weight: var(--fontWeight-bold);
                    font-family: var(--font-heading);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .ct-button:hover {
                    background-color: var(--color-primary-accent);
                    color: var(--color-light);
                }
                .ct-pill {
                    display: inline-block;
                    padding: 2px 8px;
                    border-radius: 12px;
                    font-size: var(--fontSize-0);
                    font-weight: var(--fontWeight-bold);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    background-color: var(--color-secondary-accent);
                    color: var(--color-background);
                    margin-bottom: var(--spacing-2);
                }
                .chart-container-inner {
                    position: relative; 
                    width: 100%; 
                    min-height: 250px;
                    max-width: 100%;
                }
                .chart-container-inner canvas {
                    max-width: 100%;
                }
                .flex-row-between {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .mono-text {
                    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                }
                .text-center {
                    text-align: center;
                }
                .flex-col-center {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .hex-input {
                    background: var(--color-background);
                    border: 2px solid var(--color-dark);
                    color: var(--color-dark);
                    font-size: var(--fontSize-3);
                    font-weight: var(--fontWeight-bold);
                    font-family: var(--font-heading);
                    text-align: center;
                    padding: var(--spacing-2) var(--spacing-4);
                    border-radius: var(--spacing-1);
                    width: 9rem;
                    outline: none;
                    transition: all 0.3s ease;
                    box-shadow: 4px 4px 0px 0px var(--color-dark);
                }
                .hex-input:focus {
                    background: var(--color-dark);
                    color: var(--color-background);
                    border-color: var(--color-dark);
                    transform: translate(-2px, -2px);
                    box-shadow: 6px 6px 0px 0px var(--color-secondary-accent);
                }
                .hex-input::selection {
                    background: var(--color-primary-accent);
                    color: var(--color-light);
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
                <h1 className="main-heading">Interaction Of Color</h1>
                <p className="ct-responsive-header-text" style={{ fontSize: 'var(--fontSize-3)', color: 'var(--color-secondary-accent)' }}>
                    A journey from the fundamental physics of light to the psychological illusions of human perception. Inspired by the teachings of Josef Albers, explore how colors behave, interact, and deceive.
                </p>
                <div style={{ marginTop: 'var(--spacing-8)' }}>
                    <a href="#beginner" className="ct-button">Start the Journey &darr;</a>
                </div>
            </header>

            <hr style={{ marginBottom: 'var(--spacing-12)' }} />

            <section id="beginner" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 01</span>
                    <h2>Beginner: The Foundations</h2>
                    <p>Before we can manipulate color, we must organize it. The color wheel is the most basic tool for understanding how human vision categorizes the spectrum of light. This section introduces the core vocabulary needed to communicate visual ideas.</p>
                </div>

                <div className="ct-grid cols-2">
                    <div className="ct-card flex-col-center">
                        <canvas ref={colorWheelRef} width="300" height="300" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }}></canvas>
                        <p style={{ marginTop: 'var(--spacing-6)', fontSize: 'var(--fontSize-0)', fontWeight: 'bold' }}>Continuous HSL Spectrum</p>
                    </div>
                    <div>
                        <h3 style={{ marginTop: 0 }}>Anatomy of the Wheel</h3>
                        <p>The standard color wheel maps the visible spectrum into a circle. By arranging colors this way, we can immediately see relationships and categories.</p>

                        <ul style={{ listStyleType: 'none', marginLeft: 0 }}>
                            <li style={{ marginBottom: 'var(--spacing-4)' }}>
                                <strong style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444', marginRight: '8px' }}></span>
                                    Primary Colors
                                </strong>
                                <p style={{ fontSize: 'var(--fontSize-0)', marginTop: '4px' }}>Red, Yellow, and Blue. In traditional art theory, these are the base pigments that cannot be created by mixing other colors.</p>
                            </li>
                            <li style={{ marginBottom: 'var(--spacing-4)' }}>
                                <strong style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e', marginRight: '8px' }}></span>
                                    Secondary Colors
                                </strong>
                                <p style={{ fontSize: 'var(--fontSize-0)', marginTop: '4px' }}>Green, Orange, and Purple. Formed by mixing equal parts of two primary colors.</p>
                            </li>
                            <li style={{ marginBottom: 'var(--spacing-4)' }}>
                                <strong style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', background: 'linear-gradient(to right, #ef4444, #3b82f6)', marginRight: '8px' }}></span>
                                    Temperature
                                </strong>
                                <p style={{ fontSize: 'var(--fontSize-0)', marginTop: '4px' }}>The wheel can be split in half: Warm colors (Reds, Oranges, Yellows) advance towards the viewer, while Cool colors (Blues, Greens) recede into the background.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr style={{ marginBottom: 'var(--spacing-12)' }} />

            <section id="intermediate" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 02</span>
                    <h2>Intermediate: Dimensions of Color</h2>
                    <p>Color is three-dimensional. While the color wheel shows us 'Hue', it misses 'Saturation' and 'Value'. By adjusting these three parameters (HSV), we can create millions of distinct colors. Use the laboratory below to dissect exactly how a digital color is built.</p>
                </div>

                <div className="ct-card">
                    <div className="ct-grid cols-3" style={{ marginBottom: 0 }}>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ marginBottom: 'var(--spacing-6)' }}>
                                <div className="flex-row-between">
                                    <label htmlFor="hueInput" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Hue (Color Family)</label>
                                    <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{h}&deg;</span>
                                </div>
                                <input id="hueInput" type="range" className="color-range" min="0" max="360" value={h} onChange={e => setH(parseInt(e.target.value))} />
                                <div className="color-track-hue"></div>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-6)' }}>
                                <div className="flex-row-between">
                                    <label htmlFor="satInput" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Saturation (Intensity)</label>
                                    <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{s}%</span>
                                </div>
                                <input id="satInput" type="range" className="color-range" min="0" max="100" value={s} onChange={e => setS(parseInt(e.target.value))} />
                                <div className="color-track-sat"></div>
                            </div>

                            <div>
                                <div className="flex-row-between">
                                    <label htmlFor="valInput" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Value (Lightness)</label>
                                    <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{v}%</span>
                                </div>
                                <input id="valInput" type="range" className="color-range" min="0" max="100" value={v} onChange={e => setV(parseInt(e.target.value))} />
                                <div className="color-track-val"></div>
                            </div>
                        </div>

                        <div className="flex-col-center" style={{ marginTop: 'var(--spacing-4)' }}>
                            <div className="ct-preview-box" style={{ backgroundColor: rgbString }}></div>
                            <div style={{ marginTop: 'var(--spacing-6)' }}>
                                <label htmlFor="hexInput" className="sr-only" aria-label="Hex Color Key" style={{ display: 'none' }}>Hex Value</label>
                                <input id="hexInput" type="text" className="mono-text hex-input" value={hexInput} onChange={handleHexChange} maxLength="7" />
                            </div>
                        </div>

                        <div className="flex-col-center" style={{ width: '100%', marginTop: 'var(--spacing-4)', overflow: 'hidden' }}>
                            <h4 style={{ textTransform: 'uppercase', fontSize: 'var(--fontSize-0)', marginBottom: 'var(--spacing-4)', marginTop: 0 }}>RGB Data Output</h4>
                            <div className="chart-container-inner">
                                <canvas ref={rgbChartRef}></canvas>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <hr style={{ marginBottom: 'var(--spacing-12)' }} />

            <section id="advanced" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 03</span>
                    <h2>Advanced: The Relativity of Color</h2>
                    <p>Josef Albers famously stated: <em>"In visual perception a color is almost never seen as it really is—as it physically is. This fact makes color the most relative medium in art."</em> This section demonstrates Simultaneous Contrast, where a single color appears as two completely different colors based on its surroundings.</p>
                </div>

                <div className="ct-card text-center" style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-background)', border: 'none' }}>
                    <div style={{ marginBottom: 'var(--spacing-10)' }}>
                        <h3 style={{ color: 'var(--color-background)', marginTop: 0 }}>The Albers Illusion</h3>
                        <p style={{ color: 'var(--color-background)', maxWidth: '40rem', margin: '0 auto' }}>Look at the two small center squares. To the human eye, the left square appears to be a light, warm brown, while the right square appears to be a darker, cooler gray. In reality, they are exactly the same physical color.</p>
                    </div>

                    <div className="ct-illusion-row">
                        <div className="ct-illusion-col" style={{ backgroundColor: isIllusionActive ? '#1e3a8a' : 'var(--color-light)' }}>
                            <div className="ct-illusion-center"></div>
                        </div>

                        <div className="ct-illusion-col" style={{ backgroundColor: isIllusionActive ? '#fef08a' : 'var(--color-dark-inverted)' }}>
                            <div className="ct-illusion-center"></div>
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-10)' }}>
                        <button onClick={() => setIsIllusionActive(!isIllusionActive)} className="ct-button" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-dark)' }}>
                            {isIllusionActive ? 'Remove Backgrounds to Reveal Truth' : 'Restore Background Context'}
                        </button>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default ColorTheoryIndex

export const Head = () => (
    <>
        <Seo title="Interaction of Color: A Digital Exploration" />
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </>
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

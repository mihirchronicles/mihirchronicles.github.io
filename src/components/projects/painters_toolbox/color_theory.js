import * as React from "react"

const ColorTheoryIndex = ({ location }) => {

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
    const [illusionH, setIllusionH] = React.useState(34)

    // Models section state
    const [colorModel, setColorModel] = React.useState('RGB')
    const [modelOverlap, setModelOverlap] = React.useState(60)

    // Gamut Masking state
    const [activeGamut, setActiveGamut] = React.useState('atmospheric')

    const gamutShapes = {
        atmospheric: "150,50 50,220 250,220", // Triangle focused on warm bottom
        moody: "250,150 150,50 100,100",      // Thin slice near cool top right
        primary: "150,50 63,200 236,200",     // Standard triadic
        cinematic: "100,80 200,80 250,220 50,220" // Broad warm base, narrow cool top (Teal/Orange)
    }

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
        const drawWheel = () => {
            if (colorWheelRef.current) {
                const canvas = colorWheelRef.current;
                const ctx = canvas.getContext('2d');
                const radius = canvas.width / 2;

                const isBrowser = typeof document !== 'undefined';
                const textColor = isBrowser ? getComputedStyle(document.body).getPropertyValue('--color-dark').trim() || '#0E1013' : '#0E1013';
                const bgColor = isBrowser ? getComputedStyle(document.body).getPropertyValue('--color-background').trim() || '#efe8d8' : '#efe8d8';

                ctx.clearRect(0, 0, canvas.width, canvas.height); // clear for good measure

                const segments = 12;
                const angleStep = 360 / segments;

                for (let i = 0; i < segments; i++) {
                    const angle = i * angleStep;
                    const startAngle = (angle - 90) * Math.PI / 180;
                    const endAngle = (angle + angleStep - 90) * Math.PI / 180;

                    ctx.beginPath();
                    ctx.moveTo(radius, radius);
                    ctx.arc(radius, radius, radius, startAngle, endAngle);
                    ctx.closePath();
                    ctx.fillStyle = `hsl(${angle + angleStep / 2}, 100%, 50%)`;
                    ctx.fill();

                    // Bold segment borders
                    ctx.strokeStyle = textColor;
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }

                // Retro inner cutout
                ctx.beginPath();
                ctx.arc(radius, radius, radius * 0.3, 0, 2 * Math.PI);
                ctx.fillStyle = bgColor;
                ctx.fill();
                ctx.strokeStyle = textColor;
                ctx.lineWidth = 6;
                ctx.stroke();
            }
        };

        drawWheel();

        // Re-draw when theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setTimeout(drawWheel, 50);
                }
            });
        });

        if (typeof document !== 'undefined') {
            observer.observe(document.body, { attributes: true });
        }

        return () => {
            observer.disconnect();
        }
    }, [])

    // Setup Chart and sync theme changes
    React.useEffect(() => {
        let chartCheckInterval;

        if (typeof window !== 'undefined' && !document.getElementById('chartjs-script')) {
            const script = document.createElement('script');
            script.id = 'chartjs-script';
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.async = true;
            document.head.appendChild(script);
        }

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
        <>
            <style>{`


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
                .illusion-slider::-webkit-slider-thumb {
                    border-color: var(--color-background);
                    box-shadow: 2px 2px 0px 0px var(--color-background);
                    background: var(--color-dark);
                }
                .illusion-slider::-moz-range-thumb {
                    border-color: var(--color-background);
                    box-shadow: 2px 2px 0px 0px var(--color-background);
                    background: var(--color-dark);
                }
                .illusion-slider:active::-webkit-slider-thumb {
                    background: var(--color-background);
                    box-shadow: 0px 0px 0px 0px var(--color-background);
                }
                .illusion-slider:active::-moz-range-thumb {
                    background: var(--color-background);
                    box-shadow: 0px 0px 0px 0px var(--color-background);
                }
                .illusion-slider::-webkit-slider-runnable-track {
                    background: var(--color-background);
                    border-color: var(--color-background);
                }
                .illusion-slider::-moz-range-track {
                    background: var(--color-background);
                    border-color: var(--color-background);
                }
                .color-track-hue.illusion-track {
                    border-color: var(--color-background);
                }
                .tooltip-container {
                    position: relative;
                    display: inline-block;
                    margin-left: var(--spacing-2);
                    outline: none;
                }
                .tooltip-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    background-color: var(--color-secondary-accent);
                    color: var(--color-background);
                    font-size: 0.65rem;
                    font-weight: bold;
                    cursor: pointer;
                    font-style: normal;
                    border: none;
                    padding: 0;
                }
                .tooltip-content {
                    visibility: hidden;
                    opacity: 0;
                    position: absolute;
                    bottom: 150%;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: var(--color-dark);
                    color: var(--color-background);
                    text-align: left;
                    padding: var(--spacing-3);
                    border-radius: var(--spacing-1);
                    width: 18rem;
                    z-index: 10;
                    transition: opacity 0.2s, visibility 0.2s;
                    font-size: var(--fontSize-0);
                    font-weight: normal;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    pointer-events: none;
                }
                .tooltip-content::after {
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: var(--color-dark) transparent transparent transparent;
                }
                .tooltip-container:focus-within .tooltip-content,
                .tooltip-container:hover .tooltip-content {
                    visibility: visible;
                    opacity: 1;
                }
                @media (max-width: 767px) {
                    .tooltip-content {
                        position: fixed;
                        bottom: 1rem;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 90%;
                        max-width: none;
                        z-index: 999;
                    }
                    .tooltip-content::after {
                        display: none;
                    }
                }
                .gamut-container {
                    position: relative;
                    width: 300px;
                    height: 300px;
                    margin: 0 auto;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 4px solid var(--color-dark);
                }
                .gamut-wheel {
                    background: conic-gradient(
                        from 90deg,
                        hsl(15, 100%, 50%) 0deg 30deg,
                        hsl(45, 100%, 50%) 30deg 60deg,
                        hsl(75, 100%, 50%) 60deg 90deg,
                        hsl(105, 100%, 50%) 90deg 120deg,
                        hsl(135, 100%, 50%) 120deg 150deg,
                        hsl(165, 100%, 50%) 150deg 180deg,
                        hsl(195, 100%, 50%) 180deg 210deg,
                        hsl(225, 100%, 50%) 210deg 240deg,
                        hsl(255, 100%, 50%) 240deg 270deg,
                        hsl(285, 100%, 50%) 270deg 300deg,
                        hsl(315, 100%, 50%) 300deg 330deg,
                        hsl(345, 100%, 50%) 330deg 360deg
                    );
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
                .gamut-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
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
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    transition: transform 0.3s;
                }
                .ct-illusion-center:hover {
                    transform: scale(1.1);
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

                .hex-input {
                    background: var(--color-background);
                    border: .25rem solid var(--color-dark);
                    color: var(--color-dark);
                    font-size: var(--fontSize-3);
                    font-weight: var(--fontWeight-bold);
                    font-family: var(--font-heading);
                    text-align: center;
                    padding: var(--spacing-2) var(--spacing-4);
                    border-radius: var(--spacing-1);
                    width: 10rem;
                    outline: none;
                    transition: all 0.3s ease;
                }
                .hex-input:focus {
                    background: var(--color-dark);
                    color: var(--color-background);
                    border-color: var(--color-dark);
                }
                .hex-input::selection {
                    background: var(--color-primary-accent);
                    color: var(--color-light);
                }

            `}</style>

            <header style={{ textAlign: 'left', marginBottom: 'var(--spacing-16)' }}>
                <p className="ct-responsive-header-text">
                    A journey from the fundamental physics of light to the psychological illusions of human perception. Inspired by the teachings of Josef Albers, explore how colors behave, interact, and fool our eyes.
                </p>
                <div style={{ marginTop: 'var(--spacing-8)' }}>
                    <a href="#beginner" className="ct-button">Start the Journey &darr;</a>
                </div>
            </header>

            <hr className="project-hr" />

            <section id="beginner" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 01</span>
                    <h2>Beginner: Anatomy of the Color Wheel</h2>
                    <p>Before we can manipulate color, we must organize it. The color wheel is the most basic tool for understanding how human vision categorizes the spectrum of light. This section introduces the core vocabulary needed to communicate visual ideas.</p>
                </div>

                <div className="ct-grid cols-2">
                    <div className="ct-card flex-col-center">
                        <canvas ref={colorWheelRef} width="300" height="300" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%', border: '4px solid var(--color-dark)' }}></canvas>
                        <p style={{ marginTop: 'var(--spacing-6)', fontSize: 'var(--fontSize-0)', fontWeight: 'bold' }}>12-Step Retro HSL Wheel</p>
                    </div>
                    <div>
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

            <hr className="project-hr" />

            <section id="intermediate" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 02</span>
                    <h2>Intermediate: Dimensions of Color</h2>
                    <p>Color is three-dimensional. While the color wheel shows us 'Hue', it misses 'Saturation' and 'Value'. By adjusting these three parameters (HSV), we can create millions of distinct colors. Use the laboratory below to dissect exactly how a digital color is built.</p>
                    <div className="ct-card">
                        <div className="ct-grid cols-3" style={{ marginBottom: 0 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ marginBottom: 'var(--spacing-6)' }}>
                                    <div className="flex-row-between">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <label htmlFor="hueInput" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Hue (Color Family)</label>
                                            <span className="tooltip-container">
                                                <button type="button" className="tooltip-icon" aria-label="More info">?</button>
                                                <span className="tooltip-content">
                                                    <strong>Definition:</strong>The spectral wavelength composition identifying the color family (e.g., Red, Blue-Green).<br /><br />
                                                    <strong>Role:</strong> Establishes the basic color identity and primary emotional valence.
                                                </span>
                                            </span>
                                        </div>
                                        <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{h}&deg;</span>
                                    </div>
                                    <input id="hueInput" type="range" className="color-range" min="0" max="360" value={h} onChange={e => setH(parseInt(e.target.value))} />
                                    <div className="color-track-hue"></div>
                                </div>

                                <div style={{ marginBottom: 'var(--spacing-6)' }}>
                                    <div className="flex-row-between">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <label htmlFor="satInput" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Saturation (Intensity)</label>
                                            <span className="tooltip-container">
                                                <button type="button" className="tooltip-icon" aria-label="More info">?</button>
                                                <span className="tooltip-content">
                                                    <strong>Definition:</strong> The degree of purity, richness, or grayness of a color; its intensity.<br /><br />
                                                    <strong>Role:</strong> Directs the viewer’s attention and establishes atmospheric perspective.
                                                </span>
                                            </span>
                                        </div>
                                        <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{s}%</span>
                                    </div>
                                    <input id="satInput" type="range" className="color-range" min="0" max="100" value={s} onChange={e => setS(parseInt(e.target.value))} />
                                    <div className="color-track-sat"></div>
                                </div>

                                <div>
                                    <div className="flex-row-between">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <label htmlFor="valInput" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Value (Lightness)</label>
                                            <span className="tooltip-container">
                                                <button type="button" className="tooltip-icon" aria-label="More info">?</button>
                                                <span className="tooltip-content">
                                                    <strong>Definition:</strong> The relative lightness or darkness of a color, measuring the amount of light reflected.<br /><br />
                                                    <strong>Role:</strong> Creates the illusion of form, depth, and three-dimensional space through chiaroscuro.
                                                </span>
                                            </span>
                                        </div>
                                        <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)' }}>{v}%</span>
                                    </div>
                                    <input id="valInput" type="range" className="color-range" min="0" max="100" value={v} onChange={e => setV(parseInt(e.target.value))} />
                                    <div className="color-track-val"></div>
                                </div>
                            </div>

                            <div className="flex-col-center" style={{ marginTop: 'var(--spacing-4)' }}>
                                <div className="ct-preview-box" style={{ backgroundColor: rgbString, border: '4px solid var(--color-dark)' }}></div>
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
                </div>

                <div style={{ marginTop: 'var(--spacing-16)' }}>
                    <h3>Computational and Pigment-Based Models</h3>
                    <p>The method of creating color differs fundamentally between light-based media (screens) and physical pigments (paint). Artists must bridge the gap between Additive (RGB) and Subtractive (CMYK) worlds. CMYK is used for printing, while RGB is used for digital displays.</p>

                    <div className="ct-card text-center" style={{ marginTop: 'var(--spacing-8)' }}>
                        <div style={{ marginBottom: 'var(--spacing-6)' }}>
                            <button
                                onClick={() => setColorModel('RGB')}
                                className="ct-button"
                                style={{
                                    marginRight: 'var(--spacing-4)',
                                    marginBottom: 'var(--spacing-4)',
                                    backgroundColor: colorModel === 'RGB' ? 'var(--color-dark)' : 'var(--color-background)',
                                    color: colorModel === 'RGB' ? 'var(--color-background)' : 'var(--color-dark)',
                                    boxShadow: colorModel === 'RGB' ? 'none' : '6px 6px 0px 0px var(--color-dark)',
                                    transform: colorModel === 'RGB' ? 'translate(6px, 6px)' : 'none'
                                }}
                            >
                                Additive (RGB)
                            </button>
                            <button
                                onClick={() => setColorModel('CMY')}
                                className="ct-button"
                                style={{
                                    backgroundColor: colorModel === 'CMY' ? 'var(--color-dark)' : 'var(--color-background)',
                                    color: colorModel === 'CMY' ? 'var(--color-background)' : 'var(--color-dark)',
                                    boxShadow: colorModel === 'CMY' ? 'none' : '6px 6px 0px 0px var(--color-dark)',
                                    transform: colorModel === 'CMY' ? 'translate(6px, 6px)' : 'none'
                                }}
                            >
                                Subtractive (CMY)
                            </button>
                        </div>

                        <p style={{ minHeight: '3rem', margin: '0 auto', maxWidth: '35rem' }}>
                            {colorModel === 'RGB'
                                ? "Begins with black (absence of light). Adding red, green, and blue light creates white. Used for monitors and photography."
                                : "Begins with white (paper). Adding cyan, magenta, and yellow ink absorbs light, creating black. Used for printing."}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)', justifyContent: 'center', marginTop: 'var(--spacing-4)' }}>
                            {colorModel === 'RGB' ? (
                                <>
                                    <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', fontSize: 'var(--fontSize-0)', fontWeight: 'bold', backgroundColor: '#ffff00', color: '#111' }}>R + G = Yellow</span>
                                    <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', fontSize: 'var(--fontSize-0)', fontWeight: 'bold', backgroundColor: '#00ffff', color: '#111' }}>G + B = Cyan</span>
                                    <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', fontSize: 'var(--fontSize-0)', fontWeight: 'bold', backgroundColor: '#ff00ff', color: '#111' }}>R + B = Magenta</span>
                                </>
                            ) : (
                                <>
                                    <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', fontSize: 'var(--fontSize-0)', fontWeight: 'bold', backgroundColor: '#0000ff', color: '#fff' }}>C + M = Blue</span>
                                    <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', fontSize: 'var(--fontSize-0)', fontWeight: 'bold', backgroundColor: '#ff0000', color: '#fff' }}>M + Y = Red</span>
                                    <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', fontSize: 'var(--fontSize-0)', fontWeight: 'bold', backgroundColor: '#00cc00', color: '#fff' }}>C + Y = Green</span>
                                </>
                            )}
                        </div>

                        <div className="flex-col-center" style={{ margin: 'var(--spacing-8) 0' }}>
                            <div style={{
                                position: 'relative',
                                width: '260px',
                                height: '260px',
                                backgroundColor: colorModel === 'RGB' ? '#111' : '#f8f9fa',
                                borderRadius: 'var(--spacing-2)',
                                overflow: 'hidden',
                                border: '1px solid var(--color-secondary-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                                    {/* Top Circle */}
                                    <div style={{
                                        position: 'absolute', width: '120px', height: '120px', borderRadius: '50%',
                                        backgroundColor: colorModel === 'RGB' ? '#ff0000' : '#00ffff',
                                        mixBlendMode: colorModel === 'RGB' ? 'screen' : 'multiply',
                                        top: `calc(40px - ${40 * (1 - modelOverlap / 100)}px)`,
                                        left: '40px',
                                        transition: 'top 0.1s, left 0.1s, background-color 0.5s'
                                    }}></div>
                                    {/* Bottom Left Circle */}
                                    <div style={{
                                        position: 'absolute', width: '120px', height: '120px', borderRadius: '50%',
                                        backgroundColor: colorModel === 'RGB' ? '#00ff00' : '#ff00ff',
                                        mixBlendMode: colorModel === 'RGB' ? 'screen' : 'multiply',
                                        top: `calc(40px + ${20 * (1 - modelOverlap / 100)}px)`,
                                        left: `calc(40px - ${34.6 * (1 - modelOverlap / 100)}px)`,
                                        transition: 'top 0.1s, left 0.1s, background-color 0.5s'
                                    }}></div>
                                    {/* Bottom Right Circle */}
                                    <div style={{
                                        position: 'absolute', width: '120px', height: '120px', borderRadius: '50%',
                                        backgroundColor: colorModel === 'RGB' ? '#0000ff' : '#ffff00',
                                        mixBlendMode: colorModel === 'RGB' ? 'screen' : 'multiply',
                                        top: `calc(40px + ${20 * (1 - modelOverlap / 100)}px)`,
                                        left: `calc(40px + ${34.6 * (1 - modelOverlap / 100)}px)`,
                                        transition: 'top 0.1s, left 0.1s, background-color 0.5s'
                                    }}></div>
                                </div>
                            </div>
                        </div>

                        <div style={{ maxWidth: '20rem', margin: '0 auto' }}>
                            <div className="flex-row-between">
                                <label htmlFor="overlapInput" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Convergence</label>
                                <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)' }}>{modelOverlap}%</span>
                            </div>
                            <input id="overlapInput" type="range" className="color-range" min="0" max="100" value={modelOverlap} onChange={e => setModelOverlap(parseInt(e.target.value))} />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="project-hr" />

            <section id="advanced" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Phase 03</span>
                    <h2>Advanced: The Relativity of Color</h2>
                    <p>Josef Albers’ central premise was that color is constantly changing and is always seen in relation to its surroundings. This is the Law of Simultaneous Contrast.</p>
                    <p>He famously stated: “In visual perception a color is almost never seen as it really is—as it physically is. This fact makes color the most relative medium in art.” This section demonstrates Simultaneous Contrast, where a single color appears as two completely different colors based on its surroundings.</p>
                </div>

                <div className="ct-card text-center" style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-background)', border: 'none' }}>
                    <div style={{ marginBottom: 'var(--spacing-10)' }}>
                        <h3 style={{ color: 'var(--color-background)', marginTop: 0 }}>The Albers Illusion</h3>
                        <p style={{ color: 'var(--color-background)', maxWidth: '40rem', margin: '0 auto' }}>Look at the two small center squares. To the human eye, the left square appears to be a light, warm brown, while the right square appears to be a darker, cooler gray. In reality, they are exactly the same physical color.</p>
                    </div>

                    <div className="ct-illusion-row">
                        <div className="ct-illusion-col" style={{ backgroundColor: isIllusionActive ? '#1e3a8a' : 'var(--color-light)' }}>
                            <div className="ct-illusion-center" style={{ backgroundColor: `hsl(${illusionH}, 13%, 48%)` }}></div>
                        </div>

                        <div className="ct-illusion-col" style={{ backgroundColor: isIllusionActive ? '#fef08a' : 'var(--color-dark-inverted)' }}>
                            <div className="ct-illusion-center" style={{ backgroundColor: `hsl(${illusionH}, 13%, 48%)` }}></div>
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-10)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '100%', maxWidth: '20rem', marginBottom: 'var(--spacing-6)', textAlign: 'left' }}>
                            <div className="flex-row-between">
                                <label htmlFor="illusionHue" style={{ fontWeight: 'bold', fontSize: 'var(--fontSize-0)' }}>Center Hue</label>
                                <span className="mono-text" style={{ fontSize: 'var(--fontSize-0)' }}>{illusionH}&deg;</span>
                            </div>
                            <input id="illusionHue" type="range" className="color-range illusion-slider" min="0" max="360" value={illusionH} onChange={e => setIllusionH(parseInt(e.target.value))} />
                            <div className="color-track-hue illusion-track" style={{ marginBottom: 0 }}></div>
                        </div>
                        <button onClick={() => setIsIllusionActive(!isIllusionActive)} className="ct-button" style={{
                            transition: 'transform 0.1s, box-shadow 0.5s',
                            border: 'solid var(--color-light) var(--spacing-1)',
                            transform: 'translate(6px, 6px)',
                            borderRadius: 'var(--spacing-1)'
                        }}>
                            {isIllusionActive ? 'Background Off' : 'Background On'}
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: 'var(--spacing-16)' }}>
                    <h3>Color Order & Systems</h3>
                    <p>While the color wheel is useful, professional artists require precision and restraint. This is where systems like Munsell and techniques like <strong>Gamut Masking</strong> become essential tools for creating cohesive palettes.</p>

                    <div style={{ marginBottom: 'var(--spacing-12)' }}>
                        <h4>The Munsell Model</h4>
                        <p>Developed by Albert H. Munsell, this system specifies colors based on measured human visual responses across three dimensions: <strong>Hue</strong>, <strong>Value</strong>, and <strong>Saturation</strong> (Chroma).</p>
                        <div style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-4)', borderRadius: 'var(--spacing-1)', border: '1px solid var(--color-secondary-accent)', maxWidth: '30rem' }}>
                            <p style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 'var(--fontWeight-bold)' }}>Example Notation: 5R 4/12</p>
                            <ul style={{ margin: 'var(--spacing-2) 0 0 0', paddingLeft: 'var(--spacing-4)', fontSize: 'var(--fontSize-0)' }}>
                                <li><strong>5R:</strong> Pure Red Hue</li>
                                <li><strong>4:</strong> Middle-dark Value</li>
                                <li><strong>12:</strong> Very high Chroma</li>
                            </ul>
                        </div>
                    </div>

                    <div className="ct-grid cols-2" style={{ alignItems: 'start' }}>
                        <div>
                            <h4>Gamut Masking</h4>
                            <p>A technique popularized by James Gurney where you define a geometric shape over the color wheel to physically limit your available palette. The colors falling <em>inside</em> the shape dictate the entire mood of the painting, guaranteeing atmospheric harmony because discordant colors are systematically excluded.</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)', marginTop: 'var(--spacing-6)' }}>
                                {Object.keys(gamutShapes).map((gamut) => (
                                    <button
                                        key={gamut}
                                        onClick={() => setActiveGamut(gamut)}
                                        className="ct-pill"
                                        style={{
                                            backgroundColor: activeGamut === gamut ? 'var(--color-primary-accent)' : 'var(--color-secondary-accent)',
                                            color: activeGamut === gamut ? 'var(--color-light)' : 'var(--color-background)',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        {gamut}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex-col-center">
                            <div className="gamut-container">
                                <div className="gamut-wheel"></div>
                                {/* Center retro cutout to match first wheel */}
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, width: '30%', height: '30%', borderRadius: '50%', background: 'var(--color-background)', border: '6px solid var(--color-dark)' }}></div>

                                <svg className="gamut-overlay" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 2 }}>
                                    <defs>
                                        <mask id="gamutMask">
                                            <rect width="300" height="300" fill="white" />
                                            <polygon
                                                points={gamutShapes[activeGamut]}
                                                fill="black"
                                                style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                            />
                                        </mask>
                                    </defs>
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <line
                                            key={`slice-${i}`}
                                            x1="150"
                                            y1="150"
                                            x2={150 + 150 * Math.cos((i * 30 - 90) * Math.PI / 180)}
                                            y2={150 + 150 * Math.sin((i * 30 - 90) * Math.PI / 180)}
                                            stroke="var(--color-dark)"
                                            strokeWidth="4"
                                        />
                                    ))}
                                    {/* The semi-transparent overlay that hides colors OUTSIDE the gamut */}
                                    <rect width="300" height="300" fill="var(--color-background)" opacity="0.85" mask="url(#gamutMask)" />
                                    {/* The border drawing the shape itself */}
                                    <polygon
                                        points={gamutShapes[activeGamut]}
                                        fill="none"
                                        stroke="var(--color-dark)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                    />
                                </svg>
                            </div>
                            <p style={{ marginTop: 'var(--spacing-4)', fontSize: 'var(--fontSize-0)', color: 'var(--color-secondary-accent)', fontStyle: 'italic', textAlign: 'center' }}>
                                Only colors visible inside the polygon are allowed in the palette.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ColorTheoryIndex


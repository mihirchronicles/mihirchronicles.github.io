import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

// ─── Artist Data ────────────────────────────────────────────────────────────
const artists = [
    {
        name: "Leonardo da Vinci",
        years: "1452 – 1519",
        era: "High Renaissance",
        eraDesc: "Italy, 1490–1527. The peak of Renaissance idealism: harmony, proportion, and classical beauty dominate. Art serves religion, humanism, and the glorification of the human form.",
        style: "Classical Realism, Sfumato",
        nationality: "Italian",
        accent: "#7c5c1e",
        knownFor: "The union of art and science. Leonardo dissected corpses to understand anatomy, studied optics, and modeled fluid dynamics, all to make paint on wood breathtakingly accurate.",
        technique: "Sfumato: pigment tones are blended so gradually that all edges dissolve. There are no outlines in da Vinci, only the soft, smoky transition from light to shadow that gives the Mona Lisa her haunting gaze.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/200px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg",
        works: [
            { title: "Mona Lisa", year: "c. 1503", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" },
            { title: "The Last Supper", year: "c. 1498", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/200px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg" },
            { title: "Vitruvian Man", year: "c. 1490", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/200px-Da_Vinci_Vitruve_Luc_Viatour.jpg" },
        ]
    },
    {
        name: "Michelangelo",
        years: "1475 – 1564",
        era: "High Renaissance",
        eraDesc: "Italy, 1490–1527. The peak of Renaissance idealism, harmony, proportion, and classical beauty dominate. Art serves religion, humanism, and the glorification of the human form.",
        style: "Monumental Idealism, Terribilità",
        nationality: "Italian",
        accent: "#6a4a8a",
        knownFor: "Art as physical force. His figures strain with supernatural energy, muscles, tendons, and divine tension carved or painted with a sculptural understanding no painter before or after has matched.",
        technique: "Terribilità, a sublime, awe-inspiring power. His forms are always oversized and straining, imbuing biblical subjects with visceral physical reality. He worked fresco 'buon fresco,' painting into wet plaster in single sessions that still glow today.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg/200px-Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg",
        works: [
            { title: "The Creation of Adam", year: "c. 1512", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/200px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg" },
            { title: "Sistine Chapel Ceiling", year: "1508–1512", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sistina-interno.jpg/200px-Sistina-interno.jpg" },
            { title: "The Last Judgement", year: "1536–1541", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Last_Judgement_%28Michelangelo%29.jpg/200px-Last_Judgement_%28Michelangelo%29.jpg" },
        ]
    },
    {
        name: "Rembrandt van Rijn",
        years: "1606 – 1669",
        era: "Dutch Golden Age",
        eraDesc: "Netherlands, 1588–1672. A flourishing of secular, merchant-class art: portraits, landscapes, still lifes, and domestic interiors painted with extraordinary realism and craft.",
        style: "Baroque, Chiaroscuro Realism",
        nationality: "Dutch",
        accent: "#8B4513",
        knownFor: "The master of light and psychological truth. He painted the same human face, his own, over 90 times across a lifetime, creating the first sustained visual autobiography in Western art.",
        technique: "Chiaroscuro taken to its extreme: Rembrandt's subjects emerge from absolute darkness into a single shaft of warm light. He built paint surface in thick impasto for highlights and near-transparent glazes for shadows, a physical record of light itself.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/200px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
        works: [
            { title: "The Night Watch", year: "1642", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Nightwatch_by_Rembrandt_-_Rijksmuseum.jpg/200px-The_Nightwatch_by_Rembrandt_-_Rijksmuseum.jpg" },
            { title: "Self-Portrait (Kenwood)", year: "c. 1665", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Rembrandt_Self-portrait_%28Kenwood%29.jpg/200px-Rembrandt_Self-portrait_%28Kenwood%29.jpg" },
            { title: "The Anatomy Lesson", year: "1632", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rembrandt_Harmensz._van_Rijn_007.jpg/200px-Rembrandt_Harmensz._van_Rijn_007.jpg" },
        ]
    },
    {
        name: "Vincent van Gogh",
        years: "1853 – 1890",
        era: "Post-Impressionism",
        eraDesc: "Europe, 1886–1910. Artists pushed beyond capturing fleeting light to explore emotional and symbolic meaning through bold color, expressive brushwork, and abstract structure.",
        style: "Expressive Brushwork, Color Emotion",
        nationality: "Dutch",
        accent: "#1a5fa8",
        knownFor: "The painter who made emotion visible. Van Gogh bent every rule of representation to externalize internal feeling, his swirling skies, molten suns, and writhing cypress trees are pure psychological states rendered in pigment.",
        technique: "Impasto brushwork with directional energy. Every stroke is a deliberate mark, not a blend. He used short, curved dashes to build texture, and complementary color juxtapositions (blue-orange, yellow-violet) that vibrate at the edges without mixing.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/200px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
        works: [
            { title: "The Starry Night", year: "1889", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" },
            { title: "Sunflowers", year: "1888", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/200px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg" },
            { title: "The Bedroom in Arles", year: "1888", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/200px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg" },
        ]
    },
    {
        name: "Claude Monet",
        years: "1840 – 1926",
        era: "Impressionism",
        eraDesc: "France, 1860s–1880s. A radical break from academic painting, artists worked outdoors to capture the transient effects of light and atmosphere using loose, broken brushstrokes.",
        style: "Broken Color, Optical Mixing",
        nationality: "French",
        accent: "#2e7d32",
        knownFor: "The painter of light itself. Monet rejected the idea that painting should describe objects, instead he captured the fleeting, luminous impression of light falling on a surface at one specific moment in time.",
        technique: "Broken color and optical mixing. Rather than blending pigments on the palette, Monet placed pure colors side by side on the canvas. The eye mixes them at viewing distance, producing a vibrancy that no mixed pigment can achieve.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/200px-Claude_Monet_1899_Nadar_crop.jpg",
        works: [
            { title: "Water Lilies", year: "1906", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/200px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg" },
            { title: "Impression, Sunrise", year: "1872", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/200px-Monet_-_Impression%2C_Sunrise.jpg" },
            { title: "Haystacks", year: "1890–91", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Monet_-_Grainstacks%2C_White_Frost_Effect_%281889%29_Google_Art_Project.jpg/200px-Monet_-_Grainstacks%2C_White_Frost_Effect_%281889%29_Google_Art_Project.jpg" },
        ]
    },
    {
        name: "Pablo Picasso",
        years: "1881 – 1973",
        era: "Cubism / Modern Art",
        eraDesc: "Europe, 1907–1970s. Form is fragmented and reassembled from multiple viewpoints simultaneously. The first major movement to break entirely with Western pictorial tradition since the Renaissance.",
        style: "Cubism, Analytical Deconstruction",
        nationality: "Spanish",
        accent: "#c62828",
        knownFor: "The destruction and reconstruction of visual reality. Picasso asked: why show a face from one viewpoint when you can paint all viewpoints simultaneously? He fractured form and rebuilt it from fragments of perception.",
        technique: "Analytical Cubism: objects are broken into geometric planes and reassembled on the picture surface. Multiple simultaneous perspectives exist in one image. Later, Synthetic Cubism introduced collage materials, newspaper, rope, wallpaper, into the painted surface.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/200px-Pablo_picasso_1.jpg",
        works: [
            { title: "Les Demoiselles d'Avignon", year: "1907", img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/200px-Les_Demoiselles_d%27Avignon.jpg" },
            { title: "Guernica", year: "1937", img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/250px-PicassoGuernica.jpg" },
            { title: "Girl Before a Mirror", year: "1932", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Girl_Before_a_Mirror.jpg/150px-Girl_Before_a_Mirror.jpg" },
        ]
    },
    {
        name: "Raphael",
        years: "1483 – 1520",
        era: "High Renaissance",
        eraDesc: "Italy, 1490–1527. The peak of Renaissance idealism, harmony, proportion, and classical beauty dominate. Art serves religion, humanism, and the glorification of the human form.",
        nationality: "Italian",
        style: "Harmonious Idealism, Grace",
        accent: "#ad7a1f",
        knownFor: "Beauty as the highest truth. Raphael synthesized Leonardo's depth, Michelangelo's power, and his own innate sense of grace into an art of perfect harmony, figures that feel simultaneously ideal and warmly human.",
        technique: "Compositional clarity and pyramidal grouping. Raphael organized complex figure groups into stable geometric forms, triangles, circles, that produce an effortless sense of order. His color is warm and harmonious; his drawing, the most classically refined of the Renaissance.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/200px-Raffaello_Sanzio.jpg",
        works: [
            { title: "School of Athens", year: "1509–1511", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/200px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg" },
            { title: "The Sistine Madonna", year: "1512", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Raphael_-_Raffaello_Sanzio_-_The_Sistine_Madonna.jpg/200px-Raphael_-_Raffaello_Sanzio_-_The_Sistine_Madonna.jpg" },
            { title: "Transfiguration", year: "1516–1520", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Raffael_Transfigurazione.jpg/200px-Raffael_Transfigurazione.jpg" },
        ]
    },
    {
        name: "Jan Vermeer",
        years: "1632 – 1675",
        era: "Dutch Golden Age",
        eraDesc: "Netherlands, 1588–1672. A flourishing of secular, merchant-class art: portraits, landscapes, still lifes, and domestic interiors painted with extraordinary realism and craft.",
        nationality: "Dutch",
        style: "Intimate Realism, Light Opticism",
        accent: "#1565c0",
        knownFor: "The painter of hushed interiors and the poetry of daylight. In 34–36 surviving paintings, Vermeer turned domestic life, a woman reading, pouring milk, playing a lute, into visions of quiet, luminous eternity.",
        technique: "It is thought Vermeer used a camera obscura to project the scene onto his canvas, achieving the precise fall of diffused light through a window. He built surfaces with extremely thin transparent layers and used expensive pigments like lapis lazuli blue liberally.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/200px-1665_Girl_with_a_Pearl_Earring.jpg",
        works: [
            { title: "Girl with a Pearl Earring", year: "c. 1665", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/200px-1665_Girl_with_a_Pearl_Earring.jpg" },
            { title: "The Milkmaid", year: "c. 1657–1658", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/200px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg" },
            { title: "The Art of Painting", year: "c. 1666–1668", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/200px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg" },
        ]
    },
    {
        name: "Caravaggio",
        years: "1571 – 1610",
        era: "Baroque",
        eraDesc: "Europe, 1600–1750. Dramatic tension, emotional immediacy, and theatrical use of light. Baroque painting heightens religious and mythological scenes to a visceral, almost cinematic intensity.",
        nationality: "Italian",
        style: "Tenebrism, Dramatic Naturalism",
        accent: "#37474f",
        knownFor: "The revolutionary who put real street people into sacred scenes. Caravaggio refused idealized figures, his apostles have dirty feet, his Madonnas look like models from the Roman slums. He shocked and transformed European painting overnight.",
        technique: "Tenebrism, an extreme form of chiaroscuro where figures emerge from absolute, unlit blackness. He likely used a single candle spotlight and painted from live models directly, skipping preparatory drawings. The immediacy is palpable in every canvas.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/200px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg",
        works: [
            { title: "The Calling of Saint Matthew", year: "1599–1600", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/200px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg" },
            { title: "Judith Beheading Holofernes", year: "c. 1598–1599", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judith_Beheading_Holofernes_-_Caravaggio.jpg/200px-Judith_Beheading_Holofernes_-_Caravaggio.jpg" },
            { title: "Supper at Emmaus", year: "1601", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Caravaggio_-_The_Supper_at_Emmaus_-_National_Gallery%2C_London.jpg/200px-Caravaggio_-_The_Supper_at_Emmaus_-_National_Gallery%2C_London.jpg" },
        ]
    },
    {
        name: "J.M.W. Turner",
        years: "1775 – 1851",
        era: "Romanticism",
        eraDesc: "Europe, 1780–1850. A reaction against rationalism and industrialisation, artists pursued the sublime, the wild, the emotional, and the awe-inspiring power of nature.",
        nationality: "British",
        style: "Atmospheric Abstraction, Luminism",
        accent: "#bf5c00",
        knownFor: "The painter of atmosphere and the sublime. Turner dissolved landscape into pure light and weather, his later canvases have more in common with Abstract Expressionism than with classical painting, a century before its time.",
        technique: "Wet-on-wet and scraping. Turner would lay down broad washes of color on damp canvas, then work across the wet surface rapidly, lifting and dragging pigment. He also used a palette knife to scrape back glazes to luminous whites, a technique now called 'reserve whites'.",
        portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Joseph_Mallord_William_Turner_-_Self-Portrait_-_Google_Art_Project.jpg/200px-Joseph_Mallord_William_Turner_-_Self-Portrait_-_Google_Art_Project.jpg",
        works: [
            { title: "The Fighting Temeraire", year: "1839", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/200px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg" },
            { title: "Rain, Steam and Speed", year: "1844", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Rain%2C_Steam_and_Speed_the_Great_Western_Railway.jpg/200px-Rain%2C_Steam_and_Speed_the_Great_Western_Railway.jpg" },
            { title: "Venice from the Porch of Madonna", year: "c. 1835", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Joseph_Mallord_William_Turner_-_Venice_from_the_Porch_of_Madonna_della_Salute_-_Google_Art_Project.jpg/200px-Joseph_Mallord_William_Turner_-_Venice_from_the_Porch_of_Madonna_della_Salute_-_Google_Art_Project.jpg" },
        ]
    },
]

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
                .ct-button:hover { background-color: var(--color-dark); color: var(--color-background); }
                .ct-button:active { box-shadow: 0px 0px 0px 0px var(--color-dark); }
                .ct-card {
                    padding: var(--spacing-6);
                    border: 1px solid var(--color-secondary-accent);
                    border-radius: var(--spacing-2);
                    background: var(--color-background);
                }
                .ct-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-8);
                    margin-bottom: var(--spacing-16);
                }
                @media (min-width: 768px) {
                    .ct-grid.cols-2 { grid-template-columns: 1fr 1fr; align-items: start; }
                    .ct-grid.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
                }
                @media (max-width: 767px) {
                    .ct-grid { gap: var(--spacing-6); }
                    .main-heading { font-size: var(--fontSize-6); line-height: var(--lineHeight-tight); }
                    .ct-responsive-header-text { font-size: var(--fontSize-2) !important; }
                }
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
                .artist-nav-controls {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: var(--spacing-3);
                    margin-top: var(--spacing-8);
                    margin-bottom: var(--spacing-4);
                }
                .artist-nav-dots {
                    display: flex;
                    gap: var(--spacing-2);
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: center;
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
                    /* Nav */
                    .artist-nav-controls { gap: var(--spacing-2); }
                    .ct-button { padding: var(--spacing-2) var(--spacing-4) !important; font-size: var(--fontSize-0) !important; }
                }
                @media (max-width: 480px) {
                    .artist-portrait-wrap { height: 180px !important; }
                    .artist-nav-dots { gap: var(--spacing-1); }
                    .nav-dot { width: 6px !important; height: 6px !important; }
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
                .reference-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: var(--fontSize-0);
                }
                .reference-table th {
                    text-align: left;
                    padding: var(--spacing-3) var(--spacing-4);
                    border-bottom: 2px solid var(--color-dark);
                    font-weight: var(--fontWeight-bold);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    font-size: var(--fontSize-0);
                    white-space: nowrap;
                }
                .reference-table td {
                    padding: var(--spacing-3) var(--spacing-4);
                    border-bottom: 1px solid var(--color-secondary-accent);
                    vertical-align: top;
                }
                .reference-table tr:hover td { background: var(--color-background); }
                .era-dot {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    margin-right: 6px;
                    flex-shrink: 0;
                }
                .nav-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 2px solid var(--color-dark);
                    cursor: pointer;
                    transition: background 0.2s;
                    padding: 0;
                    background: transparent;
                }
                .nav-dot.active { background: var(--color-dark); }
                .mono-text {
                    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
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

            <hr style={{ marginBottom: 'var(--spacing-12)' }} />

            {/* ─── CARD STACK ──────────────────────────────────────────── */}
            <section id="explore" style={{ marginBottom: 'var(--spacing-16)' }}>
                <div>
                    <span className="ct-pill">Explore</span>
                    <h2>The Masters</h2>
                    <p>Use the arrows or keyboard ← → to move through the deck. Each card reveals the artist's approach and technique.</p>
                </div>

                {/* Navigation controls */}
                <div className="artist-nav-controls">
                    <button onClick={goPrev} className="ct-button" aria-label="Previous artist">&larr; Prev</button>
                    <div className="artist-nav-dots">
                        {artists.map((_, i) => (
                            <button key={i} className={`nav-dot${i === activeIdx ? ' active' : ''}`} onClick={() => setActiveIdx(i)} aria-label={`Go to artist ${i + 1}`}><span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>{i + 1}</span></button>
                        ))}
                    </div>
                    <button onClick={goNext} className="ct-button" aria-label="Next artist">Next &rarr;</button>
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

                {/* Counter */}
                <p style={{ textAlign: 'center', marginTop: 'var(--spacing-4)', fontSize: 'var(--fontSize-0)' }} className="mono-text">
                    {activeIdx + 1} / {total}
                </p>
            </section>

            <hr style={{ marginBottom: 'var(--spacing-12)' }} />

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
                <hr style={{ marginBottom: 'var(--spacing-8)' }} />
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

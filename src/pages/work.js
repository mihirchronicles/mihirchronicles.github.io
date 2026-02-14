import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-bottom: 5rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }
`

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  
  .gallery-image {
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const ContentContainer = styled.div`
  flex: 1.2;

  h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`

const WorkIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Work</h1>
      <p style={{ marginBottom: "4rem", maxWidth: "800px" }}>Nurturing an idea through an experimentation that blossoms into a product is an unparalleled joy. The journey of building products has broadened my understanding of various subjects and how things work. Below are the products I have had the privilege of working on.</p>

      <h2>DAFgiving360 (Schwab Charitable)</h2>
      <WorkContainer>
        <ImageContainer>
          <Zoom>
            <StaticImage src="../images/daf.png" alt="dafgiving360 donor advised fund" className="gallery-image" />
          </Zoom>
        </ImageContainer>
        <ContentContainer>
          <p><strong>[2023 - 2025]</strong></p>
          <ul>
            <li> Led digital product strategy and execution for donor-advised funds (DAF), directly facilitating a total of $8.9 billion in charitable grants during fiscal year 2025.</li>
            <li> Scaled automated granting workflows and directed end-to-end product development, optimizing capabilities to connect donors with 255,000+ charities nationwide.</li>
            <li> Defined strategic direction for charitable giving solutions, enhancing user experiences and streamlining the donation process across all digital channels.</li>
          </ul>
          <p><strong>Website</strong>: <a href="https://www.dafgiving360.org">DAFgiving360</a></p>
        </ContentContainer>
      </WorkContainer>

      <h2>Schwab Intelligent Portfolios</h2>
      <WorkContainer>
        <ImageContainer>
          <Zoom>
            <StaticImage src="../images/sip.png" alt="schwab intelligent portfolios" className="gallery-image" />
          </Zoom>
        </ImageContainer>
        <ContentContainer>
          <p><strong>[2021 - 2023]</strong></p>
          <ul>
            <li>The Challenge: The existing automated investing onboarding flow was friction-heavy, requiring too many steps for risk profiling.</li>
            <li>The Solution: Led the effort to modernize the risk profile and portfolio recommendation algorithms, focusing on a minimalist, user-centric design.</li>
            <li>The Result: Delivered a streamlined Schwab Intelligent Portfolios experience with reduced question density, resulting in a quantifiable decrease in click-throughs and a faster time-to-value for new investors.</li>
          </ul>
          <p><strong>Website</strong>: <a href="https://intelligent.schwab.com">Schwab Intelligent Portfolios</a></p>
        </ContentContainer>
      </WorkContainer>

      <h2>Big Imposter</h2>
      <WorkContainer>
        <ImageContainer>
          <Zoom>
            <StaticImage src="../images/big_imposter_1.png" alt="big_imposter" className="gallery-image" />
          </Zoom>
          <Zoom>
            <StaticImage src="../images/big_imposter_2.png" alt="big_imposter" className="gallery-image" />
          </Zoom>
        </ImageContainer>
        <ContentContainer>
          <p><strong>[2023]</strong></p>
          <ul>
            <li>Conceptualized and developed a cohesive brand identity for a digital resource dedicated to overcoming professional imposter syndrome.</li>
            <li>Executed end-to-end creative direction, designing a complete visual system including a custom logo, spot illustrations, and high-fidelity website mockups.</li>
            <li>Project was abandoned.</li>
          </ul>
          <p><strong>Website</strong>: <a href="https://bigimposter.webflow.io">Big Imposter</a></p>
        </ContentContainer>
      </WorkContainer>

      <h2>Wise Charlie</h2>
      <WorkContainer>
        <ImageContainer>
          <Zoom>
            <StaticImage src="../images/wise_charlie_deck.jpg" alt="wisecharlie" className="gallery-image" />
          </Zoom>
          <Zoom>
            <StaticImage src="../images/wise_charlie1.png" alt="wisecharlie" className="gallery-image" />
          </Zoom>
          <Zoom>
            <StaticImage src="../images/wise_charlie_logo.jpg" alt="wisecharlie" className="gallery-image" />
          </Zoom>
          <Zoom>
            <StaticImage src="../images/wise_charlie_landing_page.png" alt="wisecharlie" className="gallery-image" />
          </Zoom>
        </ImageContainer>
        <ContentContainer>
          <p><strong>[2018 - 2021]</strong></p>
          <ul>
            <li>A “pocket tool for independent thinking” consisting of 100 mental model cards in a compact, custom-designed box.</li>
            <li>Founded and bootstrapped Wise Charlie—an educational project on Charlie Munger's mental models—over a traditional MBA. Dedicated to mastering the 'latticework' of interdisciplinary thinking by translating big ideas from physics, psychology, and math into accessible, high-leverage tools for better decision-making</li>
            <li>Democratized high-leverage thinking, transforming dense academic concepts into engaging tools for critical decision-making and pattern recognition.</li>
            <li>Managed end-to-end physical product lifecycle as a solo founder, successfully navigating manufacturing, logistics, and shipping challenges distinct from digital product development.</li>
            <li>Achieved market validation with 600+ paying customers, delivering a physical tool for critical thinking to a diverse user base of educators, investors, and designers.</li>
            <li>Project coverage: Project got a shout out from <a href="https://www.densediscovery.com/issues/111">Kai from Dense Discovery</a>, <a href="https://barbaraoakley.com/p-is-for-pterodactyl-the-worst-alphabet-book-ever/">Barbara Oakley</a>, <a href="https://klart.io/pixels/5fb63e559d3494717438a94a">Fredrick from Pixels</a>, Blas from Rabbit Hole and many more.</li>
            <li>Business was acquired by a customer.</li>
          </ul>
          <p><strong>Instagram</strong>: <a href="https://www.instagram.com/heywisecharlie/">@heywisecharlie</a></p>
          <p><strong>Web Archive</strong>: <a href="http://web.archive.org/web/20210725045443/https://www.wisecharlie.com/">Wise Charlie</a></p>
        </ContentContainer>
      </WorkContainer>

      <h2>Morningstar Investor</h2>
      <WorkContainer>
        <ImageContainer>
          <Zoom>
            <StaticImage src="../images/morningstar_dot_com.png" alt="morningstar_dot_com" className="gallery-image" />
          </Zoom>
        </ImageContainer>
        <ContentContainer>
          <p><strong>[2020-2021]</strong></p>
          <ul>
            <li>Drove feature development for the modernization of Morningstar Investor, the company's flagship platform for individual investors.</li>
            <li>Revitalized core capabilities, including Watchlists, Portfolio Tracking, and Research integration, as part of a strategic executive initiative to upgrade the user experience.</li>
          </ul>
          <p><strong>Website</strong>: <a href="http://investor.morningstar.com/">Morningstar Investor</a></p>
        </ContentContainer>
      </WorkContainer>

      <h2>Morningstar Design System</h2>
      <WorkContainer>
        <ImageContainer>
          <Zoom>
            <StaticImage src="../images/morningstar_design_system.png" alt="designsystem" className="gallery-image" />
          </Zoom>
        </ImageContainer>
        <ContentContainer>
          <p><strong>[2018 - 2020]</strong></p>
          <ul>
            <li>Unified UX and code standards across a portfolio of 60+ client-facing products, resolving fragmentation through the implementation of a centralized Design System.</li>
            <li>Created a living style guide and component library, ensuring consistency and accessibility across all products.</li>
            <li>Collaborated with cross-functional teams to implement the Design System, including product managers, developers, and designers.</li>
            <li>Facilitated the adoption of the Design System by providing training and documentation, and by working closely with teams to ensure successful implementation.</li>
          </ul>
          <p><strong>Website</strong>: <a href="http://designsystem.morningstar.com/">Morningstar Design System</a></p>
        </ContentContainer>
      </WorkContainer>

      <h2>Spendout</h2>
      <WorkContainer>
        <ImageContainer>
          <Zoom>
            <StaticImage src="../images/spendout.png" alt="spendout" className="gallery-image" />
          </Zoom>
          <Zoom>
            <StaticImage src="../images/spendout2.png" alt="spendout2" className="gallery-image" />
          </Zoom>
        </ImageContainer>
        <ContentContainer>
          <p><strong>[2013]</strong></p>
          <ul>
            <li>Led the end-to-end product development of a specialized expense tracking tool tailored for the sharing economy (Uber, Airbnb) at digital agency Doejo.</li>
            <li>Achieved early market traction with hundreds of active users and spearheaded strategic partnership negotiations with Uber Chicago.</li>
            <li>Project shout out <a href="http://www.chicagotribune.com/bluesky/originals/81828315-132.html">Chicago Tribune Coverage</a>.</li>
          </ul>
        </ContentContainer>
      </WorkContainer>

      <h2>Humble Pen</h2>
      <WorkContainer>
        <ImageContainer>
          <Zoom>
            <StaticImage src="../images/humblepens.png" alt="humblepens" className="gallery-image" />
          </Zoom>
          <Zoom>
            <StaticImage src="../images/humble_pen.jpg" alt="humblepen" className="gallery-image" />
          </Zoom>
          <Zoom>
            <StaticImage src="../images/hp_sketch.png" width={700} alt="humblepen" className="gallery-image" />
          </Zoom>
        </ImageContainer>
        <ContentContainer>
          <p><strong>[2012 - 2015]</strong></p>
          <ul>
            <li>Humble Pen was my crash course in the reality of physical goods versus digital products.</li>
            <li>Origin: Inspired by a 2012 trip to Haiti and letters from students, I founded a “One-for-One” venture to merge design with social impact.</li>
            <li>The Product: Designed and manufactured a handcrafted bamboo pen, packaged with artist-curated postcards to reignite the passion for physical writing.</li>
            <li>The Impact: Successfully funded educational resources for nearly 1,000 children across Haiti, India, and Cambodia.</li>
            <li>The Retrospective: While the project achieved significant social impact, I made the difficult decision to sunset the venture due to the economic challenges of the One-for-One model and fair-trade supply chains. This experience provided invaluable lessons in unit economics, supply chain logistics, and the distinct separation between business sustainability and charitable giving.</li>
          </ul>
          <p><strong>Instagram</strong>: <a href="https://www.instagram.com/humblepen/">@humblepen</a></p>
          <p><strong>Video</strong>: <a href="https://vimeo.com/humblepen">@vimeovideos</a></p>
        </ContentContainer>
      </WorkContainer>

    </Layout>
  )
}

export default WorkIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Work" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

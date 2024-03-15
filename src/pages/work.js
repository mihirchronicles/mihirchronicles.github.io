import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Work</h1>
      <p>There is a pure joy in building products. Building a product is like planting a seed which allows for experimenting with new ideas. Pursuing product development either bring chaos in order or helps me escape chaos. It brings hope and sense of aliveness. The journey of building products has given me insights on various topics which has been fruitful in my professional life. Below are the products I have woked on.</p>

      <h2>Schwab Charitable</h2>
      <p><strong>[2023 - Current]</strong></p>
      <p><strong>Story</strong>: Working on automating and enhancing granting experience.</p>
      <p><strong>Website</strong>: <a href="https://www.schwabcharitable.org">Schwab Charitable</a></p>

      <h2>Schwab Intelligent Portfolios</h2>
      <p><strong>[2021 - 2023]</strong></p>
      <p><strong>Story</strong>: Worked on Schwab Intelligent Portfolio—a robo advisor platform for automated investing—to re-modernize user experience and re-platform capabilities around risk profiling and portfolio recommendation.</p>
      <p><strong>Website</strong>: <a href="https://intelligent.schwab.com">Schwab Intelligent Portfolios</a></p>

      <h2>Big Imposter</h2>
      <div>
        <StaticImage src="../images/big_imposter.png" alt="big_imposter" className="gallery-image" />
      </div>
      <p><strong>[2023 - Current]</strong></p>
      <p><strong>Story</strong>: An attempt to author a book that talks about overcoming the imposter syndrome. The storyline is work-in-progress.</p>

      <h2>Wise Charlie</h2>
      <div>
        <StaticImage src="../images/wise_charlie_deck.jpg" alt="wisecharlie" className="gallery-image"/>
        <StaticImage src="../images/wise_charlie1.png" alt="wisecharlie" className="gallery-image"/>
        <StaticImage src="../images/wise_charlie_logo.jpg" alt="wisecharlie" className="gallery-image"/>
        <StaticImage src="../images/wise_charlie_landing_page.png" alt="wisecharlie" className="gallery-image"/>
      </div>
      <p><strong>[2018 - 2021]</strong></p>
      <p><strong>Story</strong>: Charlie Munger has been a huge source of inspiration to me since I was a teenager. He is Warren Buffett's business partner at Berkshire Hathaway and famously known as one of the broadest thinkers. Munger coined the concept of mental models. Mental models are big ideas from big disciplines. When you collect models from lots of different fields, say psychology, literature, science, math, and so on—you will then be able to recognize lots of interesting connections. Models are reference points of understanding. Munger believes in collecting little packets of understanding for how things work, little models of the world. These mental models can help anyone ask the right questions by thinking critically. It is easy to pay homage to Charlie Munger’s latticework of mental models, but when you live it, you see why he is right. Knowing the key drivers and major ideas in a variety of fields is a huge source of leverage. It is difficult to study broadly and deeply, but the two aren't mutually exclusive. I wanted to create a central repository of these mental models which would explain them in a fun way and pursue academia in a non-traditional way. I had an option to go pursue my MBA or start Wise Charlie. I chose the latter.</p>
      <p><strong>Product</strong>: Wise Charlie is a collection of 100 mental model cards packaged in a beautiful and compact box. It is a pocket tool for independent thinking. Each model has fun artwork with a short definition followed by a funny example. I wanted the product to reflect humor because Charlie Munger in real life is hilarious.</p>
      <p><strong>Highlights</strong>: The project was a challenge in many ways that I did not anticipate. Manufacturing and shipping a physical product is still harder than building a digital product. Maintaining a project is hard especially when you are running it solo. Nonetheless, the project was super fun to build and share with teachers, students, designers, parents and investors. So many of us want to be good at thinking better while having fun. The project was able to achieve that with 600+ customers. Project got a shout out from <a href="https://www.densediscovery.com/issues/111">Kai from Dense Discovery</a>, <a href="https://barbaraoakley.com/p-is-for-pterodactyl-the-worst-alphabet-book-ever/">Barbara Oakley</a>, <a href="https://klart.io/pixels/5fb63e559d3494717438a94a">Fredrick from Pixels</a>, Blas from Rabbit Hole and many more. First, I decided to shut down the project after 4 years because there are a lot of similarities between Wise Charlie & Mihir Chronicles. I decided to consolidate the two. More on <a href="https://twitter.com/mihirchronicles/status/1479596342242590727?s=20">what</a> I learned and <a href="https://mailchi.mp/a203c96984bf/the-end-of-wise-charlie-project">why</a>. But I started getting a flood of emails from customers asking me to not shut down. They asked me whether I'd be interested in selling the business. I ultimately ended up selling the business. The outcome I didn't desire but came in surprising ways.</p>
      <p><strong>Instagram</strong>: <a href="https://www.instagram.com/heywisecharlie/">@heywisecharlie</a></p>
      <p><strong>Web Archive</strong>: <a href="http://web.archive.org/web/20210725045443/https://www.wisecharlie.com/">www.wisecharlie.com</a></p>

      <h2>Morningstar Investor</h2>
      <div>
        <StaticImage src="../images/morningstar_dot_com.png" alt="morningstar_dot_com" className="gallery-image"/>
      </div>
      <p><strong>[2020-2021]</strong></p>
      <p><strong>Story</strong>: Morningstar Investor (aka dot com) is Morningstar's staple product which helps individual investors manage their own portfolio by providing features such as watchlist, portfolio tracker and Morningstar research. I got an opportunity to help drive feature development when the executive team decided to modernize the experience.</p>
      <p><strong>Website</strong>: <a href="http://investor.morningstar.com/">Morningstar Investor</a></p>

      <h2>Morningstar Design System</h2>
      <div>
        <StaticImage src="../images/morningstar_design_system.png" alt="designsystem" className="gallery-image"/>
      </div>
      <p><strong>[2018 - 2020]</strong></p>
      <p><strong>Story</strong>: Morningstar is a financial services company with almost 60 plus, client facing, software products. This makes it hard to communicate design, code and user experience standards. Design system brings design and code standards across all Morningstar products.</p>
      <p><strong>Website</strong>: <a href="http://designsystem.morningstar.com/">Morningstar Design System</a></p>

      <h2>Spendout</h2>
      <div>
        <StaticImage src="../images/spendout.png" alt="spendout" className="gallery-image"/>
        <StaticImage src="../images/spendout2.png" alt="spendout2" className="gallery-image"/>
      </div>
      <p><strong>[2013]</strong></p>
      <p><strong>Story</strong>: While working at a design and development shop—Doejo, I was asked to lead a team responsibile for building an expense tracking tool.</p>
      <p><strong>Product</strong>: An expense tracking tool for contractors who are on sharing economy platforms such as Uber and Airbnb.</p>
      <p><strong>Highlights</strong>: We had a few hundred users and were close to signing a deal with Uber Chicago. I eventually left the product team to pursue a career as a developer shortly after.</p> 
      <p><strong>Media</strong>: <a href="http://www.chicagotribune.com/bluesky/originals/81828315-132.html">Chicago Tribune Coverage</a></p>

      <h2>Humble Pen</h2>
      <div>
        <StaticImage src="../images/humblepens.png" alt="humblepens" className="gallery-image"/>
        <StaticImage src="../images/humble_pen.jpg"alt="humblepen" className="gallery-image"/>
        <StaticImage src="../images/hp_sketch.png" width={700} alt="humblepen" className="gallery-image"/>
      </div>
      <p><strong>[2012 - 2015]</strong></p>
      <p><strong>Story</strong>: The project was inspired during my trip to Haiti in 2012. While searching for meaningful work, I stumbled upon a project which would support education for children in need and reignite one's love for writing. <i>One-for-One Giving</i> business model was fitting. During my trip to Haiti, I asked all the kids at the visiting school in Haiti to write a letter to me. As I read those inspiring letters, it was easy to conclude that kids all around the world are filled with joy, have creative passion and are curious thinkers. A 10-year-old kid wrote to me she aspires to become an astronaut when she grows up. Her letter reminded me there are no limits to dreaming bold, no matter where you are in the world. The project stalled several times during the journey. It was due to my lack of experience in building physical products, lack of knowledge in supply chain and interacting with industrial designers. Eventually, the product launched and it was a success but the project was not sustainable.</p>
      <p><strong>Product</strong>: Humble Pen was a hand-made designer pen made out of bamboo packaged in a beautiful box. Each pen also came with selected artist inspired postcards. For every sale, the product supported educational needs for children in Haiti, India and Cambodia.</p>
      <p><strong>Highlights</strong>: Project was shut down due to lack of focus, bad hiring and lack of fundamental economics in the supply chain of Humble Pen. Humble Pen also supported fair wages for artisans. This was naturally unsustainable in the long term. One-for-One Giving business model is not sustainable and I learned business and charity should be kept separate. Nonetheless, project was a success in its own right. Humble Pen supported education for almost 1000 kids.</p>
      <p><strong>Instagram</strong>: <a href="https://www.instagram.com/humblepen/">@humblepen</a></p>
      <p><strong>Video</strong>: <a href="https://vimeo.com/humblepen">@vimeovideos</a></p>

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

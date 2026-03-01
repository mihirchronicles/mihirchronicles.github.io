import * as React from "react"
import { Link } from "gatsby"
import Toggle from "./toggle"

import mehere from '../images/mehere.png'

const Layout = ({ location, title, children, isBlogPost = false }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  let
    header = (
      <div>
        <Link className="nav-link" to="/notes">Notes</Link>
        <Link className="nav-link" to="/essays">Essays</Link>
        <Link className="nav-link" to="/bookshelf">Books</Link>
        <Link className="nav-link" to="/work">Work</Link>
        <Link className="nav-link" to="/art">Art</Link>
        <Link className="nav-link" to="/about">Me</Link>
      </div>
    )

  return (
    <div className={`global-wrapper ${isBlogPost ? "wide-wrapper" : ""}`} data-is-root-path={isRootPath}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="bio-avatar-link">
          <img src={mehere}
            className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            width={32}
            height={32}
            quality={95}
            alt="The Mihir Chronicles"
          ></img>
        </Link>
        <Toggle />
      </div>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <hr></hr>
        <p><i>Drop me a note if you are curious to chat. Newsletter goes out once a year in December.</i></p>
        <div style={{ marginBottom: '1rem' }}>
          <a href="https://twitter.com/mihirchronicles"><strong>Twitter</strong></a>
          {` `}
          <span> | </span>
          <a href="https://www.linkedin.com/in/mihirchronicles/"><strong>Linkedin</strong></a>
          {` `}
          <span> | </span>
          <a href="https://eepurl.com/hRGv2D"><strong>Newsletter</strong></a>
        </div>
      </footer>
    </div>
  )
}

export default Layout

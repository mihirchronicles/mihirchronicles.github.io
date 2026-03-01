const React = require("react")

const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const isClient = typeof window !== 'undefined';
    if (!isClient) return 'light';

    const persistedPreference = window.localStorage.getItem('theme');
    if (persistedPreference) {
      return persistedPreference;
    }

    // Default to light mode as requested
    return 'light';
  }

  const colorMode = getInitialColorMode();

  if (colorMode === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
})()
  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setPreBodyComponents([<MagicScriptTag key="dark-mode-initial-state" />])
}

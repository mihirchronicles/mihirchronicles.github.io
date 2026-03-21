import * as React from "react"

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" fill="var(--color-dark)"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

const Toggle = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Check initial state set by SSR script
    if (document.body.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const handleToggle = () => {
    const newMode = !isDark;
    setIsDark(newMode);

    if (newMode) {
      document.body.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="theme-toggle-wrapper">
      {isDark ? <MoonIcon /> : <SunIcon />}
      <label className="theme-toggle-label" aria-label="Toggle Dark Mode">
        <input
          className="theme-toggle-input"
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
        />
        <span className="theme-toggle-slider" />
      </label>
    </div>
  )
}

export default Toggle;

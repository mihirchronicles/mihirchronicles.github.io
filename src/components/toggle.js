import * as React from "react"
import styled from "styled-components"

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  @media (max-width: 42rem) {
    padding-right: var(--spacing-2);
  }
`;

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

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: var(--color-primary-accent);
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-secondary-accent);
  transition: .4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: var(--color-light);
    transition: .4s;
    border-radius: 50%;
  }
`;

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
    <ToggleWrapper>
      {isDark ? <MoonIcon /> : <SunIcon />}
      <ToggleLabel aria-label="Toggle Dark Mode">
        <ToggleInput
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
        />
        <ToggleSlider />
      </ToggleLabel>
    </ToggleWrapper>
  )
}

export default Toggle;

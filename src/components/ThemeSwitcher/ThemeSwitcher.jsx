import { useEffect } from 'react';

import { useTheme } from '../../context/ThemeContext';

import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { theme, handleToggleTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div
      className="theme-switcher"
      onClick={handleToggleTheme}
    >
      {theme === 'light' ? (
        <IoMoonOutline className="theme-switcher__icon" />
      ) : (
        <IoMoon className="theme-switcher__icon" />
      )}
      <span className="theme-switcher__text">{theme} Theme</span>
    </div>
  );
};

export default ThemeSwitcher;

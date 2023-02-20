import SearchBar from '../SearchBar/SearchBar';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import './Header.css';

const Header = ({ handleSearch }) => {
  return (
    <header className="header">
      <SearchBar handleSearch={handleSearch} />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;

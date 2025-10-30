import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-bg-section transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-text-secondary" />
      ) : (
        <Sun size={20} className="text-text-secondary" />
      )}
    </button>
  );
};

export default ThemeToggle;
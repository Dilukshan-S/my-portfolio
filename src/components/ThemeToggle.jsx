import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="absolute top-4 right-4 z-50 text-xl p-2"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-900" />}
    </button>
  );
}

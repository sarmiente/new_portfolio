import { BiMoon, BiSun } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === 'dark';
  }

  return (
    <>
      <button onClick={() => setTheme(isDark() ? 'light' : 'dark')}>
        {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
      </button>
    </>
  );
}

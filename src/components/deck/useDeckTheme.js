import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'deck-theme';

function readStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

// Light by default; the choice is remembered per browser. A `forcedTheme`
// pins the deck to one theme and disables toggling (used by /ejemplos, whose
// slides still hardcode dark colors).
export function useDeckTheme(forcedTheme) {
  const [storedTheme, setStoredTheme] = useState(readStoredTheme);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, storedTheme);
    } catch {
      // Storage unavailable (private mode, blocked site data): keep it in memory only.
    }
  }, [storedTheme]);

  const toggleTheme = useCallback(() => {
    setStoredTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return {
    theme: forcedTheme ?? storedTheme,
    toggleTheme: forcedTheme ? null : toggleTheme,
  };
}

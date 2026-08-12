import { useCallback, useState } from 'react';

export function useDeckController(total) {
  const [index, setIndex] = useState(0);
  const clamp = useCallback((i) => Math.min(Math.max(i, 0), total - 1), [total]);
  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);
  const goTo = useCallback((target) => setIndex(clamp(target)), [clamp]);
  return { index, next, prev, goTo, total };
}

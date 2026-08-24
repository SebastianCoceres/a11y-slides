import { useCallback, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function useDeckRouter(total, basePath) {
  const navigate = useNavigate();
  const { slide } = useParams();
  const clamp = useCallback((i) => Math.min(Math.max(i, 0), total - 1), [total]);

  const parsed = Number.parseInt(slide, 10);
  const index = Number.isFinite(parsed) ? clamp(parsed - 1) : 0;

  // Tracks the latest requested index synchronously so consecutive next()/prev()
  // calls fired before React/router re-renders (e.g. a bouncing presenter clicker)
  // chain off each other instead of the same stale render-time `index`.
  const pendingIndexRef = useRef(index);
  useEffect(() => {
    pendingIndexRef.current = index;
  }, [index]);

  useEffect(() => {
    const isValid = Number.isFinite(parsed) && parsed === index + 1;
    if (!isValid) {
      navigate(`${basePath}/${index + 1}`, { replace: true });
    }
  }, [parsed, index, basePath, navigate]);

  const goTo = useCallback(
    (target) => {
      const clamped = clamp(target);
      pendingIndexRef.current = clamped;
      navigate(`${basePath}/${clamped + 1}`);
    },
    [navigate, basePath, clamp],
  );
  const next = useCallback(() => goTo(pendingIndexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(pendingIndexRef.current - 1), [goTo]);

  return { index, next, prev, goTo, total };
}

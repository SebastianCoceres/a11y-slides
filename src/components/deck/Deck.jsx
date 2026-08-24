import { Children, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LightRays from '../LightRays';
import { DeckControls } from './DeckControls';
import { DeckContext } from './DeckContext';
import { ProgressBar } from './ProgressBar';
import { Stack } from './Stack';
import { useDeckController } from './useDeckController';
import { useKeyboardNavigation } from './useKeyboardNavigation';

function flattenSlides(children) {
  const slides = [];
  for (const child of Children.toArray(children)) {
    if (child.type === Stack) {
      slides.push(...Children.toArray(child.props.children));
    } else {
      slides.push(child);
    }
  }
  return slides;
}

export function Deck({ children }) {
  const slides = useMemo(() => flattenSlides(children), [children]);
  const { index, next, prev, goTo, total } = useDeckController(slides.length);

  useKeyboardNavigation({ next, prev, goTo, total });

  const contextValue = useMemo(
    () => ({ index, next, prev, goTo, total }),
    [index, next, prev, goTo, total],
  );

  return (
    <DeckContext.Provider value={contextValue}>
      <div className="fixed inset-0 h-screen w-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LightRays raysColor="#2aa198" raysOrigin="top-center" rayLength={1.5} mouseInfluence={0.08} />
        </div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 z-10 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
        <DeckControls prev={prev} next={next} index={index} total={total} />
        <ProgressBar index={index} total={total} />
      </div>
    </DeckContext.Provider>
  );
}

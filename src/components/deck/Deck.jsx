import { Children, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LightRays from '../LightRays';
import { DeckControls } from './DeckControls';
import { DeckContext } from './DeckContext';
import { NOTES_CHANNEL } from './notesChannel';
import { ProgressBar } from './ProgressBar';
import { getSlideId } from './slideId';
import { SlideIndexOverlay } from './SlideIndexOverlay';
import { useDeckRouter } from './useDeckRouter';
import { useKeyboardNavigation } from './useKeyboardNavigation';

export function Deck({ children, basePath = '/presentacion' }) {
  const slides = useMemo(() => Children.toArray(children), [children]);
  const { index, next, prev, goTo, total } = useDeckRouter(slides.length, basePath);
  const [indexOpen, setIndexOpen] = useState(false);

  const topicIds = useMemo(() => slides.map((slide) => getSlideId(slide)), [slides]);
  const topicId = useMemo(() => {
    for (let i = index; i >= 0; i -= 1) {
      if (topicIds[i]) return topicIds[i];
    }
    return null;
  }, [index, topicIds]);

  useEffect(() => {
    const channel = new BroadcastChannel(NOTES_CHANNEL);
    const post = () => channel.postMessage({ type: 'slide', index, topicId });
    channel.onmessage = (event) => {
      if (event.data?.type === 'requestState') post();
    };
    post();
    return () => channel.close();
  }, [index, topicId]);

  useKeyboardNavigation({
    next,
    prev,
    goTo,
    total,
    indexOpen,
    onToggleIndex: () => setIndexOpen((open) => !open),
    onCloseIndex: () => setIndexOpen(false),
  });

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
        <SlideIndexOverlay
          open={indexOpen}
          slides={slides}
          currentIndex={index}
          onSelect={(target) => {
            goTo(target);
            setIndexOpen(false);
          }}
          onClose={() => setIndexOpen(false)}
        />
      </div>
    </DeckContext.Provider>
  );
}

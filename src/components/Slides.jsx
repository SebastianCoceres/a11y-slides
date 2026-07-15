import { Deck } from '@revealjs/react';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/moon.css'; // The default dark theme

import SlideTitle from './slides/SlideTitle';
import SlidePremise from './slides/SlidePremise';
import SlideUX from './slides/SlideUX';
import SlideUXStates from './slides/SlideUXStates';
import SlideDesign from './slides/SlideDesign';
import SlideAccessibility from './slides/SlideAccessibility';
import SlideProduct from './slides/SlideProduct';
import SlideEdgeCases from './slides/SlideEdgeCases';
import SlideChecklist from './slides/SlideChecklist';

export default function Slides() {
  return (
    <div className="w-full h-full">
      <Deck>
        <SlideTitle />
        <SlidePremise />
        <SlideUX />
        <SlideUXStates />
        <SlideDesign />
        <SlideAccessibility />
        <SlideProduct />
        <SlideEdgeCases />
        <SlideChecklist />
      </Deck>
    </div>
  );
}

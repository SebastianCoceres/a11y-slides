import { Deck } from '@/components/deck';

import SlideTitle from './slides/SlideTitle';
import SlidePremise from './slides/SlidePremise';
import SlideSituations from './slides/SlideSituations';
import SlideBusinessImpact from './slides/SlideBusinessImpact';
import SlideAccessibility from './slides/SlideAccessibility';
import SlideAdvancedPrinciples from './slides/SlideAdvancedPrinciples';
import SlideTools from './slides/SlideTools';

export default function Slides() {
  return (
    <div className="w-full h-full">
      <Deck>
        <SlideTitle />
        <SlidePremise />
        <SlideSituations />
        <SlideBusinessImpact />
        <SlideAccessibility />
        <SlideAdvancedPrinciples />
        <SlideTools />
      </Deck>
    </div>
  );
}

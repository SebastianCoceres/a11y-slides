import { Deck } from '@/components/deck';

import SlideTitle from './slides/SlideTitle';
import SlidePremise from './slides/SlidePremise';
import { SlideSituationsPartOne, SlideSituationsPartTwo } from './slides/SlideSituations';
import SlideBusinessImpact from './slides/SlideBusinessImpact';
import {
  SlideColorUsage,
  SlideTypography,
  SlideKeyboardNav,
  SlideAltText,
  SlideFocusTrap,
} from './slides/SlideAccessibility';
import SlideAdvancedPrinciples from './slides/SlideAdvancedPrinciples';
import SlideTools from './slides/SlideTools';

export default function Slides() {
  return (
    <div className="w-full h-full">
      <Deck>
        <SlideTitle />
        <SlidePremise />
        <SlideSituationsPartOne />
        <SlideSituationsPartTwo />
        <SlideBusinessImpact />
        <SlideColorUsage />
        <SlideTypography />
        <SlideKeyboardNav />
        <SlideAltText />
        <SlideFocusTrap />
        <SlideAdvancedPrinciples />
        <SlideTools />
      </Deck>
    </div>
  );
}

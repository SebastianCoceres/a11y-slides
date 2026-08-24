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

import { ColorContrastBad, ColorContrastGood } from '@/pages/examples/ColorContrast';
import { ColorBlindnessBad, ColorBlindnessGood } from '@/pages/examples/ColorBlindness';
import { TypographyBad, TypographyGood } from '@/pages/examples/Typography';
import { KeyboardNavBad, KeyboardNavGood } from '@/pages/examples/KeyboardNav';
import { AltTextBad, AltTextGood } from '@/pages/examples/AltText';
import { FocusTrapBad, FocusTrapGood } from '@/pages/examples/FocusTrap';

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
        <ColorContrastBad />
        <ColorContrastGood />
        <ColorBlindnessBad />
        <ColorBlindnessGood />
        <SlideTypography />
        <TypographyBad />
        <TypographyGood />
        <SlideKeyboardNav />
        <KeyboardNavBad />
        <KeyboardNavGood />
        <SlideAltText />
        <AltTextBad />
        <AltTextGood />
        <SlideFocusTrap />
        <FocusTrapBad />
        <FocusTrapGood />
        <SlideAdvancedPrinciples />
        <SlideTools />
      </Deck>
    </div>
  );
}

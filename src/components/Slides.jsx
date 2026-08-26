import { Deck } from "@/components/deck";

import SlideTitle from "./slides/SlideTitle";
import SlidePremise from "./slides/SlidePremise";
import SlideWcagStandard from "./slides/SlideWcagStandard";
import SlidePourPrinciples from "./slides/SlidePourPrinciples";
import SlideAccessBenefits from "./slides/SlideAccessBenefits";
import SlideSituations from "./slides/SlideSituations";
import SlideBusinessImpact from "./slides/SlideBusinessImpact";
import {
  SlideColorUsage,
  SlideTypography,
  SlideKeyboardNav,
  SlideAltText,
  SlideFocusTrap,
  SlideReducedMotion,
} from "./slides/SlideAccessibility";
import { SlideColorBlindnessTypes } from "./slides/SlideColorBlindnessTypes";
import {
  SlideAdvancedPrinciplesIntro,
  SlideCognitiveLoad,
  SlideMotorComplexity,
  SlideInteractionFatigue,
  SlideConsistency,
  SlideErrorPrevention,
  SlideErrorRecovery,
  SlideInclusiveDesign,
} from "./slides/SlideAdvancedPrinciples";
import SlideTools from "./slides/SlideTools";
import SlideClosing from "./slides/SlideClosing";

import {
  ColorContrastBad,
  ColorContrastGood,
} from "@/pages/examples/ColorContrast";
import { TypographyBad, TypographyGood } from "@/pages/examples/Typography";
import { KeyboardNavBad, KeyboardNavGood } from "@/pages/examples/KeyboardNav";
import { AltTextBad, AltTextGood } from "@/pages/examples/AltText";
import {
  FocusTrapBad,
  FocusTrapNoEscape,
  FocusTrapGood,
} from "@/pages/examples/FocusTrap";
import {
  ReducedMotionBad,
  ReducedMotionGood,
} from "@/pages/examples/ReducedMotion";
import {
  CognitiveLoadBad,
  CognitiveLoadGood,
  CognitiveLoadGrouped,
} from "@/pages/examples/CognitiveLoad";
import {
  MotorComplexityBad,
  MotorComplexityGood,
} from "@/pages/examples/MotorComplexity";
import {
  InteractionFatigueBad,
  InteractionFatigueGood,
} from "@/pages/examples/InteractionFatigue";
import { ConsistencyBad, ConsistencyGood } from "@/pages/examples/Consistency";
import {
  ErrorPreventionBad,
  ErrorPreventionGood,
} from "@/pages/examples/ErrorPrevention";
import {
  ErrorRecoveryBad,
  ErrorRecoveryGood,
} from "@/pages/examples/ErrorRecovery";
import {
  InclusiveDesignBad,
  InclusiveDesignGood,
} from "@/pages/examples/InclusiveDesign";

export default function Slides() {
  return (
    <div className="w-full h-full">
      <Deck>
        <SlideTitle />
        <SlidePremise />
        <SlideWcagStandard />
        <SlidePourPrinciples />
        <SlideAccessBenefits />
        <SlideSituations />
        <SlideBusinessImpact />
        <SlideColorUsage />
        <SlideColorBlindnessTypes />
        <ColorContrastBad />
        <ColorContrastGood />
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
        <FocusTrapNoEscape />
        <FocusTrapGood />
        <SlideReducedMotion />
        <ReducedMotionBad />
        <ReducedMotionGood />
        <SlideAdvancedPrinciplesIntro />
        <SlideCognitiveLoad />
        <CognitiveLoadBad />

        <CognitiveLoadGrouped />
        <CognitiveLoadGood />
        <SlideMotorComplexity />
        <MotorComplexityBad />
        <MotorComplexityGood />
        <SlideInteractionFatigue />
        <InteractionFatigueBad />
        <InteractionFatigueGood />
        <SlideConsistency />
        <ConsistencyBad />
        <ConsistencyGood />
        <SlideErrorPrevention />
        <ErrorPreventionBad />
        <ErrorPreventionGood />
        <SlideErrorRecovery />
        <ErrorRecoveryBad />
        <ErrorRecoveryGood />
        <SlideInclusiveDesign />
        <InclusiveDesignBad />
        <InclusiveDesignGood />
        <SlideTools />
        <SlideClosing />
      </Deck>
    </div>
  );
}

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
import {
  SlideMediaAlternatives,
  SlideSemanticStructure,
  SlideMeaningfulSequence,
  SlideSensoryCharacteristics,
  SlideInputPurpose,
  SlideAudioControl,
  SlideTextResize,
  SlideImagesOfText,
  SlideReflow,
  SlideNonTextContrast,
  SlideTextSpacing,
  SlideHoverContent,
} from "./slides/SlidePerceptible";
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

import { AltTextBad, AltTextGood } from "@/pages/examples/AltText";
import {
  MediaAlternativesBad,
  MediaAlternativesGood,
} from "@/pages/examples/MediaAlternatives";
import {
  SemanticStructureBad,
  SemanticStructureGood,
} from "@/pages/examples/SemanticStructure";
import {
  MeaningfulSequenceBad,
  MeaningfulSequenceGood,
} from "@/pages/examples/MeaningfulSequence";
import {
  SensoryCharacteristicsBad,
  SensoryCharacteristicsGood,
} from "@/pages/examples/SensoryCharacteristics";
import {
  InputPurposeBad,
  InputPurposeGood,
} from "@/pages/examples/InputPurpose";
import {
  ColorContrastBad,
  ColorContrastGood,
} from "@/pages/examples/ColorContrast";
import {
  AudioControlBad,
  AudioControlGood,
} from "@/pages/examples/AudioControl";
import { TypographyBad, TypographyGood } from "@/pages/examples/Typography";
import { TextResizeBad, TextResizeGood } from "@/pages/examples/TextResize";
import {
  ImagesOfTextBad,
  ImagesOfTextGood,
} from "@/pages/examples/ImagesOfText";
import { ReflowBad, ReflowGood } from "@/pages/examples/Reflow";
import {
  NonTextContrastBad,
  NonTextContrastGood,
} from "@/pages/examples/NonTextContrast";
import {
  TextSpacingBad,
  TextSpacingGood,
} from "@/pages/examples/TextSpacing";
import {
  HoverContentBad,
  HoverContentGood,
} from "@/pages/examples/HoverContent";
import { KeyboardNavBad, KeyboardNavGood } from "@/pages/examples/KeyboardNav";
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

        {/* 1. Perceptible */}
        <SlideAltText />
        <AltTextBad />
        <AltTextGood />
        <SlideMediaAlternatives />
        <MediaAlternativesBad />
        <MediaAlternativesGood />
        <SlideSemanticStructure />
        <SemanticStructureBad />
        <SemanticStructureGood />
        <SlideMeaningfulSequence />
        <MeaningfulSequenceBad />
        <MeaningfulSequenceGood />
        <SlideSensoryCharacteristics />
        <SensoryCharacteristicsBad />
        <SensoryCharacteristicsGood />
        <SlideInputPurpose />
        <InputPurposeBad />
        <InputPurposeGood />
        <SlideColorUsage />
        <ColorContrastBad />
        <ColorContrastGood />
        <SlideColorBlindnessTypes />
        <SlideAudioControl />
        <AudioControlBad />
        <AudioControlGood />
        <SlideTypography />
        <TypographyBad />
        <TypographyGood />
        <SlideTextResize />
        <TextResizeBad />
        <TextResizeGood />
        <SlideImagesOfText />
        <ImagesOfTextBad />
        <ImagesOfTextGood />
        <SlideReflow />
        <ReflowBad />
        <ReflowGood />
        <SlideNonTextContrast />
        <NonTextContrastBad />
        <NonTextContrastGood />
        <SlideTextSpacing />
        <TextSpacingBad />
        <TextSpacingGood />
        <SlideHoverContent />
        <HoverContentBad />
        <HoverContentGood />

        {/* 2. Operable (pendiente de completar en la próxima tanda) */}
        <SlideKeyboardNav />
        <KeyboardNavBad />
        <KeyboardNavGood />
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

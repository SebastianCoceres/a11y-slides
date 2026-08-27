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
  SlideSingleCharShortcuts,
  SlideAdjustableTimeout,
  SlidePausableCarousel,
  SlideThreeFlashes,
  SlideReducedMotion,
  SlideSkipLinks,
  SlidePageTitle,
  SlideFocusOrder,
  SlideLinkPurpose,
  SlideMultipleWays,
  SlideDescriptiveLabels,
  SlideVisibleFocus,
  SlideFocusNotObscured,
  SlidePointerGestures,
  SlidePointerCancellation,
  SlideLabelInName,
  SlideMotionActivation,
  SlideDragMovements,
} from "./slides/SlideAccessibility";
import {
  SlideMediaAlternatives,
  SlideSemanticStructure,
  SlideMeaningfulSequence,
  SlideSensoryCharacteristics,
  SlideOrientation,
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
  SlidePageLanguage,
  SlidePartsLanguage,
  SlideOnFocusChange,
  SlideOnInputChange,
  SlideConsistentNavigation,
  SlideConsistency,
  SlideConsistentHelp,
  SlideErrorPrevention,
  SlideAnticipatoryHelp,
  SlideErrorSuggestion,
  SlideConfirmDestructive,
  SlideRedundantEntry,
  SlideAccessibleAuth,
  SlideNameRoleValue,
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
  SingleCharShortcutsBad,
  SingleCharShortcutsGood,
} from "@/pages/examples/SingleCharShortcuts";
import {
  AdjustableTimeoutBad,
  AdjustableTimeoutGood,
} from "@/pages/examples/AdjustableTimeout";
import {
  PausableCarouselBad,
  PausableCarouselGood,
} from "@/pages/examples/PausableCarousel";
import {
  ReducedMotionBad,
  ReducedMotionGood,
} from "@/pages/examples/ReducedMotion";
import { SkipLinksBad, SkipLinksGood } from "@/pages/examples/SkipLinks";
import { PageTitleBad, PageTitleGood } from "@/pages/examples/PageTitle";
import { FocusOrderBad, FocusOrderGood } from "@/pages/examples/FocusOrder";
import { LinkPurposeBad, LinkPurposeGood } from "@/pages/examples/LinkPurpose";
import {
  MultipleWaysBad,
  MultipleWaysGood,
} from "@/pages/examples/MultipleWays";
import {
  DescriptiveLabelsBad,
  DescriptiveLabelsGood,
} from "@/pages/examples/DescriptiveLabels";
import {
  VisibleFocusBad,
  VisibleFocusGood,
} from "@/pages/examples/VisibleFocus";
import {
  FocusNotObscuredBad,
  FocusNotObscuredGood,
} from "@/pages/examples/FocusNotObscured";
import {
  PointerGesturesBad,
  PointerGesturesGood,
} from "@/pages/examples/PointerGestures";
import {
  PointerCancellationBad,
  PointerCancellationGood,
} from "@/pages/examples/PointerCancellation";
import { LabelInNameBad, LabelInNameGood } from "@/pages/examples/LabelInName";
import {
  DragMovementsBad,
  DragMovementsGood,
} from "@/pages/examples/DragMovements";
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
import {
  PartsLanguageBad,
  PartsLanguageGood,
} from "@/pages/examples/PartsLanguage";
import {
  OnFocusChangeBad,
  OnFocusChangeGood,
} from "@/pages/examples/OnFocusChange";
import {
  OnInputChangeBad,
  OnInputChangeGood,
} from "@/pages/examples/OnInputChange";
import {
  ConsistentNavigationBad,
  ConsistentNavigationGood,
} from "@/pages/examples/ConsistentNavigation";
import { ConsistencyBad, ConsistencyGood } from "@/pages/examples/Consistency";
import {
  ConsistentHelpBad,
  ConsistentHelpGood,
} from "@/pages/examples/ConsistentHelp";
import {
  ErrorPreventionBad,
  ErrorPreventionGood,
} from "@/pages/examples/ErrorPrevention";
import {
  AnticipatoryHelpBad,
  AnticipatoryHelpGood,
} from "@/pages/examples/AnticipatoryHelp";
import {
  ErrorSuggestionBad,
  ErrorSuggestionGood,
} from "@/pages/examples/ErrorSuggestion";
import {
  ConfirmDestructiveBad,
  ConfirmDestructiveGood,
} from "@/pages/examples/ConfirmDestructive";
import {
  RedundantEntryBad,
  RedundantEntryGood,
} from "@/pages/examples/RedundantEntry";
import {
  AccessibleAuthBad,
  AccessibleAuthGood,
} from "@/pages/examples/AccessibleAuth";
import {
  NameRoleValueBad,
  NameRoleValueGood,
} from "@/pages/examples/NameRoleValue";
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
        <SlideOrientation />
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

        {/* 2. Operable */}
        <SlideKeyboardNav />
        <KeyboardNavBad />
        <KeyboardNavGood />
        <SlideFocusTrap />
        <FocusTrapBad />
        <FocusTrapNoEscape />
        <FocusTrapGood />
        <SlideSingleCharShortcuts />
        <SingleCharShortcutsBad />
        <SingleCharShortcutsGood />
        <SlideAdjustableTimeout />
        <AdjustableTimeoutBad />
        <AdjustableTimeoutGood />
        <SlidePausableCarousel />
        <PausableCarouselBad />
        <PausableCarouselGood />
        <SlideThreeFlashes />
        <SlideReducedMotion />
        <ReducedMotionBad />
        <ReducedMotionGood />
        <SlideSkipLinks />
        <SkipLinksBad />
        <SkipLinksGood />
        <SlidePageTitle />
        <PageTitleBad />
        <PageTitleGood />
        <SlideFocusOrder />
        <FocusOrderBad />
        <FocusOrderGood />
        <SlideLinkPurpose />
        <LinkPurposeBad />
        <LinkPurposeGood />
        <SlideMultipleWays />
        <MultipleWaysBad />
        <MultipleWaysGood />
        <SlideDescriptiveLabels />
        <DescriptiveLabelsBad />
        <DescriptiveLabelsGood />
        <SlideVisibleFocus />
        <VisibleFocusBad />
        <VisibleFocusGood />
        <SlideFocusNotObscured />
        <FocusNotObscuredBad />
        <FocusNotObscuredGood />
        <SlidePointerGestures />
        <PointerGesturesBad />
        <PointerGesturesGood />
        <SlidePointerCancellation />
        <PointerCancellationBad />
        <PointerCancellationGood />
        <SlideLabelInName />
        <LabelInNameBad />
        <LabelInNameGood />
        <SlideMotionActivation />
        <SlideDragMovements />
        <DragMovementsBad />
        <DragMovementsGood />
        <SlideMotorComplexity />
        <MotorComplexityBad />
        <MotorComplexityGood />

        {/* 3. Comprensible */}
        <SlidePageLanguage />
        <SlidePartsLanguage />
        <PartsLanguageBad />
        <PartsLanguageGood />
        <SlideOnFocusChange />
        <OnFocusChangeBad />
        <OnFocusChangeGood />
        <SlideOnInputChange />
        <OnInputChangeBad />
        <OnInputChangeGood />
        <SlideConsistentNavigation />
        <ConsistentNavigationBad />
        <ConsistentNavigationGood />
        <SlideConsistency />
        <ConsistencyBad />
        <ConsistencyGood />
        <SlideConsistentHelp />
        <ConsistentHelpBad />
        <ConsistentHelpGood />
        <SlideErrorPrevention />
        <ErrorPreventionBad />
        <ErrorPreventionGood />
        <SlideAnticipatoryHelp />
        <AnticipatoryHelpBad />
        <AnticipatoryHelpGood />
        <SlideErrorSuggestion />
        <ErrorSuggestionBad />
        <ErrorSuggestionGood />
        <SlideConfirmDestructive />
        <ConfirmDestructiveBad />
        <ConfirmDestructiveGood />
        <SlideRedundantEntry />
        <RedundantEntryBad />
        <RedundantEntryGood />
        <SlideAccessibleAuth />
        <AccessibleAuthBad />
        <AccessibleAuthGood />

        {/* 4. Robusto */}
        <SlideNameRoleValue />
        <NameRoleValueBad />
        <NameRoleValueGood />
        <SlideErrorRecovery />
        <ErrorRecoveryBad />
        <ErrorRecoveryGood />

        {/* Más allá de lo básico */}
        <SlideAdvancedPrinciplesIntro />
        <SlideCognitiveLoad />
        <CognitiveLoadBad />
        <CognitiveLoadGrouped />
        <CognitiveLoadGood />
        <SlideInteractionFatigue />
        <InteractionFatigueBad />
        <InteractionFatigueGood />
        <SlideInclusiveDesign />
        <InclusiveDesignBad />
        <InclusiveDesignGood />

        <SlideTools />
        <SlideClosing />
      </Deck>
    </div>
  );
}

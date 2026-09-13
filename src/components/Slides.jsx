import { Deck } from "@/components/deck";

import SlideTitle from "./slides/SlideTitle";
import SlidePremise from "./slides/SlidePremise";
import SlideWcagStandard from "./slides/SlideWcagStandard";
import SlidePourPrinciples from "./slides/SlidePourPrinciples";
import SlideAccessBenefits from "./slides/SlideAccessBenefits";
import SlideSituations from "./slides/SlideSituations";
import SlideBusinessImpact from "./slides/SlideBusinessImpact";
import {
  SlideAdvancedPrinciplesIntro,
  SlideCognitiveLoad,
  SlideInteractionFatigue,
  SlideInclusiveDesign,
} from "./slides/SlideAdvancedPrinciples";
import SlideTools from "./slides/SlideTools";
import SlideClosing from "./slides/SlideClosing";

export default function Slides() {
  return (
    <div className="w-full h-full">
      <Deck>
        <SlideTitle topicId="title" />
        <SlidePremise topicId="premise" />
        <SlideWcagStandard topicId="wcagStandard" />
        <SlidePourPrinciples topicId="pourPrinciples" />
        <SlideAccessBenefits topicId="accessBenefits" />
        <SlideSituations topicId="situations" />
        <SlideBusinessImpact topicId="businessImpact" />

        {/* Más allá de lo básico — los únicos conceptos que no son un criterio WCAG numerado */}
        <SlideAdvancedPrinciplesIntro topicId="advancedPrinciplesIntro" />
        <SlideCognitiveLoad topicId="cognitiveLoad" />
        <SlideInteractionFatigue topicId="interactionFatigue" />
        <SlideInclusiveDesign topicId="inclusiveDesign" />

        <SlideTools topicId="tools" />
        <SlideClosing topicId="closing" />
      </Deck>
    </div>
  );
}

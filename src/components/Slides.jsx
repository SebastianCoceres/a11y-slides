import { Deck } from "@/components/deck";

import SlideTitle from "./slides/SlideTitle";
import SlidePremise from "./slides/SlidePremise";
import SlideWcagStandard from "./slides/SlideWcagStandard";
import {
  SlidePrinciplePerceptible,
  SlidePrincipleOperable,
  SlidePrincipleComprehensible,
  SlidePrincipleRobust,
} from "./slides/SlidePourPrinciples";
import SlideAccessBenefits from "./slides/SlideAccessBenefits";
import SlideSituations from "./slides/SlideSituations";
import SlideBusinessImpact from "./slides/SlideBusinessImpact";
import {
  SlideAdvancedPrinciplesIntro,
  SlideCognitiveLoad,
  SlideInteractionFatigue,
  SlideInclusiveDesign,
} from "./slides/SlideAdvancedPrinciples";
import {
  SlideToolsDevTools,
  SlideToolsLighthouse,
  SlideToolsA11yEngines,
  SlideToolsTesting,
} from "./slides/SlideTools";
import {
  SlideSecondAudience,
  SlideSecondAudienceMechanism,
  SlideSecondAudienceTools,
  SlideSecondAudienceCodeProximity,
  SlideSecondAudienceWebmcp,
  SlideSecondAudienceWebmcpFallback,
} from "./slides/SlideSecondAudience";
import SlideClosing from "./slides/SlideClosing";

export default function Slides() {
  return (
    <div className="w-full h-full">
      <Deck>
        <SlideTitle topicId="title" />
        <SlidePremise topicId="premise" />
        <SlideWcagStandard topicId="wcagStandard" />
        <SlideAccessBenefits topicId="accessBenefits" />
        <SlideSituations topicId="situations" />
        <SlideBusinessImpact topicId="businessImpact" />

        {/* Principios POUR — los cuatro principios de la accesibilidad web */}
        <SlidePrinciplePerceptible topicId="principlePerceptible" />
        <SlidePrincipleOperable topicId="principleOperable" />
        <SlidePrincipleComprehensible topicId="principleComprehensible" />
        <SlidePrincipleRobust topicId="principleRobust" />

        <SlideToolsDevTools topicId="toolsDevTools" />
        <SlideToolsLighthouse topicId="toolsLighthouse" />
        <SlideToolsA11yEngines topicId="toolsA11yEngines" />
        <SlideToolsTesting topicId="toolsTesting" />

        <SlideSecondAudience topicId="secondAudience" />
        <SlideSecondAudienceMechanism topicId="secondAudienceMechanism" />
        <SlideSecondAudienceTools topicId="secondAudienceTools" />
        <SlideSecondAudienceCodeProximity topicId="secondAudienceCodeProximity" />
        <SlideSecondAudienceWebmcp topicId="secondAudienceWebmcp" />
        <SlideSecondAudienceWebmcpFallback topicId="secondAudienceWebmcpFallback" />

        {/* Más allá de lo básico — los únicos conceptos que no son un criterio WCAG numerado */}
        <SlideAdvancedPrinciplesIntro topicId="advancedPrinciplesIntro" />
        <SlideCognitiveLoad topicId="cognitiveLoad" />
        <SlideInteractionFatigue topicId="interactionFatigue" />
        <SlideInclusiveDesign topicId="inclusiveDesign" />

        <SlideClosing topicId="closing" />
      </Deck>
    </div>
  );
}

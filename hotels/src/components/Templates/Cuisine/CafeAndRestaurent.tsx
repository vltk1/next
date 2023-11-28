import { CategorySections } from "../../Organisms/CategorySections";
import { ProductFeatureSimple } from "../../Molecules/ProductFeatures/ProductFeatureSimple";
import { CategorySectionSimple } from "../../Organisms/CategorySections/CategorySectionSimple";
import { ContentSections } from "../../Organisms/ContentSections";
import { ContentSectionBasic } from "../../Organisms/ContentSections/ContentSectionBasic";
import { ContentSectionDouble } from "../../Organisms/ContentSections/ContentSectionDouble";
import { HeaderSectionSimple } from "../../Organisms/HeaderSections/HeaderSectionSimple";
import { HeroSectionBasic } from "../../Organisms/HeroSections/HeroSectionBasic";

export function CafeAndRestaurent() {
  return (
    <main>
      <HeroSectionBasic />
      <HeaderSectionSimple bottom={78} left={20} right={20} top={78} />
      <ContentSections>
        <ContentSectionBasic />
        <ContentSectionDouble />
      </ContentSections>
      <CategorySections>
        <CategorySectionSimple />
      </CategorySections>
      <ProductFeatureSimple />
    </main>
  );
}

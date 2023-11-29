"use client";

import { Tabs } from "@components/Molecules/Navigation/Tabs";
import { ProductFeatureSimple } from "@components/Molecules/ProductFeatures/ProductFeatureSimple";
import { CategorySections } from "@components/Organisms/CategorySections";
import { CategorySectionSimple } from "@components/Organisms/CategorySections/CategorySectionSimple";
import { ContentSections } from "@components/Organisms/ContentSections";
import { ContentSectionBasic } from "@components/Organisms/ContentSections/ContentSectionBasic";
import { ContentSectionDouble } from "@components/Organisms/ContentSections/ContentSectionDouble";
import { HeaderSectionSimple } from "@components/Organisms/HeaderSections/HeaderSectionSimple";
import { HeroSectionBasic } from "@components/Organisms/HeroSections/HeroSectionBasic";




export default function index() {
  return (
    <main>
      

    <HeroSectionBasic />
    <HeaderSectionSimple bottom={78} left={20} right={20} top={78} />
    <ContentSections>
      <ContentSectionBasic />
      <ContentSectionDouble />
    </ContentSections>
    <Tabs />
    <CategorySections>
      <CategorySectionSimple />
    </CategorySections>
    <ProductFeatureSimple />
  </main>
  );
}

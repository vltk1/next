"use client";

import { ContactSectionSimple } from "@components/Organisms/CategorySections/CategorySectionSimple";
import { ContentSections } from "@components/Organisms/ContentSections";
import { ContentSectionBasic } from "@components/Organisms/ContentSections/ContentSectionBasic";
import { ContentSectionDouble } from "@components/Organisms/ContentSections/ContentSectionDouble";
import { HeaderSectionSimple } from "@components/Organisms/HeaderSections/HeaderSectionSimple";
import { HeroSectionBasic } from "@components/Organisms/HeroSections/HeroSectionBasic";

export default function Inko_channel() {
  return (
    <>
      <main>
        <HeroSectionBasic />
        <HeaderSectionSimple bottom={78} left={20} right={20} top={78} />
        <ContentSections>
          <ContentSectionBasic />
          <ContentSectionDouble />
        </ContentSections>
        <ContactSectionSimple />
      </main>
    </>
  );
}

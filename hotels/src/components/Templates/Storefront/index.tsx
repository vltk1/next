import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Font } from "../../Atoms/Font";

import { ReactNode } from "react";
import { Titles } from "../../Atoms/Typography";
import { Paragraphs } from "../../Atoms/Typography/Paragraph";
import { ButtonBasic } from "../../Atoms/Button/ButtonBasic";
import { Navbars } from "../../Molecules/Navigation/Navbars";
import { HeroSimple } from "../../Organisms/HeroSections/HeroSectionSimple";
import { Three } from "../../Organisms/CategorySections/ContactSectionSimple";
import { CardList } from "../../Molecules/Cards/CardList";
import { Card } from "../../Molecules/Cards/Card";
import { CarouselBasic } from "../../Molecules/Carousels/CarouselBasic";

export function Storefront() {
  return (
    <>
      <header className="flex bg-[gray]">
        <Navbars />
      </header>
      <main>
        <section>
          <CarouselBasic title="Job Postings" />
          <CardList className="flex border-2">
              <Card
                currency="UC"
                description="With image backgrounds"
                name="Desk and Office"
                price={25}
                src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
                width={200}
              />
              <Card
                currency="UC"
                description="With image backgrounds"
                name="Desk and Office"
                price={25}
                src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
                width={200}
              />
              <Card
                currency="UC"
                description="With image backgrounds"
                name="Desk and Office"
                price={25}
                src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
                width={200}
              />
              <Card
                currency="UC"
                description="With image backgrounds"
                name="Desk and Office"
                price={25}
                src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
                width={200}
              />
              <Card
                currency="UC"
                description="With image backgrounds"
                name="Desk and Office"
                price={25}
                src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
                width={200}
              />
              <Card
                currency="UC"
                description="With image backgrounds"
                name="Desk and Office"
                price={25}
                src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
                width={200}
              />
          </CardList>
        </section>
        <HeroSimple />

        <Three description="" title="Job Postings" />
        <HeroSimple />
      </main>
    </>
  );
}

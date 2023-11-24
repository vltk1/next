import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Font } from "../../Atoms/Font";

import { ReactNode } from "react";
import { Titles } from "../../Atoms/Typography/Titles";
import { Paragraphs } from "../../Atoms/Typography/Paragraphs";
import { ButtonBasic } from "../../Atoms/Button/ButtonBasic";
import { Navbars } from "../../Molecules/Navigation/Navbars";
import { HeroSimple } from "../../Organisms/Hero/HeroSimple";
import { Three } from "../../Organisms/Category/Three";
import { CardList } from "../../Molecules/Cards/CardList";
import { Card } from "../../Molecules/Cards/Card";
import { CarouselBasic } from "../../Molecules/Carousels/CarouselBasic";

export function Storefront({ title, description, button = "" }: any) {
  return (
    <>
      <main>
        <Navbars title="Job Postings" />

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

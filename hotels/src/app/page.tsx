"use client";
import Axis from '@components/Atoms/Axis';
import { Dividers } from "@components/Atoms/Dividers/Dividers";
import { Font } from "@components/Atoms/Font";

import { ReactNode } from "react";
import { Titles } from "@components/Atoms/Typography/Titles";
import { Paragraphs } from "@components/Atoms/Typography/Paragraphs";
import { ButtonBasic } from "@components/Atoms/Button/ButtonBasic";
import { Navbars } from "@components/Molecules/Navigation/Navbars";
import { HeroSimple } from "@components/Organisms/HeroSections/HeroSectionSimple";
import { Three } from "@components/Organisms/CategorySections/ContactSectionSimple";
import { CardList } from "@components/Molecules/Cards/CardList";
import { Card } from "@components/Molecules/Cards/Card";
import { CarouselBasic } from "@components/Molecules/Carousels/CarouselBasic";
// With dynamic import
import ExportedImage from "next-image-export-optimizer";


export default function Inko_channel() {
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

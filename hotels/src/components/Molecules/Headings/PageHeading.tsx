import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Font } from "../../Atoms/Font";
import { ReactNode } from "react";
import { Titles } from "../../Atoms/Typography/Titles";
import { Paragraphs } from "../../Atoms/Typography/Paragraphs";

interface Card {
  src: string;
  description: string;
  title: string;
  text: string;
  title_font: number[];
  text_font: number[];
  button: ReactNode;
}

export function PageHeading({ title, description, button = "" }: Card) {
  return (
    <>
      <div>
        <section className="flex justify-start items-center">
          <hgroup className="text-xl grow">
            <Titles
              bold={7}
              color="#097eeb"
              label="Data to enrich your online business"
              line={4}
              size={38}
              tag="h2"
            />
            <Paragraphs
              bold={4}
              className=""
              color="#405fb0"
              label="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
              line={2}
              size={18}
              tag="p"
            />
          </hgroup>
          {button}
        </section>
        <Dividers color="#009f3a" />
      </div>
    </>
  );
}

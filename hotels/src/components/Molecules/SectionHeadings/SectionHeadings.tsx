import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Button } from "../../Atoms/Button/Button";
import { Font } from "../../Atoms/Font";
import { Typography } from "../../Atoms/Typography/Typography";
import { ReactNode } from "react";

interface Card {
  src: string;
  description: string;
  title: string;
  text: string;
  title_font: number[];
  text_font: number[];
  button: ReactNode;
}

export function SectionHeadings({ title, description, button="" }: Card) {
  return (
    <>
      <div>
        <section className="flex justify-start items-center">
          <hgroup className="text-xl grow">
            <Typography
              bold={7}
              color="#ab0fff"
              label={title}
              line={4}
              size={22}
              tag="h3"
            />
            <p>{description}</p>
          </hgroup>
          {button}
        </section>
        <Dividers color="#009f3a" />
      </div>
    </>
  );
}

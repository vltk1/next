import { Dividers } from "../../Atoms/Dividers/Dividers";
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

export function SectionHeading({ title, description, button = "" }: Card) {
  return (
    <>
      <div>
        <section className="flex justify-start items-center">
          <hgroup className="text-xl grow">
           
          </hgroup>
          {button}
        </section>
        <Dividers color="#009f3a" />
      </div>
    </>
  );
}

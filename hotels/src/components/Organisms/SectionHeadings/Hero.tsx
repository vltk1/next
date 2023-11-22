import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Button } from "../../Atoms/Button/Button";
import { Font } from "../../Atoms/Font";

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

export function Hero({ title, description, button="" }: Card) {
  return (
    <>
      <article>
    
    <p>{description}</p>
      </article>
    </>
  );
}

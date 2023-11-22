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

export function Hero({ title, description, button="" }: Card) {
  return (
    <>
      <article>
      <Typography
      bold={7}
      className=""
      color="#2b85ab"
      label={title}
      line={4}
      size={48}
      tag="h2"
    />
    <p>{description}</p>
      </article>
    </>
  );
}

import { Children } from "react";
import { Font } from "../../Atoms/Font";
import { Card } from "./Card";

interface Card {
  src: string;
  title: string;
  text: string;
  title_font: number[];
  text_font: number[];
}

export function CardList({children, className}: any) {
  return (
    <>
      <dl className={`relative ${className} mx-auto`}>
       {children}
       <hr className="clear-both w-0 h-0 invisible" />
      </dl>
    </>
  );
}

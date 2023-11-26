import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Font } from "../../Atoms/Font";

import { ReactNode } from "react";
import { Titles } from "../../Atoms/Typography/Titles";
import { Paragraphs } from "../../Atoms/Typography/Paragraphs";
import { ButtonBasic } from "../../Atoms/Button/ButtonBasic";
import { CardList } from "../../Molecules/Cards/CardList";
import { Card } from "../../Molecules/Cards/Card";
import { SubTitles } from "../../Atoms/Typography/SubTitles";

export function FeatureSectionSimple({classList, className }: any) {
  return (
    <>
      <article className="">
        <SubTitles
          bold={1}
          className=""
          color="#343e7e"
          label="Qui officia ullamco cupidatat laboris Lorem."
          line={1}
          size={32}
          tag="h2"
        />
        <CardList className={`w-[800px] ${classList}`} >
            <Card
              currency="UC"
              description="With image backgrounds"
              name="Desk and Office"
              price={25}
              src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
              width={200}
              className={`float-left w-[200px] h-[400px] border overflow-hidden ${className}`}
            />
            <Card
              currency="UC"
              description="With image backgrounds"
              name="Desk and Office"
              price={25}
              src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
              width={200}
              className="float-left w-[600px] h-[200px] border overflow-hidden"
            />
            <Card
              currency="UC"
              description="With image backgrounds"
              name="Desk and Office"
              price={25}
              src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
              width={200}
              className="float-left w-[600px] h-[200px] border overflow-hidden"
            />
        </CardList>
      </article>
    </>
  );
}

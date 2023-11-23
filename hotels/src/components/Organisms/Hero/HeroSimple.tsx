import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Font } from "../../Atoms/Font";

import { ReactNode } from "react";
import { Titles } from "../../Atoms/Typography/Titles";
import { Paragraphs } from "../../Atoms/Typography/Paragraphs";
import { ButtonBasic } from "../../Atoms/Button/ButtonBasic";

export function HeroSimple({ title, description, button = "" }: Hero) {
  return (
    <>
      <article className="flex justify-center items-center min-h-full flex-wrap">
        <Titles
          bold={7}
          color="#23586b"
          label="Amet laborum occaecat nostrud laboris cillum aute nulla ut aute cupidatat."
          line={4}
          size={54}
          tag="h2"
          className="mb-[40px]"
        />
        <Paragraphs
          bold={4}
          color="#1e4a6e"
          label="Eu anim laboris amet magna nisi aute exercitation. Non irure exercitation ea minim non. Aliqua fugiat magna culpa sit duis ad cillum consectetur consequat exercitation ipsum. Ea voluptate nisi aliqua aliqua quis nisi. Tempor sit non ea enim nostrud quis irure occaecat dolore quis minim tempor pariatur nisi. Reprehenderit velit cupidatat elit id ut sunt do dolore cillum esse do.Ipsum exercitation aliqua veniam mollit qui magna veniam. Sint veniam enim velit et cillum nulla duis do pariatur do. Reprehenderit anim consequat sit cillum. Lorem enim ipsum anim qui officia. Ut ea mollit nostrud adipisicing fugiat ipsum irure tempor labore.Enim nisi nisi ad commodo veniam esse velit amet commodo nulla nulla adipisicing minim irure. Anim consectetur reprehenderit ut ad irure labore minim incididunt quis proident cillum nostrud. Nulla anim incididunt enim qui."
          line={3}
          size={20}
          tag="p"
          className="mb-[30px]"
        />
        <div className="flex">
          <ButtonBasic
            bgcolor="#1e41fa"
            color="#ebedfa"
            label="Get started"
            className="mx-[20px]"
          />
          <ButtonBasic
            bgcolor=""
            color="#253498"
            label="Learn more →"
            className="mx-[20px]"
          />
        </div>
      </article>
    </>
  );
}

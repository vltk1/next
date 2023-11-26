import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Font } from "../../Atoms/Font";

import { ReactNode } from "react";
import { Titles } from "../../Atoms/Typography/Titles";
import { Paragraphs } from "../../Atoms/Typography/Paragraphs";
import { ButtonBasic } from "../../Atoms/Button/ButtonBasic";
import Img from "next-image-export-optimizer";

export function TestimonialSectionSimple({ width }: any) {
  return (
    <>
      <div className="relative flex">
        <div className="relative min-w-full">
          <Img src="/images/mainvisual.jpg" alt="" width={1920} height={945} />
        </div>
        <div className={`relative min-w-full right-[100%] z-10 px-[15px]`}>
          <div className="conatiner flex justify-center flex-wrap min-h-full items-center max-w-[860rem] mx-auto">
            <div className="text-left">
              <Paragraphs
                bold={4}
                color="#1e4a6e"
                label={<>A Unique, Intangible Qual ity.</>}
                line={3}
                size={20}
                tag="p"
                className="mb-[20px] space"
              />
              <Titles
                bold={4}
                color="#23586b"
                label={"Perfect Match for\n Elegant \nImpression"}
                line={1.2}
                size={66}
                tag="h2"
                className="mb-[40rem]"
              />
              <div className="inline-flex">
                <ButtonBasic
                  bgcolor="#ffffff"
                  color="#222222"
                  fontSize={16}
                  height={43}
                  label="Shop Collection"
                  weight={500}
                  width={176}
                />
              </div>
            </div>
          </div>
          <style jsx>{`
          .conatiner {
            max-width: ${width}px;
          }
          .conatiner .space{
            white-space: pre-wrap;
          }
        `}</style>
        </div>
       
      </div>
    </>
  );
}

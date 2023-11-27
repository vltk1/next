import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Font } from "../../Atoms/Font";
import { ReactNode, useState, useEffect } from "react";
import { Titles } from "../../Atoms/Typography";
import { Paragraphs } from "../../Atoms/Typography/Paragraph";
import { transform } from "next/dist/build/swc";
import { motion, useAnimate, useInView } from "framer-motion";

import Image from "next-image-export-optimizer";

interface Card {
  src: string;
  description: string;
  title: string;
  text: string;
  title_font: number[];
  text_font: number[];
  button: ReactNode;
}
export function CarouselBasic({ }: any) {
  const slides: string[] = [
    "images/summer_212_01.jpg",
    "images/summer_4.jpg",
    "images/summer_242_01.jpg",
  ];
  const [carousel, setCarousel] = useState(0);
  const [auto, setAuto] = useState(0);

  const actionNext = () => {
    let next = carousel === slides.length - 1 ? 0 : carousel + 1;
    let previous = carousel === slides.length - 1 ? 0 : carousel + 1;
    setCarousel(next);
  };
  const actionPrevious = () => {
    let previous = carousel < 1 ? slides.length - 1 : carousel - 1;
    setCarousel(previous);
  };
  useEffect(() => {
    if (auto === slides.length) return;
    const play = setInterval(() => {
      actionNext();
      setAuto(auto + 1);
    }, 2000);
    return () => clearInterval(play);
  });

  return (
    <>
      <div className="relative">
        <figure className="flex border w-full overflow-hidden">
          {slides.map((slide, index): any => (
            <motion.div className="min-w-full"
              animate={{ x: `calc(-${carousel}00%)` }}
              key={index}
            >
              <Image
                src={slide}
                alt="Large Image"
                width={1500}
                height={500}
                className="w-full"
              />
            </motion.div>
          ))}
        </figure>
        <button
          className="absolute right-2 top-[40%]"
          onClick={() => {
            actionNext();
            setAuto(slides.length);
          }}
        >
          Next
        </button>
        <button
          className="absolute left-2 top-[40%]"
          onClick={() => {
            actionPrevious();
            setAuto(slides.length);
          }}
        >
          Previous
        </button>
      </div>
    </>
  );
}

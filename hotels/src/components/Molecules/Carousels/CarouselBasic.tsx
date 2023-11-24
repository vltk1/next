import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Font } from "../../Atoms/Font";
import { ReactNode, useState, useEffect } from "react";
import { Titles } from "../../Atoms/Typography/Titles";
import { Paragraphs } from "../../Atoms/Typography/Paragraphs";
import { transform } from "next/dist/build/swc";
import { motion, useAnimate, useInView } from "framer-motion";

interface Card {
  src: string;
  description: string;
  title: string;
  text: string;
  title_font: number[];
  text_font: number[];
  button: ReactNode;
}
export function CarouselBasic({}: any) {
  const slides: string[] = [
    "https://demo.sirv.com/chair.jpg?hue=10",
    "https://demo.sirv.com/chair.jpg?hue=30",
    "https://demo.sirv.com/chair.jpg?hue=50",
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
        <figure className="flex border w-[400px] overflow-hidden">
          {slides.map((slide, index): any => (
            <motion.img
              animate={{ x: `calc(-${carousel}00%)` }}
              src={slide}
              key={index}
              width={400}
              alt=""
            />
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

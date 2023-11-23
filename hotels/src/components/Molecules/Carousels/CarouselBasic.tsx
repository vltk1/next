import { Dividers } from "../../Atoms/Dividers/Dividers";
import { Font } from "../../Atoms/Font";
import { ReactNode, useState, useEffect } from "react";
import { Titles } from "../../Atoms/Typography/Titles";
import { Paragraphs } from "../../Atoms/Typography/Paragraphs";
import { transform } from "next/dist/build/swc";

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
    'https://demo.sirv.com/chair.jpg?hue=10',
    'https://demo.sirv.com/chair.jpg?hue=30',
    'https://demo.sirv.com/chair.jpg?hue=50',
  ]
  const [carousel, setCarousel] = useState(0)
  const [auto, setAuto] = useState(true)

  const actionNext = () => {
    let next = carousel === (slides.length - 1) ? 0 : carousel + 1
    let previous = carousel === slides.length - 1 ? 0 : carousel + 1
    setCarousel(next)
  }
  const actionPrevious = () => {
    let previous = carousel < 1 ? slides.length -1 : carousel - 1
    setCarousel(previous)
  }
  useEffect(()=>{
      if(!auto) return
    const play = setInterval(actionNext, 1000)
    return () => clearInterval(play)
  })
  
  return (
    <>
      <div className='relative'>
        <figure className="flex border w-[400px] overflow-hidden" >
          {slides.map((slide):any=>(
            <img src={slide} width={400} alt="" style={{
              transform: `translateX(calc(-100% * ${carousel}))`,
           }}/>
          ))}
        </figure>
        <button className='absolute right-2 top-[40%]'
        onClick={()=>{
          actionNext()
          setAuto(false)
        }}>Next</button>
        <button className='absolute left-2 top-[40%]'
        onClick={()=>{
          actionPrevious()
          setAuto(false)
        }}>Previous</button>
      </div>
    </>
  );
}

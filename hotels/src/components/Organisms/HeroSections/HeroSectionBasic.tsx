import Images from "next-image-export-optimizer";
import {motion} from "framer-motion"

export function HeroSectionBasic() {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="relative z-0">
        <picture>
            <source media="(max-width: 375px)" srcSet="/oasislunch/hero/small/0.5x/bg.jpg" />
            <source media="(max-width: 768px)" srcSet="/oasislunch/hero/small/1x/bg.jpg" />

            <source media="(max-width: 960px)"  srcSet="/oasislunch/hero/0.5x/bg.jpg" />
            <source media="(max-width: 1140px)" srcSet="/oasislunch/hero/0.75x/bg.jpg" />
            <source media="(max-width: 1920px)" srcSet="/oasislunch/hero/1x/bg.jpg" />
            <source media="(max-width: 2880px)" srcSet="/oasislunch/hero/1.5x/bg.jpg" />
            <source media="(max-width: 3840px)" srcSet="/oasislunch/hero/2x/bg.jpg" />
            <source media="(max-width: 5760px)" srcSet="/oasislunch/hero/3x/bg.jpg" />

            <img src="/oasislunch/hero/small/1x/bg.jpg" alt="" width={5760} height={2880}/>
        </picture>
        </div>
        <motion.div 
        initial={{opacity:0.7}} 
        animate={{opacity: 1}}
        transition={{duration: 0.7}}
        className="absolute z-10 w-[58.5%] mt-[1.68%] md:w-[31.5%] md:mt-[-3.2%]">
          <img src="/oasislunch/hero/logo.svg" alt="" />
        </motion.div>
      </div>
      <style jsx>{`
          .conatiner .space{
            white-space: pre-wrap;
          }
        `}</style>
    </>
  )
}

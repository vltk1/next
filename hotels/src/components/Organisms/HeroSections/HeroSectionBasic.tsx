import Images from "next-image-export-optimizer";
import {motion} from "framer-motion"

export function HeroSectionBasic() {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="relative z-0">
          <Images src="/oasislunch/hero-bg.jpg" alt="hero" width={7680} height={3840} />
        </div>
        <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale: 1}} className="absolute z-10 w-[30%] h-[60%]">
          <img src="/oasislunch/logo.svg" alt="" />
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

import { motion } from "framer-motion";

export function ContentSectionBasic() {
  return (
    <>
      <div className="relative flex bg-[#fff9ee] md:max-h-[1134rem]">
        <motion.div 
       initial={{ opacity: 0}}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.32, times: [0, 1] }}

        className="w-full md:max-h-[1140rem] md:w-[90%] pb-[26%] md:pb-[5.1%]">
        <picture>
            <source media="(max-width: 375px)" srcSet="/oasislunch/content/sm/1x/dish.webp" />
            <source media="(max-width: 768px)" srcSet="/oasislunch/content/sm/2x/dish.webp" />

            <source media="(max-width: 858px)" srcSet="/oasislunch/content/0.5x/dish.webp" />
            <source media="(max-width: 1715px)" srcSet="/oasislunch/content/0.75x/dish.webp" />  
            <source media="(max-width: 1920px)" srcSet="/oasislunch/content/1x/dish.webp" />
            <source media="(max-width: 2573px)" srcSet="/oasislunch/content/1.5x/dish.webp" />
            <source media="(max-width: 3840px)" srcSet="/oasislunch/content/2x/dish.webp" />

            <img src="/oasislunch/content/sm/1x/dish.jpg" width={3430} height={2070} alt="" className="w-full h-full object-cover" />
        </picture>
        </motion.div>
        <div className="absolute right-0 bottom-0 w-full">
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.32, times: [0, 1] }}

        className="w-[86%] md:w-[52%] md:max-w-[1000rem] ml-auto">
        <picture>
          <source media="(min-width: 768px)" srcSet="/oasislunch/content/title.svg" />
          <img src="/oasislunch/content/sm/title.svg" alt="" width={1000} className="w-full"/>
        </picture>
        </motion.div>
        </div>
      </div>
    </>
  )
}


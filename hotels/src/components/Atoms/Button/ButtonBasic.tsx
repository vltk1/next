import { motion, useAnimate, useInView } from "framer-motion";
import React, { ReactElement, useEffect, useState } from "react";

// Flick khi bị giật lúc mới vào
export function ButtonBasic({ label, fontSize, weight, active, width, height, radius, color, bgcolor, border, className = "" }: Button) {
  const [scope, animate] = useAnimate()
  useEffect(() => {
    if (active) {
      animate(scope.current, { backgroundColor: `#533b2b`, color: '#ffffff' })
    } 
    // else {
    //   animate(scope.current, { backgroundColor: `revert-layer`, color: color})
    // }
  }, [active])

  return (
    <motion.div
      initial={{ opacity: 0, backgroundColor: '#ffffff', color: '#533b2b' }}
      whileHover={{ backgroundColor: '#8f8075', color: '#ffffff'}}
      whileInView={{ opacity: 1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: .32, times: [0, 1] }}
    >
      <button className={`p-2 inline-flex justify-center items-center ${className}`} ref={scope}>
        <span className="grow ml-[24rem]">{label}</span>
        <i className="w-0 h-0 border-t-[13rem] border-b-[13rem] border-l-[24rem] border-t-[transparent] border-b-[transparent]"></i>
      </button>
      <style jsx>
        {`
          button {
            min-width: ${width}px;
            min-height: ${height}px;
            font-size: ${fontSize}rem;
            line-height: 1.4;
            font-weight: ${weight}rem;
            border-radius: ${radius}px;
            border: 1px solid ${border};
            transition: all .35s;
          }
        `}
      </style>
    </motion.div>
  );
}

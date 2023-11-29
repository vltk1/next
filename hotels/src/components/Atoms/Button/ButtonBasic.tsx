import { motion, useAnimate, useInView } from "framer-motion";
import React, { ReactElement, useEffect, useState } from "react";

// Flick khi bị giật lúc mới vào
export function ButtonBasic({
  label,
  fontSize,
  weight,
  active,
  width,
  height,
  radius,
  color,
  bgcolor,
  border,
  className = "",
}: Button) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (active) {
      animate(scope.current, { backgroundColor: `#533b2b`, color: "#ffffff" });
    }
    // else {
    //   animate(scope.current, { backgroundColor: `revert-layer`, color: color})
    // }
  }, [active]);

  return (
    <motion.div
      initial={{ opacity: 0, backgroundColor: "#ffffff", color: "#533b2b" }}
      whileHover={{ backgroundColor: "#8f8075", color: "#ffffff" }}
      whileInView={{ opacity: 1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.32, times: [0, 1] }}
    >
      <button
        className={`p-2 inline-flex justify-center items-center ${className}`}
        ref={scope}
      >
        <span className="grow ml-[24rem] text-[16rem] font-[700] md:text-[25rem]">{label}</span>
        <i className={`mr-[14rem]
        w-0 h-0 border-t-[transparent] border-b-[transparent]
        border-t-[6rem] border-b-[6rem] border-l-[12rem]
        md:border-t-[13rem] md:border-b-[13rem] md:border-l-[24rem]
        `}></i>
      </button>
      <style jsx>
        {`
          button {
            font-family: 'Noto Sans JP', sans-serif;
            min-width: ${width}rem;
            font-size: ${fontSize}rem;
            line-height: 1.4;
            font-weight: ${weight}00;
            transition: all 0.35s;
          }
        `}
      </style>
    </motion.div>
  );
}

import { motion, useAnimate, useInView } from "framer-motion";
import React, { ReactElement, useEffect, useState } from "react";


export function ButtonLabel({ label, active, width, height, radius, color, bgcolor, border, className = "" }: Button) {
  const [scope, animate] = useAnimate()
  useEffect(() => {
     if (active) {
      animate(scope.current, { backgroundColor: `red`})
     }else {
      animate(scope.current, { backgroundColor: `revert-layer`})
     }
  }, [active])

  return (
    <motion.div
      initial={{ opacity: 0}}
      whileHover={{ opacity: 0.8 }}
      whileInView={{ opacity: 1}}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: .32, times: [0, 1] }}
    >
       <button className={`p-2 inline-flex justify-center items-center ${className}`} ref={scope}>
        <span>{label}</span>
      </button>
      <style jsx>
        {`
          button {
            min-width: ${width}px;
            min-height: ${height}px;
            color: ${color};
            border-radius: ${radius}px;
            box-shadow: 1px 2px 3px #000;
            background-color: ${bgcolor};
            border: 1px solid ${border};
            transition: all .35s;
          }
        `}
      </style>
    </motion.div>
  );
}

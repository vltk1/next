import { motion, useAnimate, useInView } from "framer-motion";
import React, { ReactElement, useEffect, useState } from "react";


export function ButtonIcon({ label, active, width, height, radius, color, bgcolor, border, className="", onClick }: any):any {
  const [scope, animate] = useAnimate()
  useEffect(() => {
     if (active) {
      animate(scope.current, { backgroundColor: `#65b7ec`, color: '#fff'})
     }else {
      animate(scope.current, { backgroundColor: `revert-layer`, color: '#65b7ec'})
     }
  }, [active])

  return (
    <motion.div
      initial={{ opacity: 0, color: '#65b7ec'}}
      // whileHover={{ scale: [0.98,1] }}
      whileInView={{ opacity: 1}}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: .32, times: [0, 1] }}
      className="min-w-full"
    >
       <button onClick={onClick} className={`p-2 inline-flex flex-wrap justify-center items-center ${className}`} ref={scope}>
        <span>
        <b className="block w-full mb-[12rem] font-medium">{label}</b>
        <i className="p-[6rem] border-r-[0.08em] border-b-[0.08em] border border-t-[0]  border-l-[0]  inline-block rotate-45"></i>
        </span>
        
      </button>
      <style jsx>
        {`
          button {
            min-width: ${width};
            min-height: ${height}rem;
            color: ${color};
            border-radius: ${radius}rem;
            font-size: 23rem;
            line-height: 1.2;
            background-color: ${bgcolor};
            border: 1px solid ${border};
            transition: all .35s;
          }
        `}
      </style>
    </motion.div>
  );
}


{/* <img src="/oasislunch/icon/arrow-bottom.svg" alt="" width={20} height={10}  className="mx-auto"/> */}
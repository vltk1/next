"use client";
import { useState, useEffect } from "react";
import { motion, useAnimationControls  } from "framer-motion";


function HeaderDormyinn() {
  const [menu, setMenu] = useState(false);
  const toggle = () => setMenu(!menu);

  return (
    <header className="relative bg-[white] px-[18px]">
      <div className="flex justify-between w-full max-w-[956px] mx-auto h-[66px] md:h-[76px] items-center">
        <a
          href="https://www.hotespa.net/dormyinn/"
          target="_blank"
          rel="noopener"
        >
          <img
            src="https://www.hotespa.net/common/img/dormyinn_logo.png"
            width={185}
            height={44}
            alt=""
          />
        </a>
        <motion.figure className="cursor-pointer" onClick={toggle}>
          <motion.img
            src="https://www.hotespa.net/common/img/menu_close.png"
            width={24}
            height={24}
            alt=""
            className={`hidden ${menu && `!block`}`}
          />
          <motion.img 
            src="https://www.hotespa.net/common/img/menu_open.png"
            width={30}
            height={22}
            alt=""
            className={`block ${menu && `!hidden`}`}
          />
        </motion.figure>
      </div>
      { menu && 
      <motion.div 
      initial = {{y: -100}}
      animate={{ y: 0 }}
        className={`absolute top-[100%] left-0 w-full bg-[#112750] `}
      >
        <menu className="flex flex-wrap max-w-[956px] w-full mx-auto divide-y divide-[#112750]">
          <li className="w-1/2 bg-[#263d66] odd:border-r-[1px] border-[#112750]">
            <a
              href="https://www.hotespa.net/dormyinn/"
              target="_blank"
              rel="noopener"
              className="flex text-[white] px-[25px] py-[18px] items-center text-[11px] leading-[1.7]
               no-underline font-['Meiryo'] hover:bg-[#2f4a79]"
            >
              dormyinn　トップ
            </a>
          </li>
          <li className="w-1/2 bg-[#263d66] odd:border-r-[1px] !border-t-0">
            <a
              href="https://www.hotespa.net/resort/"
              target="_blank"
              rel="noopener"
              className="flex text-[white] px-[25px] py-[18px] items-center text-[11px] leading-[1.7] no-underline font-['Meiryo']"
            >
              共立リゾート　トップ
            </a>
          </li>
          <li className="w-1/2 bg-[#263d66] odd:border-r-[1px]">
            <a
              href="https://www.hotespa.net/dormyinn/list/"
              target="_blank"
              rel="noopener"
              className="flex text-[white] px-[25px] py-[18px] items-center text-[11px] leading-[1.7] no-underline font-['Meiryo']"
            >
              dormyinn　施設一覧
            </a>
          </li>
          <li className="w-1/2 bg-[#263d66] odd:border-;le">
            <a
              href="https://www.hotespa.net/yumeguri/"
              target="_blank"
              rel="noopener"
              className="flex text-[white] px-[25px] py-[18px] items-center text-[11px] leading-[1.7] no-underline font-['Meiryo']"
            >
              湯めぐりの宿　トップ
            </a>
          </li>
          <li className="w-1/2 bg-[#263d66] odd:border-r-[1px]">
            <a
              href="https://member.kyoritsugroup.com/mypage/update?cid=C02"
              target="_blank"
              rel="noopener"
              className="flex text-[white] px-[25px] py-[18px] items-center text-[11px] leading-[1.7] no-underline font-['Meiryo']"
            >
              会員登録情報の確認・変更
            </a>
          </li>
          <li className="w-1/2 bg-[#263d66] odd:border-r-[1px]">
            <a
              href="https://www.hotespa.net/spa/"
              target="_blank"
              rel="noopener"
              className="flex text-[white] px-[25px] py-[18px] items-center text-[11px] leading-[1.7] no-underline font-['Meiryo']"
            >
              SPA　トップ
            </a>
          </li>
        </menu>
      </motion.div>
      }
    </header>
  );
}

export default HeaderDormyinn;

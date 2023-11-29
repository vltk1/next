import { AnimatePresence, motion } from "framer-motion";
import { useState, useTransition } from "react";
import { Suspense } from "react";
import { ButtonIcon } from "../../Atoms/Button/ButtonIcon";
import {
  ProductListTab1,
  ProductListTab2,
  ProductListTab3,
} from "../ProductLists/ProductListItems";

export function Tabs() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("tab1");

  function selectTab(nextTab: any) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  const tabButtons = [
    { id: "tab1", value: "CAFÉ OASIS 中野坂上店" },
    { id: "tab2", value: "CAFÉ OASIS ラビスタ東京ベイ豊洲店 " },
    { id: "tab3", value: "CAFÉ OASIS 神戸元町店 " },
  ];

  return (
    <>
      <div className="bg-[#fff9ee] md:px-[20px]">
        <div className="flex max-w-[1510rem] items-center justify-between mb-[41rem] md:mb-[88rem] mx-auto md:pt-[9rem]">
            <hr className="border-0 h-[2rem] grow bg-[#65b7ec] opacity-80" />
            <img src="/oasislunch/product/tab-title.svg" alt="" width={400} height={52} className="w-[42.8%] md:w-full max-w-[321rem] md:max-w-[401rem] mx-[14rem] md:mx-[46rem]" />
            <hr className="border-0 h-[2rem] grow bg-[#65b7ec] opacity-80" />
        </div>

        <div className="max-w-[1124rem] mx-auto overflow-hidden">
          <div className="mb-[50rem] md:mb-[100rem] ">
            <ul
              className={`flex md:w-full w-[74%] max-w-[520rem] md:max-w-full flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-[#65b7ec] mx-auto `}
            >
              {tabButtons.map((tabButton) => (
                <li
                  key={tabButton.id}
                  className="grow md:min-w-[312rem] min-h-[40rem] inline-flex justify-center items-center"
                >
                  <ButtonIcon
                    width="100%"
                    bgcolor="#ffffff"
                    color="#65b7ec"
                    height={100}
                    className="!min-h-[64rem] md:!min-h-[100rem] !text-[14rem] md:!text-[23rem]" 
                    label={tabButton.value}
                    active={tab === tabButton.id}
                    onClick={() => selectTab(tabButton.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.48 }}
            className="flex"
          >
            <AnimatePresence mode="wait">
              {tab === "tab1" && (
                <motion.section
                  key="tab1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden relative w-full"
                >
                  <ProductListTab1 />
                </motion.section>
              )}
              {tab === "tab2" && (
                <motion.section
                  key="tab2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden relative w-full"
                >
                  <ProductListTab2 />
                </motion.section>
              )}
              {tab === "tab3" && (
                <motion.section
                  key="tab3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="overflow-hidden relative w-full"
                >
                  <ProductListTab3 />
                </motion.section>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

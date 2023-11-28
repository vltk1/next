
import { AnimatePresence, motion } from "framer-motion";
import { useState, useTransition } from "react";
import { Suspense } from "react";
import { ButtonIcon } from "../../Atoms/Button/ButtonIcon";
import { ProductListTab1, ProductListTab2, ProductListTab3 } from "../ProductLists/ProductListItems";
import { Loading } from "./Loading";


export function Tabs() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("tab1");

  function selectTab(nextTab: any) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  const tabButtons = [
    { id: 'tab1', value: 'CAFÉ OASIS 中野坂上店' },
    { id: 'tab2', value: 'CAFÉ OASIS ラビスタ東京ベイ豊洲店 ' },
    { id: 'tab3', value: 'CAFÉ OASIS 神戸元町店 ' },
  ];

  return (
    <>
      <div className="bg-[#fff9ee]">
        <div className="max-w-[1100px] mx-auto overflow-hidden">
          <header className="mb-[100rem]">
            <ul
              className={`flex w-full flex-wrap px-[10px] divide-x divide-[#65b7ec]`}
            >
              {tabButtons.map(tabButton => (
                <li key={tabButton.id} className="grow min-w-[180px] min-h-[40px] my-[10px] inline-flex justify-center items-center">
                  <ButtonIcon
                    width="100%"
                    bgcolor="#ffffff"
                    color="#65b7ec"
                    height={100}
                    label={tabButton.value}
                    active={tab === tabButton.id}
                    onClick={() => selectTab(tabButton.id)}
                  />
                </li>
              ))}
            </ul>
          </header>
          <div className="flex">
            <AnimatePresence mode="wait">
              {tab === "tab1" && <motion.section
                key="tab1"
                initial={{ x: '100%' }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.32 }}
                exit={{ x: '-100%' }}
                className="overflow-hidden relative"
              >
                <ProductListTab1 />
              </motion.section>}
              {tab === "tab2" && <motion.section
                key="tab2"
                initial={{ x: '100%' }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.32 }}
                exit={{ x: '-100%' }}
                className="overflow-hidden relative"
              >
                <ProductListTab2 />
              </motion.section>}
              {tab === "tab3" && <motion.section
                key="tab3"
                initial={{ x: '100%' }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.32 }}
                exit={{ x: '-100%' }}
                className="overflow-hidden relative"
              >
                <ProductListTab3 />
              </motion.section>}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

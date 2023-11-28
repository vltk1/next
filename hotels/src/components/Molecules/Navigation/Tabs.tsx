import { motion } from "framer-motion";
import { ButtonBasic } from "../../Atoms/Button/ButtonBasic";
import Link from "next/link";
import { useState, useTransition } from "react";
import { ButtonIcon } from "../../Atoms/Button/ButtonIcon";

export function Tabs({ align }: any) {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("tab1");

  function selectTab(nextTab: any) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  const tabButtons = [
    {id: 'tab1', value: 'CAFÉ OASIS 中野坂上店'},
    {id: 'tab2', value: 'CAFÉ OASIS ラビスタ東京ベイ豊洲店 '},
    {id: 'tab3', value: 'CAFÉ OASIS 神戸元町店 '},
  ];

  const Tab1 = (): any => (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      className="chapter bg-blue h-[400rem]"
    >
      <h2>My First Chapter</h2>
      <p>This is the first of my chapters. It doesnt say much.</p>
      <p>But it has two paragraphs!</p>
    </motion.section>
  );
  const Tab2 = (): any => (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      className="appendix bg-purple h-[400rem]"
    >
      <h2>Appendix A: Overview of Examples</h2>
      <p>These are demonstrations.</p>
    </motion.section>
  );
  const Tab3 = (): any => (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      className="appendix bg-orange h-[400rem]"
    >
      <h2>Appendix B: Some Closing Remarks</h2>
      <p>
        Hopefully this long example shows that you <em>can</em> style sections,
        so long as they are used to indicate actual sections.
      </p>
    </motion.section>
  );

  let valign = "";
  switch (align[0]) {
    case "Left":
      valign = "justify-start";
      break;
    case "Center":
      valign = "justify-center";
      break;
    case "Right":
      valign = "justify-end";
      break;
    case "Between":
      valign = "justify-between";
      break;
  }

  return (
    <>
      <div className="bg-[#fff9ee] w-[1400px]">
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
          <hr />
          <div>
            {tab === "tab1" && <Tab1 />}
            {tab === "tab2" && <Tab2 />}
            {tab === "tab3" && <Tab3 />}
          </div>
        </div>
      </div>
    </>
  );
}

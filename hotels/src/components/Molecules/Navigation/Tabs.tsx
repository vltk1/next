import { ButtonBasic } from "../../Atoms/Button/ButtonBasic";
import { Figure } from "../../Atoms/Figure/Figure";
import Link from "next/link";
import { useState, useTransition } from "react";

export function Tabs({align}: any) {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("tab1");

  function selectTab(nextTab:any) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  const Tab1 = (): any => (
    <section className="chapter">
      <h2>My First Chapter</h2>
      <p>This is the first of my chapters. It doesnt say much.</p>
      <p>But it has two paragraphs!</p>
    </section>
  );
  const Tab2 = (): any => (
    <section className="appendix">
      <h2>Appendix A: Overview of Examples</h2>
      <p>These are demonstrations.</p>
    </section>
  );
  const Tab3 = (): any => (
    <section className="appendix">
      <h2>Appendix B: Some Closing Remarks</h2>
      <p>
        Hopefully this long example shows that you <em>can</em> style sections,
        so long as they are used to indicate actual sections.
      </p>
    </section>
  );
  const Tab4 = (): any => (
    <section className="appendix">
      <h2>Appendix B: Some Closing Remarks</h2>
      <p>
        Hopefully this long example shows that you <em>can</em> style sections,
        so long as they are used to indicate actual sections.
      </p>
    </section>
  );
  let valign = ''
  switch (align[0]){
    case 'Left': valign = 'justify-start'; break
    case 'Center': valign = 'justify-center'; break
    case 'Right': valign = 'justify-end'; break
    case 'Between': valign = 'justify-between'; break
  }
  return (
    <>
      <div className="w-[100vw] max-w-[860px] mx-auto">
        <header className="border-2">
          <hgroup>
            <h1>My Book</h1>
            <p>A sample with not much content</p>
          </hgroup>
          <ul className={`flex border-2 ${valign} flex-wrap px-[10px]`}>
            <li className="min-w-[180px] min-h-[40px] my-[10px] border-2 inline-flex justify-center items-center">
              <button onClick={()=> selectTab('tab1')}>Chapter 1</button>
            </li>
            <li className="min-w-[180px] min-h-[40px] my-[10px] border-2 inline-flex justify-center items-center">
              <button onClick={()=> selectTab('tab2')}>Chapter 2</button>
            </li>
            <li className="min-w-[180px] min-h-[40px] my-[10px] border-2 inline-flex justify-center items-center">
              <button onClick={()=> selectTab('tab3')}>Chapter 3</button>
            </li>
            <li className="min-w-[180px] min-h-[40px] my-[10px] border-2 inline-flex justify-center items-center">
              <button onClick={()=> selectTab('tab4')}>Chapter 4</button>
            </li>
          </ul>
        </header>
        <hr />
        {tab === "tab1" && <Tab1 />}
        {tab === "tab2" && <Tab2 />}
        {tab === "tab3" && <Tab3 />}
        {tab === "tab4" && <Tab4 />}

        <style jsx>{`
          section {
            border: double medium;
            margin: 2em 0;
          }
          section.chapter h2 {
            font: 2em Roboto, Helvetica Neue, sans-serif;
          }
          section.appendix h2 {
            font: small-caps 2em Roboto, Helvetica Neue, sans-serif;
          }
        `}</style>
      </div>
    </>
  );
}

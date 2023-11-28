import { Card, Cards } from "../../Molecules/Cards";

export function CategorySectionSimple() {
  return (
    <>
    <section className="pb-[150rem] pt-[115rem] px-[16px] bg-[#fff9ee] ">
    <div className="max-w-[1510rem] mx-auto">
      <div className="flex items-center justify-between mb-[80rem] mx-auto">
        <hr className="border-0 h-[2rem] grow bg-[#533b2b]" />
        <img src="/oasislunch/category/title.svg" alt="" width={612} height={58} className="mx-[50rem]" />
        <hr className="border-0 h-[2rem] grow bg-[#533b2b]" />
      </div>
      <div className="relative flex justify-center">
        <Cards>
          <Card
            button="対象プランはこちら"
            name="ドーミーイン池袋"
            thumb={["/oasislunch/card/photo1.png", "対象プランはこちら"]}
            className="mx-[30rem]"
          />
          <Card
            button="対象プランはこちら"
            name="ラビスタ東京ベイ"
            thumb={["/oasislunch/card/photo2.png", "対象プランはこちら"]}
            className="mx-[30rem]"
          />
        </Cards>
      </div>
      </div>
    </section>
    </>
  );
}

import { Paragraph } from "../../Atoms/Typography/Paragraph";
import { Thumbnail } from "../../Atoms/Thumbnail";

export function ContentSectionDouble() {
  return (
    <>
      <div className="relative flex bg-[#fff9ee] px-[10px] pt-[150rem] pb-[200rem]">
        <div className="flex bg-[white] max-w-[1510rem] mx-auto">
          <div className="min-w-[22.3841059602649%] max-w-[338rem] relative top-[-52rem] mb-[-114rem] ml-[130rem] mr-[90rem]">
            <Thumbnail
              height={200}
              src="/oasislunch/conent-double.svg"
              width={338}
            />
          </div>
          <div className="grow pt-[92rem] pb-[50rem] pr-[100rem]">
            <Paragraph
              align={["left"]}
              bold={5}
              className=""
              color="#666666"
              line={2}
              size="22"
              tag="p"
            >
              金沢発祥のハントンライスとはケチャップライスにとろとろ卵とエビフライや白身魚フライがのり、ケチャップとタルタルソースがかけられた料理です。
              <br />
              聞き馴染みのない「ハントン」とは、ハンガリーによく似た料理があることから、ハンガリーの「ハン」とフランス語でマグロを意味する「トン」をあわせた造語といわれていて、キッチンスタッフが短い時間でも一皿でいろんな料理を楽しめるように考えられた「まかない料理」がルーツとか？！
              <br />
              大人のお子様ランチのようでワクワク感があります！
              <br />
              <span className="block text-[30rem] font-bold text-right mt-[32rem]">
              「ハントンライス」<small className="text-[25rem]">（ドリンクバー付き）</small>
              </span>
              <strong className="block text-[40rem] text-right leading-[1.4]">￥1,200（税込）</strong>
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
}

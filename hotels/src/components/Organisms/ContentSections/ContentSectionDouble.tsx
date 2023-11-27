import { Paragraph } from "../../Atoms/Typography/Paragraph";
import { Thumbnail } from "../../Atoms/Thumbnail";

export function ContentSectionDouble() {
  return (
    <>
      <div className="relative flex max-w-[980rem] bg-[gray] px-[10px] py-[40rem]">
        <div className="flex bg-[white]">
          <div className="min-w-[150rem] max-w-[150rem] relative top-[-20rem] mb-[-50rem] px-[20rem]">
            <Thumbnail
              height={200}
              src="/oasislunch/conent-double.svg"
              width={300}
            />
          </div>
          <div className="grow py-[40rem] pr-[40rem]">
            <Paragraph
              align={[
                'left'
              ]}
              bold={4}
              className=""
              color="#141414"
              line={1.8}
              size="12"
              tag="p"
            >
              金沢発祥のハントンライスとはケチャップライスにとろとろ卵とエビフライや白身魚
                フライがのり、ケチャップとタルタルソースがかけられた料理です。
                聞 き馴 染 み の な い「 ハントン」とは 、ハンガリー によく似 た 料 理 が あることから、
                ハ ンガリー の「 ハン」とフランス 語で マグ ロを 意 味 する「トン」をあ わ せ た 造 語と
                い わ れていて、キッチンスタッフが 短 い 時 間でも一 皿で いろん な 料 理を楽しめる
                ように考えられた「まかない料理」がルーツとか？！
                大人のお子様ランチのようでワクワク感があります！
                ￥1,200（税込）
                「ハントンライス」（ドリンクバー付き）
            </Paragraph>
          </div>
        </div>
      </div>
      <style jsx>{`
          .conatiner .space{
            white-space: pre-wrap;
          }
      `}</style>
    </>
  )
}


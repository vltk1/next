import { Thumbnail } from "../../Atoms/Thumbnail"
import { Paragraph } from "../../Atoms/Typography/Paragraph"

export function HeaderSectionSimple({width, top, right, left, bottom}:any) {
  return (
    <>
      <div className="text-center HeaderSectionSimple">
          <Thumbnail
            height={200}
            src="/oasislunch/header-title.svg"
            width={180}
            className="text-center"
          />
        <div className="mt-[60px]">
          <Paragraph
            align={[
              'Center'
            ]}
            bold={4}
            className=""
            color="#050404"
            label="ドーミーイン・共立リゾートを運営する株式会社共立メンテナンスが手掛ける「CAFÉ ＆ RESTAURANT OASIS」。
今回旅するシリーズとして、
「旅する皆様のもとへ、ご当地料理が旅をしてお届けしたい！」をコンセプトに、
ドーミーイン・野乃で人気のご当地料理をLUNCHでご提供します。"
            line={1.6}
            size="16"
            tag="h2"
          />
        </div>
      </div>
      <style jsx>{`
          .HeaderSectionSimple {
            max-width: ${width ? '100%': width + 'rem'};
            padding: ${top}rem ${right}px ${bottom}rem ${left}px;
          }
      `}</style>
    </>
  )
}
<br />
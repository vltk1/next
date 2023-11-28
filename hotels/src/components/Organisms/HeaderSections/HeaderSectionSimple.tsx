import { motion } from "framer-motion";
import { Thumbnail } from "../../Atoms/Thumbnail";
import { Paragraph } from "../../Atoms/Typography/Paragraph";

export function HeaderSectionSimple({ width, top, right, left, bottom }: any) {
  return (
    <>
    
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{ opacity: 1}}

      className="text-center HeaderSectionSimple">
        <Thumbnail
          height={362}
          src="/oasislunch/header-title.svg"
          width={362}
          className="text-center"
        />
        <div className="mt-[70px]">
          <Paragraph
            align={["Center"]}
            bold={4}
            className=""
            color="#333333"
            line={1.8}
            size="25"
            tag="h2"
          >
            ドーミーイン・共立リゾートを運営する株式会社共立メンテナンスが手掛ける「CAFÉ
            ＆ RESTAURANT OASIS」。 <br />
            今回旅するシリーズとして、<br />
            「旅する皆様のもとへ、ご当地料理が旅をしてお届けしたい！」をコンセプトに、<br />
            ドーミーイン・野乃で人気のご当地料理をLUNCHでご提供します。<br />
          </Paragraph>
        </div>
      </motion.div>
      <style jsx>{`
        .HeaderSectionSimple {
          max-width: ${width ? "100%" : width + "rem"};
          padding: ${top}rem ${right}px ${bottom}rem ${left}px;
        }
      `}</style>
    </>
  );
}
<br />;

import { motion } from "framer-motion";
import { Thumbnail } from "../../Atoms/Thumbnail";
import { Paragraph } from "../../Atoms/Typography/Paragraph";
import { Title } from "../../Atoms/Typography/Title";

export function HeaderSectionSimple({ width, top, right, left, bottom }: any) {
  return (
    <div className="pt-[38rem] md:pt-[76rem] pb-[48rem] md:pb-[100rem] px-[14px]">
      <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.32, times: [0, 1] }}
      className="text-center HeaderSectionSimple">
        <div className="w-[42%] max-w-[290rem] md:w-full md:max-w-[362rem] mx-auto">
         <Thumbnail
            height={362}
            src="/oasislunch/content/header-title.svg"
            width={362}
            className="text-center"
          />
        </div>
        <div className="mt-[22rem] md:mt-[82rem]">
          <Paragraph
            align={["Center"]}
            bold={4}
            className="!text-[14rem] md:!text-[25rem] !leading-[1.65]"
            color="#333333"
            line={1.8}
            size="25"
            tag="h2"
          >
            ドーミーイン・共立リゾートを運営する<br className="md:hidden" />株式会社共立メンテナンスが手掛ける<br className="md:hidden" />「CAFÉ
            ＆ RESTAURANT OASIS」。 <br />
            今回旅するシリーズとして、<br />
            「旅する皆様のもとへ、ご当地料理が<br className="md:hidden" />旅をしてお届けしたい！」をコンセプトに、<br />
            ドーミーイン・野乃で人気のご当地料理を<br className="md:hidden" />LUNCHでご提供します。<br />
          </Paragraph>
        </div>
      </motion.div>
      <style jsx>{`
        .HeaderSectionSimple {
          max-width: ${width ? "100%" : width + "rem"};
          padding: ${top}rem ${right}px ${bottom}rem ${left}px;
        }
      `}</style>
  </div>
  );
}
<br />;

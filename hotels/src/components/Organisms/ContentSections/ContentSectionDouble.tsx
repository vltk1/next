import { motion } from "framer-motion";
import { Paragraph } from "../../Atoms/Typography/Paragraph";


export function ContentSectionDouble() {
  return (
    <>
      <div className="relative flex bg-[#fff9ee] md:px-[20px] pt-[65rem] md:pt-[150rem] pb-[54rem] md:pb-[200rem]">
        <div className="flex flex-col md:flex-row bg-[white] max-w-[1510rem] mx-auto pl-[50rem] pr-[30rem] md:px-[50rem] pb-[38rem] md:pb-0 md:px-0">
          <div className="relative top-[-3.4vw] mb-[-3.4vw] min-w-[220rem] w-[57.86666666666667%] max-w-[434rem] md:min-w-[22.3841059602649%] md:max-w-[338rem] md:top-[-52rem] md:mb-[-114rem] md:ml-[130rem] md:mr-[90rem]">
            <picture>
              <source media="(min-width: 768px)" srcSet="/oasislunch/content/conent-double.svg" />
              <motion.img 
              initial={{y: 12, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{ duration: .46, delay: 0.12}}
              
              src="/oasislunch/content/sm/conent-double.svg" alt="" width={338} className="w-full"/>
            </picture>
          </div>
          <motion.div
           initial={{y: 12, opacity: 0}}
           whileInView={{y:0, opacity: 1}}
           transition={{ duration: .48, delay: 0.2}}
          className="grow pt-[25rem] md:pt-[35rem] md:pt-[85rem] md:pb-[50rem] md:pr-[96rem]">
            <Paragraph
              align={["left"]}
              bold={5}
              className="!text-[14rem] md:!text-[22rem] !leading-[1.54]"
              color="#666666"
              line={1.93}
              size="22"
              tag="p"
            >
              金沢発祥のハントンライスとはケチャップライスにとろとろ卵とエビフライや白身魚フライがのり、ケチャップとタルタルソースがかけられた料理です。
              <br />
              聞き馴染みのない「ハントン」とは、ハンガリーによく似た料理があることから、ハンガリーの「ハン」とフランス語でマグロを意味する「トン」をあわせた造語といわれていて、キッチンスタッフが短い時間でも一皿でいろんな料理を楽しめるように考えられた「まかない料理」がルーツとか？！
              <br />
              大人のお子様ランチのようでワクワク感があります！
              <br />
              <span className="block text-[18rem] md:text-[29rem] leading-[1.4] font-bold text-right mt-[34rem] mb-[12rem]">
              「ハントンライス」<br className="md:hidden" /><small className='ml-[-6rem] text-[14rem] md:text-[24rem]'>（ドリンクバー付き）</small>
              </span>
              <span className="block text-right font-bold"><strong className=" text-[22rem] md:text-[40rem] leading-[1.3] font-bold mr-[-4rem]">￥1,200</strong>（税込）</span>
            </Paragraph>
          </motion.div>
        </div>
      </div>
    </>
  );
}

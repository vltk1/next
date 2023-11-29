import { Paragraph } from "../../Atoms/Typography/Paragraph";
import { Title } from "../../Atoms/Typography/Title";
import { Thumbnail } from "../../Atoms/Thumbnail";
import { motion } from "framer-motion";

export function ProductFeatureSimple({}: any) {
  return (
    <>
      <section className="bg-[#ffffff] ">
        <motion.div 
        initial={{y: 12, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{ duration: .48, delay: .12}}
        
        className="py-[40rem] md:py-[102rem] w-full max-w-[1174rem] mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="mx-[4.66%] pb-[26rem] md:pb-[32rem] grow">
              <figure className="mb-[29rem] md:mb-[47rem]">
                <img
                  src="/oasislunch/product/title.svg"
                  alt=""
                  width={200}
                  height={180}
                  className="mx-auto w-[36%] max-w-[200rem]"
                />
              </figure>
              <div>
                <Title
                  align={["center"]}
                  bgcolor=""
                  bold={6}
                  className="md:mb-[10rem] md:mb-[44rem] !text-[20rem] md:!text-[35rem]"
                  color="#65b7ec"
                  line={1.3}
                  size={35}
                  tag="h2"
                >
                  旅するスイーツ
                  <br />
                  全国のドーミーインで提供中
                </Title>
              </div>
            </div>
            <div className="w-[74%] md:w-full mx-auto md:mx-[3%] md:max-w-[520rem] md:pt-[4%] flex justify-center items-center">
              <Thumbnail
                alt="旅するスイーツ 全国のドーミーインで提供中"
                height={360}
                src="/images/product/photo.png"
                width={520}
              />
            </div>
          </div>
          <div className="w-[80%] md:w-[94%] mx-auto md:mx-[3.2%]">
            <Paragraph
              align={["left"]}
              bold={4}
              className="min-w-full md:min-w-0 md:max-w-[576rem] md:w-[56%] relative md:mt-[-70rem] pl-[2%] pr-[10rem] py-[15rem] md:py-[20rem] !text-[12rem] md:!text-[17rem]"
              color="#000000"
              line={1.7}
              size="17"
              tag="h2"
            >
              ・東京都内を除くドーミーイン・野乃でのご提供となります。
              <br />
              ・時期によって、内容が変更になる場合がございます。
              <br />
            </Paragraph>
          </div>
        </motion.div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { Card, Cards } from "../../Molecules/Cards";

export function CategorySectionSimple() {
  return (
    <>
      <section className="pb-[60rem] md:pb-[110rem] pt-[68rem] md:pt-[115rem] bg-[#fff9ee] ">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.48, delay: 0.15 }}
          className="max-w-[1510rem] mx-auto"
        >
          <div className="flex items-center justify-between md:pt-[10rem] mb-[46rem] md:mb-[72rem] mx-auto md:mx-[20px]">
            <hr className="border-0 h-[2rem] grow bg-[#533b2b] opacity-80" />
            <img
              src="/oasislunch/category/title.svg"
              alt=""
              width={612}
              height={58}
              className="w-[63.2%] max-w-[474rem] md:max-w-[593rem] md:w-full mx-[20rem] md:mx-[48rem]"
            />
            <hr className="border-0 h-[2rem] grow bg-[#533b2b] opacity-80" />
          </div>
          <div className="relative w-[74%] mx-auto md:w-full flex flex-col md:flex-row justify-center md:px-[32rem] md:px-0 justify-center">
            <Cards>
              <Card
                button="対象プランはこちら"
                name="ドーミーイン池袋"
                thumb={["/images/card/photo1.png", "対象プランはこちら"]}
                className="mx-[30rem] mb-[40rem]"
              />
              <Card
                button="対象プランはこちら"
                name="ラビスタ東京ベイ"
                thumb={["/images/card/photo2.png", "対象プランはこちら"]}
                className="mx-[30rem]"
              />
            </Cards>
          </div>
        </motion.div>
      </section>
    </>
  );
}

import { Paragraph } from "../../Atoms/Typography/Paragraph";
import { Column, Columns } from "../../Atoms/Columns";
import { Title } from "../../Atoms/Typography/Title";
import { Thumbnail } from "../../Atoms/Thumbnail";

export function ProductFeatureSimple({}: any) {
  return (
    <>
      <section className="bg-[#ffffff]">
        <div className="flex max-w-[1250rem] py-[98rem] mx-auto">
          <div className="mx-[4.66%] pb-[32rem]">
            <figure className="mb-[48rem]">
              <img
                src="/oasislunch/product/title.svg"
                alt=""
                width={200}
                height={180}
                className="mx-auto"
              />
            </figure>
            <div>
              <Title
                align={["center"]}
                bgcolor=""
                bold={7}
                className="mb-[44rem]"
                color="#65b7ec"
                line={1.4}
                size={35}
                tag="h2"
              >
                旅するスイーツ
                <br />
                全国のドーミーインで提供中
              </Title>
              <Paragraph
                align={["left"]}
                bold={4}
                className=""
                color="#000000"
                line={1.7}
                size="17"
                tag="h2"
              >
                ・ 東京都内を除くドーミーイン・野乃でのご提供となります。
                <br />
                ・ 時期によって、内容が変更になる場合がございます。
                <br />
              </Paragraph>
            </div>
          </div>
          <div className="mx-[4.66%] flex justify-center items-center">
            <Thumbnail
              alt="旅するスイーツ 全国のドーミーインで提供中"
              height={360}
              src="/oasislunch/product/photo.png"
              width={520}
            />
          </div>
        </div>
      </section>
    </>
  );
}

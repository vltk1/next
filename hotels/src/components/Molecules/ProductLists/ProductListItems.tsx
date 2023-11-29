import { Thumbnail } from "../../Atoms/Thumbnail";
import { Title } from "../../Atoms/Typography/Title";
import React from "react";


export function ProductListTab1({ children }: any) {
  return (
    <div className="w-full">
      <div className="mb-[15rem] md:mb-[50rem]">
        <hgroup className="flex justify-center items-center flex-wrap min-h-[70rem] md:min-h-[124rem] bg-[#fff] text-[#333333]">
          <div>
            <Title
              align={["center"]}
              bgcolor=""
              bold={7}
              className="!text-[16rem] md:!text-[25rem]"
              color="#533b2b"
              line={1.4}
              size={25}
              tag="h3"
            >
              CAFÉ & RESTAURANT
            </Title>
            <Title
              align={["center"]}
              bgcolor=""
              bold={7}
              className="!text-[20rem] md:!text-[35rem]"
              color="#65b7ec"
              line={1.4}
              size={35}
              tag="h2"
            >
              CAFÉ OASIS 中野坂上店
            </Title>
          </div>
        </hgroup>
      </div>
      <div className="flex flex-col w-[74%] md:w-full mx-auto max-w-[1100rem] md:flex-row ">
        <div className="mb-[20rem] md:mb-0">
          <Thumbnail
            alt=""
            height={360}
            src="/images/product/thumb1.png"
            width={520}
          />
        </div>
        <div className="grow md:px-[48rem]">
          <div className="mb-[26rem]">
            <table className="table-auto mt-[-4rem] text-[13rem] md:text-[19rem] leading-[1.4] text-[#333333]">
              <tbody>
                <tr>
                  <td valign="top" className="w-[80rem] md:w-[108rem]">
                    住　　所
                  </td>
                  <td className="pb-[6rem]">
                    東京都中野区本町2-48-13
                    <br />
                    Dormy＋Café中野坂上１F
                  </td>
                </tr>
                <tr>
                  <td valign="top">アクセス</td>
                  <td className="pb-[6rem]">
                    ・東京メトロ丸ノ内線「中野坂上」駅
                    <br />
                    　3番出口より徒歩30秒
                    <br />
                    ・都営大江戸線「中野坂上」駅
                    <br />
                    　1番出口より徒歩3分
                    <br />
                  </td>
                </tr>
                <tr>
                  <td valign="top">営業時間</td>
                  <td className="pb-[6rem]">10:30～21:00（L.O 20:30）</td>
                </tr>
                <tr>
                  <td valign="top">定  休  日</td>
                  <td className="pb-[6rem]">年中無休</td>
                </tr>
                <tr>
                  <td valign="top">席　　数</td>
                  <td className="pb-[6rem]">店内 ： 38席、テラス ： 10席</td>
                </tr>
                <tr>
                  <td valign="top">予　　約</td>
                  <td className="pb-[6rem]">可</td>
                </tr>
                <tr>
                  <td valign="top">電話番号</td>
                  <td className="pb-[6rem]">03-3377-1676</td>
                </tr>
                <tr>
                  <td valign="top">決済方法</td>
                  <td>現金・カード・電子マネー・QRコード</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex ml-[2rem] justify-center md:justify-start">
            <i className="bg-[#fff] rounded-[12rem] mr-[6rem] md:mr-[10rem] w-[48rem] md:w-[72rem]">
              <img
                src="/oasislunch/icon/wifi.svg"
                alt=""
                width={72}
                height={72}
              />
            </i>
            <i className="bg-[#fff] rounded-[12rem] mr-[6rem] md:mr-[10rem] w-[48rem] md:w-[72rem]">
              <img
                src="/oasislunch/icon/electricity.svg"
                alt=""
                width={72}
                height={72}
              />
            </i>
           
            <i className="bg-[#fff] rounded-[12rem] mr-[6rem] md:mr-[10rem] w-[48rem] md:w-[72rem]">
              <img
                src="/oasislunch/icon/smoking.svg"
                alt=""
                width={72}
                height={72}
              />
            </i>
            <i className="bg-[#fff] rounded-[12rem] mr-[6rem] md:mr-[10rem] w-[48rem] md:w-[72rem]">
              <img
                src="/oasislunch/icon/rest.svg"
                alt=""
                width={72}
                height={72}
              />
            </i>
            <i className="bg-[#fff] rounded-[12rem] mr-[6rem] md:mr-[10rem] w-[48rem] md:w-[72rem]">
              <img
                src="/oasislunch/icon/takeout.svg"
                alt=""
                width={72}
                height={72}
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductListTab2({ children }: any) {
  return (
    <div className="w-full">
      <div className="mb-[50rem]">
        <hgroup className="min-h-[124rem] bg-[#fff]">
          <Title
            align={["center"]}
            bgcolor=""
            bold={7}
            className=""
            color="#533b2b"
            line={1.8}
            size={25}
            tag="h3"
          >
            CAFÉ & RESTAURANT
          </Title>
          <Title
            align={["center"]}
            bgcolor=""
            bold={7}
            className=""
            color="#65b7ec"
            line={1.8}
            size={35}
            tag="h2"
          >
            CAFÉ OASIS ラビスタ東京ベイ豊洲店
          </Title>
        </hgroup>
      </div>
      <div className="flex">
        <div>
          <Thumbnail
            alt=""
            height={360}
            src="/images/product/thumb2.png"
            width={520}
          />
        </div>
        <div className="grow px-[40rem]">
          <div className="mb-[30rem]">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td valign="top">住 所</td>
                  <td>
                    東京都江東区豊洲6-4-40
                    <br />
                    ラビスタ東京ベイ2F
                  </td>
                </tr>
                <tr>
                  <td valign="top">アクセス</td>
                  <td>ゆりかもめ「市場前」より徒歩１分</td>
                </tr>
                <tr>
                  <td valign="top">営業時間</td>
                  <td>7:30～21:00（L.O 20:30）</td>
                </tr>
                <tr>
                  <td valign="top">定休日</td>
                  <td>年中無休（ホテル休館日は店休）</td>
                </tr>
                <tr>
                  <td valign="top">席 数</td>
                  <td>店内 ： 75席</td>
                </tr>
                <tr>
                  <td valign="top">予 約</td>
                  <td>可</td>
                </tr>
                <tr>
                  <td valign="top">電話番号</td>
                  <td>03-5548-2039</td>
                </tr>
                <tr>
                  <td valign="top">決済方法</td>
                  <td>現金・カード・電子マネー・QRコード</td>
                </tr>
              </tbody>
            </table>
            <style jsx>{`
              table {
                width: 100%;
                font-size: 18px;
                line-height: 1.4;
                font-weight: 400;
                color: #222;
              }
            `}</style>
          </div>
          <div className="flex">
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/dog.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/smoking.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/takeout.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/smoking.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/wifi.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductListTab3({ children }: any) {
  return (
    <div className="w-full">
      <div className="mb-[50rem]">
        <hgroup className="min-h-[124rem] bg-[#fff]">
          <Title
            align={["center"]}
            bgcolor=""
            bold={7}
            className=""
            color="#533b2b"
            line={1.8}
            size={25}
            tag="h3"
          >
            CAFÉ & RESTAURANT
          </Title>
          <Title
            align={["center"]}
            bgcolor=""
            bold={7}
            className=""
            color="#65b7ec"
            line={1.8}
            size={35}
            tag="h2"
          >
            CAFÉ OASIS 神戸元町店
          </Title>
        </hgroup>
      </div>
      <div className="flex">
        <div>
          <Thumbnail
            alt=""
            height={360}
            src="/images/product/thumb3.png"
            width={520}
          />
        </div>
        <div className="grow px-[40rem]">
          <div className="mb-[30rem]">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td valign="top">住 所</td>
                  <td>
                    兵庫県神戸市中央区栄町通2-5-1
                    <br />
                    ドーミーイン神戸元町1F
                  </td>
                </tr>
                <tr>
                  <td valign="top">アクセス</td>
                  <td>JR・阪神「元町駅」東口/西口より徒歩4分</td>
                </tr>
                <tr>
                  <td valign="top">営業時間</td>
                  <td>11:30～21:00（L.O 20:30）</td>
                </tr>
                <tr>
                  <td valign="top">定休日</td>
                  <td>年中無休（ホテル休館日は店休）</td>
                </tr>
                <tr>
                  <td valign="top">席 数</td>
                  <td>店内 ： 56席、テラス ： 20席</td>
                </tr>
                <tr>
                  <td valign="top">予 約</td>
                  <td>可</td>
                </tr>
                <tr>
                  <td valign="top">電話番号</td>
                  <td>078-393-5815</td>
                </tr>
                <tr>
                  <td valign="top">決済方法</td>
                  <td>現金・カード・電子マネー・QRコード</td>
                </tr>
              </tbody>
            </table>
            <style jsx>{`
              table {
                width: 100%;
                font-size: 18px;
                line-height: 1.4;
                font-weight: 400;
                color: #222;
              }
            `}</style>
          </div>
          <div className="flex">
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/dog.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/smoking.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/takeout.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/smoking.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
            <i className="mr-[15rem]">
              <img
                src="/oasislunch/icon/wifi.svg"
                alt=""
                width={64}
                height={64}
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}


import { Title } from "@components/Atoms/Typography/Title";
import { ThumbnailSimlpe } from "../../Atoms/Thumbnails/ThumbnailSimlpe";
import { ReactElement } from "react";

export function ProductListSimple({width = "100%", columns, spaceY, spaceX, className }: any) {
  let td: ReactElement[] = []
  let maxColumns: string = (width == "100%")? (100 / columns) + '%': (width / columns) + 'rem'

  for(let i = 0; i <= 10; i++){
    td.push(<div className="col">
    <ThumbnailSimlpe
      alt=""
      caption=""
      height={200}
      src="/images/Birds-of-Paradise-Pendant-2.jpg"
      width={640}
    />
    <div>
      <Title
        bold={4}
        className=""
        color="#242424"
        label="EARNINGS"
        line={4}
        size={13}
        tag="p"
      />
      <Title
        bold={4}
        className=""
        color="#242424"
        label="Blue Stripes & Stone Earrings"
        line={6}
        size={18}
        tag="h3"
      />
      <Title
        bold={4}
        className=""
        color="#242424"
        label="$159.00"
        line={6}
        size={16}
        tag="p"
      />
    </div>
    <style jsx>{`
      .col {
        width: ${maxColumns};
        flex-grow: 1;
        padding-left: ${spaceX / 2}px;
        padding-right: ${spaceX / 2}px;
        padding-top: ${spaceY / 2}px;
        padding-bottom: ${spaceY / 2}px;
      }
    `}</style>
  </div>)
  }

  for(let i = 0; i <= 10; i++){
    td.push(<hr className="h-0 grow " style={{width: maxColumns}} />)
  }

  return (
    <>
      <div className={`overflow-hidden ${className}`}>
        <div className="cols flex flex-wrap justify-center">
        {td}
        </div>
        <style jsx>{`
          .cols {
            position: relative;
            width: calc(100% + ${spaceX}px);
            left: -${spaceX / 2}px;
            right: -${spaceX / 2}px;
            height: calc(100% + ${spaceY}px);
            top: -${spaceY}px;
            bottom: -${spaceY}px;
            margin-bottom: -${spaceY}px;
          }
        `}</style>
      </div>
    </>
  );
}
// px-[10px] py-[20px]
// w-[calc(100%+20px)] left-[-10px] right-[-10px] h-[calc(100%+20px)] top-[-20px] bottom-[-20px] mb-[-20px]

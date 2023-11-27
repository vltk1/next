
import { ReactElement } from "react";
import { ThumbnailSimlpe } from "../Thumbnail";

export function Columns({ width = "100%", columns, spaceY, spaceX, className, children }: any) {
  const columnNull: ReactElement[] = []
  let maxColumns: string = (width == "100%") ? (100 / columns) + '%' : (width / columns) + 'rem'

  for(let i = 0; i <= 10; i++){
    columnNull.push(<hr className="h-0 grow " style={{width: maxColumns}} />)
  }

  return (
    <>
      <div className={`overflow-hidden ${className}`}>
        <div className="columns flex flex-wrap justify-center">
          {children.map((column:any, index:number) =>
            <div className={`column ${column.props.className}`} key={index}>{column}</div>
          )}
          {columnNull}
        </div>
        <style jsx>{`
          .columns {
            position: relative;
            width: calc(100% + ${spaceX}px);
            left: -${spaceX / 2}px;
            right: -${spaceX / 2}px;
            height: calc(100% + ${spaceY}px);
            top: -${spaceY}px;
            bottom: -${spaceY}px;
            margin-bottom: -${spaceY}px;
          }
          .column {
            width: ${maxColumns};
            flex-grow: 1;
            padding-left: ${spaceX / 2}px;
            padding-right: ${spaceX / 2}px;
            padding-top: ${spaceY / 2}px;
            padding-bottom: ${spaceY / 2}px;
          }
          
        `}</style>
      </div>
    </>
  );
}

export function Column({children, className =''}:any) {
  return(
    <>{children}</>
  )
}
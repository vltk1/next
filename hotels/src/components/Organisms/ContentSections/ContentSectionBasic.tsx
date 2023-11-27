import { Thumbnail } from "../../Atoms/Thumbnail";

export function ContentSectionBasic() {
  return (
    <>
      <div className="relative flex">
        <div className="w-[90%] pb-[5%]">
          <Thumbnail
            height={400}
            src="/oasislunch/photo.png"
            width={800}
          />
        </div>
        <div className="absolute right-0 bottom-0">
          <Thumbnail
            height={400}
            src="/oasislunch/content-simple1.png"
            width={400}
            className="max-w-[40%] ml-auto mb-[2%]"
          />
          <Thumbnail
            height={400}
            src="/oasislunch/content-simple2.png"
            width={800}
            className="max-w-[50%] ml-auto"
          />
        </div>
      </div>
      <style jsx>{`
          .conatiner .space{
            white-space: pre-wrap;
          }
      `}</style>
    </>
  )
}


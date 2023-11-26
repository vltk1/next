import { Titles } from "../../Atoms/Typography/Titles";

export function HeaderSectionSimple({ width }: any) {
  return (
    <>
      <div className="relative flex">
      <Titles
  bold={4}
  className=""
  color="#222"
  label="Read Our Story"
  line={3}
  size={24}
  tag="h2"
/>

          <style jsx>{`
          .conatiner {
            max-width: ${width}px;
          }
          .conatiner .space{
            white-space: pre-wrap;
          }
        `}</style>
      </div>
    </>
  );
}

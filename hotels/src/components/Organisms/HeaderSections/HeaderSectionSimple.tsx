import { Title } from "@components/Atoms/Typography/Title";

export function HeaderSectionSimple({ width }: any) {
  return (
    <>
      <div className="relative flex">
      <Title
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

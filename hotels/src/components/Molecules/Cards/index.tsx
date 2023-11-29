import { Title } from "../../Atoms/Typography/Title";
import { Thumbnail } from "../../Atoms/Thumbnail";
import { ButtonBasic } from "../../Atoms/Button/ButtonBasic";

export function Cards({children}: any) {
  return (
    <>
      {children}
    </>
  );
}

interface Card {
  name: string;
  thumb: string[];
  button: string;
  className?: string;
}
export function Card({name, thumb, button, className}:Card) {
  return (
    <>
      <div className={`max-w-[520rem] ${className} mx-auto md:mx-[30rem]`}>
       <div className="bg-[#533b2b] min-h-[48rem] md:min-h-[75rem] flex items-center justify-center">
       <Title
          align={["Center"]}
          bold={7}
          color="#ffffff"
          line={1.4}
          size={35}
          tag="h3"
          className="!min-w-full !text-[18rem] md:!text-[35rem]"
        >
          {name}
        </Title>
       </div>
       <div className="py-[15rem] md:py-[25rem]">
       <Thumbnail
          alt={thumb[1]}
          height={1081}
          src={thumb[0]}
          width={1560}
        />
       </div>
        <ButtonBasic
          bgcolor="#ffffff"
          color="#533b2b"
          fontSize={25}
          height={75}
          label={button}
          weight={5}
          width={520}
          className="!min-w-full !min-h-[48rem] md:!min-h-[75rem] !text-[14rem] md:!text-[25rem]"
        />
      </div>
    </>
  );
}

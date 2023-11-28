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
      <div className={`max-w-[520rem] ${className}`}>
       <div className="bg-[#533b2b] min-h-[75rem] flex items-center justify-center">
       <Title
          align={["Center"]}
          bold={4}
          color="#ffffff"
          line={1.4}
          size={35}
          tag="h3"
        >
          {name}
        </Title>
       </div>
       <div className="py-[25rem]">
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
          weight={4}
          width={520}
        />
      </div>
    </>
  );
}

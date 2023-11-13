import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface Card {
  button?: string;
  src: string;
  width: number;
  height?: number;
  href?: string;
  alt?: string;
  className?: string;
  children: ReactElement;
}

export const card = {
  normal({
    src,
    width,
    height,
    href,
    button,
    children,
    alt = "",
    className,
  }: Card) {
    return (
      <section>
        <Image src={src} width={width} height={height} alt="" />
        <hgroup className={className}>{children}</hgroup>
      </section>
    );
  },
};

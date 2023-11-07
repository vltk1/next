import Image from "next/image";
import Link from "next/link";

interface Card{
    button?: string;
    url?: string;
    src: string;
    alt?: string;
    children: any;
}
function Card(props: Card) {
    const {src, url, button, children, alt = ""} = props
    return (
        <section className='w-full max-w-[30%] border-2 border-red-600'>
          <img src={src} alt={alt} />
          <hgroup>{children}</hgroup>
          <div className='flex w-full justify-center mx-auto max-w-[120px] bg-slate-600'>
            <Link href="/dashboard">{button}</Link>
          </div>
        </section>
    );
}

export default Card;
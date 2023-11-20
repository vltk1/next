import { Button } from '../../Atoms/Button/Button';
import { font } from '../../Atoms/Font';

interface Card{
    src: string;
    title: string;
    text: string;
    title_font: number[];
    text_font: number[];
}


export function Card({src, title, title_font, text, text_font}:Card) {
    return (
        <>
            <section className='w-1/3 border-2'>
                <figure>
                    <img src={src} alt="" />
                </figure>
                <hgroup className='p-2'>
                    <font.h3 xs={title_font} className='mb-[15px]'>
                       {title}
                    </font.h3>
                    <font.p xs={text_font}>
                        {text}
                    </font.p>
                </hgroup>
                <Button
                    bgcolor="#205bdc"
                    border="#1926e0"
                    color="#cadff3"
                    height={40}
                    label="Hile trang"
                    radius={3}
                    width={200}
                    />
            </section>
        </>
    );
}
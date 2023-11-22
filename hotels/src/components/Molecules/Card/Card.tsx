import { Button } from '../../Atoms/Button/Button';
import { Font } from '../../Atoms/Font';

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
            <h2>hêllop</h2>
        </>
    );
}
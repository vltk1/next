import { font } from '../Font';

interface Typography{
    title: string;
    setting: number[];
    color?: string;
}


export function Typography({title, setting, color }:Typography) {
    return (
        <>
            <font.h3 xs={setting} >
                <b>
                    {title}
                    <style jsx>{`
                        b{
                            color: ${color};
                        }
                    `}</style>
                </b>
            </font.h3>
        </>
    );
}
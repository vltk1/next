import { Font } from '../Font';

export function Typography({title, size, line, bold, color, className="", customs, tag="" }:Typography) {
    console.log(customs)
    return (
        <>
            <Font xs={[size, line, bold]} tag={tag}>
               <h3 className={className}>
                    {title}
                    <style jsx>{`
                        h3{
                            color: ${color};
                        }
                    `}</style>
               </h3>
            </Font>
        </>
    );
}
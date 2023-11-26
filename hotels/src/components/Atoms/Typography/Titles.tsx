import { Font } from '../Font';

export function Titles({label, size, line, bold, color, className="", tag="" }:Typography) {
    return (
        <>
            <Font xs={[size, line, bold]} tag={tag}>
               <h3 className={className}>
                    {label}
                    <style jsx>{`
                        ${tag}{
                            color: ${color};
                            font-size: ${size}rem;
                            line-height: ${line};
                            font-weight: ${bold}00;
                            white-space: pre-wrap;
                        }
                    `}</style>
               </h3>
            </Font>
        </>
    );
}

// Break Line: CSS: white-space: pre-wrap;
// Break Line: JS
// {label.split('\n\n').map(paragraph => <p>{
//     paragraph.split('\n').reduce((total, line):any=>[total, <br />, line])}</p>)}
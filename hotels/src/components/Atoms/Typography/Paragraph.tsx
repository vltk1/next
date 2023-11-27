import { AnyCnameRecord } from 'dns';
import { Font } from '../Font';

export function Paragraph({label, size, line, bold, color, align, className="", children}:any) {
    return (
        <p className={className}>
        {children}
        <style jsx>{`
            p{
                color: ${color};
                font-size: ${size}rem;
                line-height: ${line};
                font-weight: ${bold}00;
                text-align: ${align[0]};
            }
        `}</style>
    </p>
    );
}

// Break Line: CSS: white-space: pre-wrap;
// Break Line: JS
// {label.split('\n\n').map(paragraph => <p>{
//     paragraph.split('\n').reduce((total, line):any=>[total, <br />, line])}</p>)}
import { Font } from '../Font';

export function Paragraphs({label, size, line, bold, color, className="", tag="" }:Typography) {
    return (
        <>
            <Font xs={[size, line, bold]} tag={tag}>
               <h3 className={className}>
                    {label}
                    <style jsx>{`
                        ${tag}{
                            color: ${color};
                            white-space: pre-wrap;
                        }
                    `}</style>
               </h3>
            </Font>
        </>
    );
}
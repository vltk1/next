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
                        }
                    `}</style>
               </h3>
            </Font>
        </>
    );
}
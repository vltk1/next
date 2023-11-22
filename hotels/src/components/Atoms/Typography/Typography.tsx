import { Font } from '../Font';

export function Typography({label, size, line, bold, color, className="", customs, tag="" }:Typography) {
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
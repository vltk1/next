import { Font } from '../Font';

export function Title({children, size, line, bold, color, bgcolor, className="", tag="", align=["left"] }:Typography) {
    return (
        <>
            <TitleChildren tag={tag}>
               <div className={className}>
                    {children}
                    <style jsx>{`
                        ${tag}{
                            color: ${color};
                            font-size: ${size}rem;
                            line-height: ${line};
                            font-weight: ${bold}00;
                            text-align: ${align[0]};
                            background-color: ${bgcolor};
                        }
                    `}</style>
               </div>
            </TitleChildren>
        </>
    );
}

export function TitleChildren({children, tag}:TitleChildren) {
    switch(tag){
        case "h2": return <h2 className={children.props.className}>{children.props.children}</h2>
        case "h3": return <h3 className={children.props.className}>{children.props.children}</h3>
        case "h4": return <h4 className={children.props.className}>{children.props.children}</h4>
        case "h5": return <h5 className={children.props.className}>{children.props.children}</h5>
        case "h6": return <h6 className={children.props.className}>{children.props.children}</h6>
    }
}
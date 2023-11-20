interface Font{
    el: string;
    color?: string;
    xs: number[];
    md?: number[];
    className?: string;
    children: React.ReactNode;
}

function Font(props: Font) {
    let {el = "p", xs, md, className = "", color = ""} = props
    className = " " + className
    " axis-" + color ?? color 
    let [font, line, weight, align] = xs
    
    const axisFont = "axis-f" + font + " axis-f1." + line  + " axis-f" + weight + " axis-align" + align
    let axisFontMD = ""
    if(md){
        let [sizeMD, lineMD, weightMD, alignMD = ""] = md
        axisFontMD = " _axis-f" + sizeMD + " _axis-f1." + lineMD + " _axis-f" + weightMD + " _axis-align" + alignMD
    }

    switch(el){
        case "h1":
            return <h1 className={axisFont + axisFontMD + className + color}>{props.children}</h1>
        case "h2":
            return <h2 className={axisFont + axisFontMD + className + color}>{props.children}</h2>
        case "h3":
            return <h3 className={axisFont + axisFontMD + className + color}>{props.children}</h3>
        case "h4":
            return <h4 className={axisFont + axisFontMD + className + color}>{props.children}</h4>
        case "h5":
            return <h5 className={axisFont + axisFontMD + className + color}>{props.children}</h5>
        case "h6":
            return <h6 className={axisFont + axisFontMD + className + color}>{props.children}</h6>
        case "p":
            return <p className={axisFont + axisFontMD + className + color}>{props.children}</p>
        default:
            return <p className={axisFont + axisFontMD + className + color}>{props.children}</p>
    }
}

export default Font;
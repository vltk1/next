interface Font{
    el: string;
    xs: number[];
    md?: number[];
    variant?: string;
    children: any;
}

function Font(props: Font) {
    let {el = "p", xs, md = "", variant = ""} = props
    variant = " " + variant
    let [font, line, weight] = xs
    let axisFontMD = ""
    const axisFont = "axis-f" + font + " axis-f1." + line  + " axis-f" + weight
    if(md){
        let [fontMD, lineMD, weightMD] = md
        axisFontMD = " _axis-f" + fontMD + " _axis-f1." + lineMD + " _axis-f" + weightMD
    }
    

    switch(el){
        case "h1":
            return <h1 className={axisFont + axisFontMD + variant}>{props.children}</h1>
        case "h2":
            return <h2 className={axisFont + axisFontMD + variant}>{props.children}</h2>
        case "h3":
            return <h3 className={axisFont + axisFontMD + variant}>{props.children}</h3>
        case "h4":
            return <h4 className={axisFont + axisFontMD + variant}>{props.children}</h4>
        case "h5":
            return <h5 className={axisFont + axisFontMD + variant}>{props.children}</h5>
        case "h6":
            return <h6 className={axisFont + axisFontMD + variant}>{props.children}</h6>
        case "p":
            return <p className={axisFont + axisFontMD + variant}>{props.children}</p>
        default:
            return <p className={axisFont + axisFontMD + variant}>{props.children}</p>
    }
}

export default Font;
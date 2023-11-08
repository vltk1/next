interface Font{
    el: string;
    xs: number[];
    md?: number[];
    children: any;
}

function Font(props: Font) {
    let {el = "p", xs, md = ""} = props
    let [font, weight, line] = xs
    let [fontMD, weightMD, lineMD] = xs
    const axisFont = "axis-f" + font + " axis-f" + weight + " axis-f" + line
    const axisFontMD = " _axis-f" + fontMD + " _axis-f" + weightMD + " _axis-f" + lineMD

    switch(el){
        case "h1":
            return <h1 className={axisFont + axisFontMD}>{props.children}</h1>
        case "h2":
            return <h2 className={axisFont + axisFontMD}>{props.children}</h2>
        case "h3":
            return <h3 className={axisFont + axisFontMD}>{props.children}</h3>
        case "h4":
            return <h4 className={axisFont + axisFontMD}>{props.children}</h4>
        case "h5":
            return <h5 className={axisFont + axisFontMD}>{props.children}</h5>
        case "h6":
            return <h6 className={axisFont + axisFontMD}>{props.children}</h6>
        case "p":
            return <p className={axisFont + axisFontMD}>{props.children}</p>
        default:
            return <p className={axisFont + axisFontMD}>{props.children}</p>
    }
}

export default Font;
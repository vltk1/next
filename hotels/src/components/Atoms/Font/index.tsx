export function Font (drops: Font) {
    let {xs, md, variant = "", color = "", className = "", children, tag} = drops
    variant = " " + variant,
    className = " " + className,
    color = " axis-" + color
    let [size, line, weight, align = ""] = xs
    let axisFont = "axis-f" + size + " axis-f1." + line + " axis-f" + weight + " axis-align" + align + className
    let axisFontMD = ""
    if (md) {
        let [sizeMD, lineMD, weightMD, alignMD = ""] = md
        axisFontMD = " _axis-f" + sizeMD + " _axis-f1." + lineMD + " _axis-f" + weightMD + " _axis-align" + alignMD
    }
    // const element = ?children.type
    switch(tag){
        case "h2": return <h2 className={axisFont + axisFontMD + color + variant + children.props.className}>{children.props.children}</h2>
        case "h3": return <h3 className={axisFont + axisFontMD + color + variant + children.props.className}>{children.props.children}</h3>
        case "h4": return <h4 className={axisFont + axisFontMD + color + variant + children.props.className}>{children.props.children}</h4>
        case "h5": return <h5 className={axisFont + axisFontMD + color + variant + children.props.className}>{children.props.children}</h5>
        case "h6": return <h6 className={axisFont + axisFontMD + color + variant + children.props.className}>{children.props.children}</h6>
        case "p": return <p className={axisFont + axisFontMD + color + variant + children.props.className}>{children.props.children}</p>
    }
}

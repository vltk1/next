interface Font {
    el: string;
    color?: string;
    xs: number[];
    md?: number[];
    variant?: string;
    children: React.ReactNode;
}
export const font = {
    els(el:any){
        let {xs, md, variant = "", color = "", className = ""} = el
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
        return (axisFont + axisFontMD + color + variant)
    },
    h1(props: any){
        return <h1 className={font.els(props)}>{props.children}</h1>
    },
    h2(props: any){
        return <h2 className={font.els(props)}>{props.children}</h2>
    },
    h3(props: any){
        return <h3 className={font.els(props)}>{props.children}</h3>
    },
    h4(props: any){
        return <h4 className={font.els(props)}>{props.children}</h4>
    },
    h5(props: any){
        return <h5 className={font.els(props)}>{props.children}</h5>
    },
    h6(props: any){
        return <h6 className={font.els(props)}>{props.children}</h6>
    },
    p(props: any){
        return <h6 className={font.els(props)}>{props.children}</h6>
    },
    strong(props: any){
        return <strong className={font.els(props)}>{props.children}</strong>
    },
    em(props: any){
        return <em className={font.els(props)}>{props.children}</em>
    },
   
}

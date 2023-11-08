import "../../../styles/Font2.scss"

interface Font2{
    el: string;
    xs: string;
    md?: string;
    children: any;
}

function Font2(props: Font2) {
    let {el = "p", xs = "", md = ""} = props
    md = md.replace(/\*/g,"_*")
    switch(el){
        case "h1":
            return <h1 className={"Font2 " + xs + " " + md}>{props.children}</h1>
        case "h2":
            return <h2 className={"Font2 " + xs + " " + md}>{props.children}</h2>
        case "h3":
            return <h3 className={"Font2 " + xs + " " + md}>{props.children}</h3>
        case "h4":
            return <h4 className={"Font2 " + xs + " " + md}>{props.children}</h4>
        case "h5":
            return <h5 className={"Font2 " + xs + " " + md}>{props.children}</h5>
        case "h6":
            return <h6 className={"Font2 " + xs + " " + md}>{props.children}</h6>
        case "p":
            return <p className={"Font2 " + xs + " " + md}>{props.children}</p>
        default:
            return <p className={"Font2 " + xs + " " + md}>{props.children}</p>
    }
}

export default Font2;
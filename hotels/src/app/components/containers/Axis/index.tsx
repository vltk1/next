interface Axis{
    xs: number[][];
    md?: number[][];
    variant?: string;
    children: any;
}

function Axis(props: Axis) {
    const {xs, md, children, variant = ""} = props
    //XS
    const widthContainer: string = "w-["+ xs[0][0] +"px]"
    const minHeightItem: string = "min-h-["+ xs[1][1] +"px]"
    let justify: string = "justify-normal"
    let widthItem: number = Math.floor((((xs[1][0] / xs[0][0]) * 100) * 10))
    let widthItemFix: number =  (widthItem % 2)? widthItem = (widthItem - 1) / 10: widthItem / 10
    if((xs[1][0] === 1) || (widthItemFix > 50)) widthItemFix = 100
    const axisWidth: string = "axis-w" + widthItemFix
    let numberCol: number = xs[0][1]

    // console.log(">>>>>>", numberCol)

    switch(xs[2][0]){
        case 0:
            justify = " justify-normal"
            break
        case 1:
            justify = " justify-start"
            break
        case 2:
            justify = " justify-end"
            break
        case 3:
            justify = " justify-center"
            break
        case 4:
            justify = " justify-between"
            break
        case 5:
            justify = " justify-around"
            break
        case 6:
            justify = " justify-evenly"
            break
        case 7:
            justify = " justify-stretch"
            break
        default:
            justify = " justify-normal"
    }

   
    let axisWidthMD = ""
    if(md){
        numberCol= md[0][1]
        //MD
        const widthContainerMD: string = "w-["+ md[0][0] +"px]"
        const minHeightItemMD: string = "min-h-["+ md[1][1]+"px]"
        let justifyMD: string = "justify-normal"
        let widthItemMD: number = Math.floor((((md[1][0] / md[0][0]) * 100) * 10))
        let widthItemFixMD: number =  (widthItemMD % 2)? widthItemMD = (widthItemMD - 1) / 10: widthItemMD / 10
        if((md[1][0] === 1) || (widthItemFixMD > 50)) widthItemFixMD = 100

        switch(md[2][0]){
            case 0:
                justify = " justify-normal"
                break
            case 1:
                justify = " justify-start"
                break
            case 2:
                justify = " justify-end"
                break
            case 3:
                justify = " justify-center"
                break
            case 4:
                justify = " justify-between"
                break
            case 5:
                justify = " justify-around"
                break
            case 6:
                justify = " justify-evenly"
                break
            case 7:
                justify = " justify-stretch"
                break
            default:
                justify = " justify-normal"
        }
        axisWidthMD = " _axis-w" + widthItemFixMD
    }


    const renderCol = (): any => {
        const axiosRender: number[][] = []
        let m: number = 0, e: any = []
        for(let i = numberCol, s = props.children.length + 2; i <= s; i += numberCol){
            axiosRender.push(e)
            for(let j = m; j < i; j++){
                if(j < props.children.length){
                    // let inert = <div className={"w-full " + axisWidth + " " + minHeightItem + axisWidthMD}>{props.children[j].props.children}</div>
                    let inert = <div className={"w-full " + axisWidth + " " + minHeightItem + axisWidthMD}>{props.children[j].props.children}</div>
                    e.push(inert)
                }
            }
            e = []
            m = i
        }
        return (
            <>
            {axiosRender.map((row, index) =>{
                return(
                    <>
                    {row}<hr className="w-full hidden md:block"/>
                    </>
                    // <div key={index} className={"flex flex-wrap w-full" + justify}>
                        
                    // </div>
                )
            })}
            </>
        )
        console.log(axiosRender)
    }
    return (
        <>
        <div className=
            {
                "flex flex-wrap mx-auto "
                + widthContainer + justify + " " + variant
            }>
            {renderCol()}
        </div>
        </>
    );
}

export default Axis;
interface Axis{
    xs: number[][];
    md?: number[][];
    className?: string;
    variant?: string;
    children: any;
}

function Axis(props: Axis) {
    const {xs, md, children, className = "", variant = ""} = props
    //XS
    let widthContainerMD: string = ""

    const minHeightItem: string = "" //"min-h-["+ xs[0][1] +"px]"
    let justify: string = "justify-normal"
    let items: string = "items-start"
    let widthItem: number = Math.floor((((xs[0][0] / 768) * 100) * 10))
    let widthItemFix: number =  (widthItem % 2)? widthItem = (widthItem - 1) / 10: widthItem / 10
    if((xs[0][0] === 1) || (widthItemFix > 50)) widthItemFix = 100
    const axisWidth: string = "axis-w" + widthItemFix
    let numberCol: number = xs[0][1]

    // console.log(">>>>>>", numberCol)

    switch(xs[1][0]){
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

    let justifyMD: any =  "",
    justifyChildrenMD: any =  "",
    itemMD: any =  "",
    itemChildrenMD: any =  ""

    if(md){
        numberCol= md[0][1]
        //MD
        widthContainerMD = "md:max-w-container"
        const minHeightItemMD: string = "" //min-h-["+ md[1][1]+"px]"
   
        let widthItemMD: number = Math.floor((((md[1][0] / md[0][0]) * 100) * 10))
        let widthItemFixMD: number =  (widthItemMD % 2)? widthItemMD = (widthItemMD - 1) / 10: widthItemMD / 10
        if((md[1][0] === 1) || (widthItemFixMD > 50)) widthItemFixMD = 100
        
        justifyMD = md[0][2], 
        justifyChildrenMD =[1][2]

        switch( justifyMD || justifyChildrenMD){
            case 0:
                justify = " md:justify-normal"
                justifyMD = justify
                justifyChildrenMD = justify
                break
            case 1:
                justify = " md:justify-start"
                justifyMD = justify
                justifyChildrenMD = justify
                break
            case 2:
                justify = " md:justify-center"
                justifyMD = justify
                justifyChildrenMD = justify
                break
            case 3:
                justify = " md:justify-end"
                justifyMD = justify
                justifyChildrenMD = justify
                break
            case 4:
                justify = " md:justify-between"
                justifyMD = justify
                justifyChildrenMD = justify
                break
            case 5:
                justify = " md:justify-around"
                justifyMD = justify
                justifyChildrenMD = justify
                break
            case 6:
                justify = " md:justify-evenly"
                justifyMD = justify
                justifyChildrenMD = justify
                break
            case 7:
                justify = " md:justify-stretch"
                justifyMD = justify
                justifyChildrenMD = justify
                break
            default:
                justify = " md:justify-normal"
                justifyMD = justify
                justifyChildrenMD = justify
        }

        itemMD = md[0][2], 
        itemChildrenMD =[1][2]
        switch(itemMD || itemChildrenMD){
            case 0:
                items = ""
                itemMD = items
                itemChildrenMD = items
                break
            case 1:
                items = " md:items-start"
                itemMD = items
                itemChildrenMD = items
                break
            case 2:
                items = " md:items-center"
                itemMD = items
                itemChildrenMD = items
                break
            case 3:
                items = " md:items-end"
                itemMD = items
                itemChildrenMD = items
                break
            case 4:
                items = " md:items-baseline"
                itemMD = items
                itemChildrenMD = items
                break
            case 5:
                items = " md:items-stretch"
                itemMD = items
                itemChildrenMD = items
                break
            default:
                items = ""
                itemMD = items
                itemChildrenMD = items
        }
        axisWidthMD = " _axis-w" + widthItemFixMD
    }

    return (
        <>
        <div className=
            {
                "flex flex-wrap mx-auto justify-between "
                + widthContainerMD + justifyMD + " "  + " " + itemMD + " " + justify + " " + variant
            }>
                {
                    props.children.map((el: any, index: number) =>{
                        return (
                            <>
                                <div key={index} className={"flex flex-wrap w-full " + justifyChildrenMD + " " + itemChildrenMD + " " + axisWidth + " " + axisWidthMD + " " + className}>
                                {el.props.children}
                                </div>
                                {numberCol === (index + 1) && <hr key={index} className="w-full hidden md:block"/>}
                            </>
                        )
                    })
                }
        </div>
        </>
    );
}

export default Axis;
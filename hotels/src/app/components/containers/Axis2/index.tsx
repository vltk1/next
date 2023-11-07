
import React from "react";
interface Axis2{
    xs: number[][];
    md?: number[][];
    children: any;
}

function index(props: Axis2) {
    const {xs, md, children} = props
    const widthContainer: string = "w-["+ xs[0][0] +"px]"
    const numberItem: number = xs[0][1]
    const maxWidthItem: string = `axis-w${Math.floor(((xs[1][0] / xs[0][0]) * 100))}`
    const minHeightItem: string = "min-h-["+xs[1][1]+"px]"
    let justify: string = "justify-normal"
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
    return (
        <>
        <div className=
            {
                "gacon flex flex-wrap mx-auto "
                + widthContainer + justify
            }>
            {
                children.map((child: any, index: number) => {
                    return (
                        <div key={index} className={"" + maxWidthItem + " " + minHeightItem}>
                            {child.props.children}
                        </div>
                    )
                    
                })
            }
        </div>
        </>
    );
}

export default index;
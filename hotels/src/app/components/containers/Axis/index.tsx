import "../../../styles/axis.scss"

interface Axis{
    el?: string;
    attr?: string;
    xs?: number[];
    md?: number[];
    children: any;
}


function Axis(props: Axis) {
    let {el = "div", attr, xs, md} = props
    let arrs: any = props.children
    console.log(arrs)
   
    const els = (elVal: string) => {///
        const elClass = "axis x-100" + (attr ? " " + attr: "")
        switch(elVal){
            case "section":
                return <section className={elClass}>{box()}</section>
            case "article":
                return <article className={elClass}>{box()}</article>
            case "nav":
                return <nav className={elClass}>{box()}</nav>
            case "menu":
                return <menu className="axis x+100">{box()}</menu>
            case "aside":
                return <aside className={elClass}>{box()}</aside>
            default:
                return <div className={elClass}>{box()}</div>
        }
    }
    
    // [mobile]
    let [xsCol, xsSpace, xsAlignX, xsAlignY, xsWrap = 0] = xs ? xs : [0, 0, 0, 0, 0]
    let xsWraps = (xsWrap === 0) ? "" : " o" // Căn nội dung trái phải
    let xsAlignXs = (xsAlignX === 0) ? "" : " o-" + xsAlignX // Căn nội dung trái phải
    let xsAlignYs = (xsAlignY === 0) ? "" : " o+" + xsAlignY // Căn nội dung trên dưới
    let xsCols = (xsCol === 0) ? "" : " x+" + ((100 - (xsSpace * (xsCol - 1))) / xsCol).toFixed() // chia cột
    
    // [desktop]
    let [mdCol, mdSpace, mdAlignX, mdAlignY, mdWrap = 0] = md ? md : [0, 0, 0, 0, 0]
    let mdWraps = (mdWrap === 0) ? "" : " _o" // Căn nội dung trái phải
    let mdAlignXs = (mdAlignX === 0) ? "" : " _o-" + mdAlignX
    let mdAlignYs = (mdAlignY === 0) ? "" : " _o+" + mdAlignY
    let mdCols = (mdCol === 0) ? "" : " _x+" + ((100 - (mdSpace * (mdCol - 1) )) / mdCol).toFixed()

    //console.log(arrs[1].type)
   
    const box = () => {
        if((Array.isArray(arrs)) && (Array.isArray(xs))){// Check  nội dung truyền vào có phải là mảng không
            
            // console.log(arrs)

            return arrs.map((e, index) => {
                
                let arrChild = e.props.children
               

                if(typeof e.type === 'function'){ // Kiểm tra element truyền vào có phải hàm không
                    
                     // XS - MD: Số cột, Kích thước cột và căn nội dung theo trên dưới, trái phải
                     let [xsIICol, xsIISpace, xsIIAlignX, xsIIAlignY, xsIIWrap = 0] = e.props.xs ? e.props.xs : [0, 0, 0, 0]
                     let xsIIWraps = (xsIIWrap === 0) ? "" : " o" // Căn nội dung trái phải
                     let xsIIAlignXs = (xsIIAlignX === 0) ? "" : " o-" + xsIIAlignX // Căn nội dung trái phải
                     let xsIIAlignYs = (xsIIAlignY === 0) ? "" : " o+" + xsIIAlignY // Căn nội dung trên dưới
                     let xsIICols = (xsIICol === 0) ? "" : " x+" + ((100 - (xsIISpace * (xsIICol - 1))) / xsIICol).toFixed()
                     
                     let [mdIICol, mdIISpace, mdIIAlignX, mdIIAlignY, mdIIWrap = 0] = e.props.md ? e.props.md : [0, 0, 0, 0]
                     let mdIIWraps = (mdIIWrap === 0) ? "" : " _o" // Căn nội dung trái phải
                     let mdIIAlignXs = (mdIIAlignX === 0) ? "" : " _o-" + mdIIAlignX
                     let mdIIAlignYs = (mdIIAlignY === 0) ? "" : " _o+" + mdIIAlignY
                     let mdIICols = (mdIICol === 0) ? "" : " _x+" + ((100 - (mdIISpace * (mdIICol - 1))) / mdIICol).toFixed()

                    if((Array.isArray(arrChild)) && (Array.isArray(e.props.xs))){ // Check  nội dung truyền vào có phải là mảng không
                        
                        return (// thêm class ở phần tử con
                            <div key={index} className={
                                "axis" + xsCols + mdCols
                                }>
                                {arrChild.map((e3, index)=> {// duyệt phần tử cháu

                                    if(typeof e3.type === 'function'){ // kiểm tra phần tử cháu có phải axis hay element
                                        return <div key={index} className={
                                            "axis" 
                                            + xsIICols + xsIIAlignXs + xsIIAlignYs + xsIIWraps
                                            + mdIICols + mdIIAlignXs + mdIIAlignYs + mdIIWraps
                                        
                                        }>{e3.props.children}</div>
                                    }else{// hiển thị phần tử chau không có con
                                        return <>{e3}</>
                                    }
                                })}
                            </div>
                        )
                    }else{// hiển thị phần tử cháu
                        return <div key={index} className={
                            "axis" 
                            + xsCols+ xsAlignXs + xsAlignYs + xsWraps
                            + mdCols + mdAlignXs + mdAlignYs + mdWraps
                        }>{e.props.children}</div>
                    }
                }else{// hiển thị phần tử cha không có con
                    return <>{e}</>
                }
            })
        }else {
            return <>{props.children}</> // Phần tử đầu tiên
        }
    }
    return (// Phần tử ông có con
        els(el)
    )
}

export default Axis;
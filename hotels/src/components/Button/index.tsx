'use client';
import { useState} from 'react';
// import {getWave} from '../wave';

interface Button{
    variant?: string;
    children: any;
}
function Button(props: Button) {
    const {variant, children} = props
    const [btnActive, setbtnActive] = useState<string>("")
    function handleClick (){
        setbtnActive("btn-active")
        setTimeout(()=> setbtnActive(""), 280)
    }
    return (
        <button onClick={handleClick} className={"button-wave button " + variant + " " + btnActive}>
            {children}
        </button>
    );
}

export default Button;
'use client'

import Axis from "@components/Axis";
import Font from "@components/Font";

function category(props) {
    return (
        <article>
            <Font el="h2" xs={[50, 2, 7]} color="blue">We Offer Best Services</Font>
            <Axis xs={[267, 0], [4, 1]}>
                <div>
                 Calculated Weather 
                </div>
                <div>
                 Calculated Weather 
                </div>
                <div>
                 Calculated Weather 
                </div>
                <div>
                 Calculated Weather 
                </div>
            </Axis>
        </article>
    );
}

export default category;
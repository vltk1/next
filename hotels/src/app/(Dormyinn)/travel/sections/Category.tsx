import Axis from '@components/Axis';
import Font from '@components/Font';
import React from 'react';

function Category() {
    return (
        <article>
            <Font el="h2" xs={[50, 4, 7, 2]} >
                We Offer Best Services
            </Font>
            <Axis xs={[[200,0], [3, 3]]} md={[[1000, 2], [200, 0], [2, 2]]}>
               <section>
                <h4>Calculated Weather </h4>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
               </section>
               <section>
                <h4>Calculated Weather </h4>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
               </section>
               <section>
                <h4>Calculated Weather </h4>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
               </section>
               <section>
                <h4>Calculated Weather </h4>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
               </section>
            </Axis>
        </article>
    );
}

export default Category;


import Axis from '@components/Axis';
import Font from '@components/Font';
import Image from 'next/image';
import React from 'react';
import img1 from '@public/travel/services/item1.png'
import img2 from '@public/travel/services/item2.png'
import img3 from '@public/travel/services/item3.png'
import img4 from '@public/travel/services/item4.png'
import styles from './Category.module.scss';

function Category() {
    return (
        <article>
            <Font el="h2" xs={[50, 4, 7, 2]} >
                We Offer Best Services
            </Font>
            <Axis xs={[[200,0], [3, 3]]} md={[[1000, 4, 2, 5], [200, 0, 2, 2]]} className={styles.items}>
               <>
                <Image src={img1} width={166} height={153} alt="12" />
                <Font el="h2" xs={[20, 4, 7, 2]} className='max-w-[80%] mb-2'>
                 Calculated Weather
                </Font>
                <Font el="p" xs={[16, 4, 4, 2]} className='max-w-[80%] mb-4'>
                    Built Wicket longer admire do barton vanity itself do in it.
                </Font>
               </>
               <>
                <Image src={img2} width={166} height={153} alt="12" />
                <Font el="h2" xs={[20, 4, 7, 2]} className='max-w-[80%] mb-2'>
                 Calculated Weather
                </Font>
                <Font el="p" xs={[16, 4, 4, 2]} className='max-w-[80%] mb-4'>
                    Built Wicket longer admire do barton vanity itself do in it.
                </Font>
               </>
               <>
                <Image src={img3} width={166} height={153} alt="12" />
                <Font el="h2" xs={[20, 4, 7, 2]} className='max-w-[80%] mb-2'>
                 Calculated Weather
                </Font>
                <Font el="p" xs={[16, 4, 4, 2]} className='max-w-[80%] mb-4'>
                    Built Wicket longer admire do barton vanity itself do in it.
                </Font>
               </>
               <>
                <Image src={img4} width={166} height={153} alt="12" />
                <Font el="h2" xs={[20, 4, 7, 2]} className='max-w-[80%] mb-2'>
                 Calculated Weather
                </Font>
                <Font el="p" xs={[16, 4, 4, 2]} className='max-w-[80%] mb-4'>
                    Built Wicket longer admire do barton vanity itself do in it.
                </Font>
               </>
            </Axis>
        </article>
    );
}

export default Category;


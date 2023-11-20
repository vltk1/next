"use client";
import Axis from '@components/Atoms/Axis';
import { font } from '@components/Atoms/Font';


export default function Inko_channel() {
  return (
    <>
     
     <h1 className="text-[15px] text-[red] w-full">12121212</h1>
     <Axis xs={[[240,1],[1,1]]} md={[[980, 3, 2, 2],[200, 0, 2, 2]]}>
            <>
            <section className='w-1/3 border-2'>
                <figure>
                    <img src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43" alt="" />
                </figure>
                <hgroup>
                    <font.h3 xs={[24, 7, 1, 1]}>
                        ASP.NET MVC
                    </font.h3>
                    <p>Nick Harrison</p>
                    <p>ASP.NET Model View Controller design pattern to keep the data, views, and logic clearly separated in apps.</p>
                </hgroup>
            </section>
            </>
        </Axis>
    </>
  );
}

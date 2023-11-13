'use client'
import Axis from "@components/Axis";
import Font from "@components/Font";
import Image from "next/image";
import Traveller from '@public/traveller.png'
import Button from "@components/Button";

function Hero() {
    return (
        <article className="hero">
            <Axis xs={[[100, 0], [3, 1]]} md={[[1160, 2], [420, 0], [2, 2]]}>
               <div>
                    <hgroup>
                        <Font el="p" xs={[20, 4, 7]} color="orange">Best Destinations around the world</Font>
                        <Font el="h2" xs={[72, 1, 7]} color="blue" variant="w-[500px]">
                            Travel, enjoy
                            and live a new
                            and full life
                        </Font>
                    </hgroup>
                    <Font el="p" xs={[16, 9, 5]} color="blueViolet">
                        A dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat n
                    </Font>
                    <div className="flex">
                        <Button variant="mr-[30px]">Find out more</Button>
                        <Button>Play Demo</Button>
                    </div>
               </div>
               <div>
                    <Image src={Traveller} alt="Traveller" width={765} height={764} className="min-w-[765px]" />
               </div>
            </Axis>
        </article>
    );
}

export default Hero;
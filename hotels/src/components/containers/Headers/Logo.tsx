import Image from 'next/image'
interface Logo{
 variant?: string;
 width: number;
 height?: number;
}
export const Logo = ({variant, width, height = 0}: Logo) => (
    <h1 className={variant}>
        <Image src="/next.svg" width={width} height={height} alt="oke" />
    </h1>
)
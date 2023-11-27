import Images from "next-image-export-optimizer";
import { ReactElement } from "react";

export function Thumbnail({src, width , height, alt = "", caption, className = ""}:Thumbnail) {
  return (
    <figure className={`relative ${className}`}>
      <Images src={src} width={width} height={height} alt={alt} className="inline-block" />
      {caption ? <figcaption className='border'>{caption}</figcaption>: ''}
    </figure>
  );
}

import Img from "next-image-export-optimizer";
import { ReactElement } from "react";

export function ThumbnailSimlpe({src, width , height, alt = "", caption ="", className = ""}:Thumbnail) {
  return (
    <figure className={`relative ${className}`}>
      <Img src={src} width={width} height={height} alt={alt} />
      <figcaption className={`${className}`}>{caption}</figcaption>
    </figure>
  );
}

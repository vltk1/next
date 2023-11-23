
export function Figure({src, width, height, alt = "", caption ="", className = ""}:Figure) {
  const srcSet = `${src}?scale.width=${width}&hue=41`
  return (
    <figure className="relative">
      <img src={srcSet} width={width} height={height} alt={alt} />
      <figcaption className={`${className}`}>{caption}</figcaption>
    </figure>
  );
}

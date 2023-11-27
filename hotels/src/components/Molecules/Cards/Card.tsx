import { Figure } from "../../Atoms/Thumbnail";
import { Font } from "../../Atoms/Font";

export function Card({
  src,
  width,
  name,
  price,
  currency,
  description = "",
  className = "",
}: Card) {
  return (
    <>
      <div itemScope itemType="http://schema.org/Product" className={className}>
        <Figure src={src} width={width} />
        <dt itemProp="name">{name}</dt>
        {price && (
          <dd itemProp="offers" itemScope itemType="http://schema.org/Offer">
            <span itemProp="price">{price}</span>
            <data itemProp="priceCurrency" value="EUR">
              {currency}
            </data>
          </dd>
        )}
        <dd itemProp="description">{description}</dd>
      </div>
    </>
  );
}

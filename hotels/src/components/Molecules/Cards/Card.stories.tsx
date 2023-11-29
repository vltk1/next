import type { Meta, StoryObj } from '@storybook/react';
import { Cards, Card } from '.';

const meta = {
  title: 'Molecules/Cards',
  component: Cards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {control: 'text'},
    width: {control: 'number'},
    name:{control: 'text'},
    description:{control: 'text'},
    price: {control: 'number'},
    currency:{control: 'text'}
  },
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;
export const add = {
  args: {
    children: (<Card name='Hello' thumb={['/images/card/photo1.png','null']} button='Nut lo' className="w-100" />),
  },
};




{/* <div itemScope itemType="http://schema.org/Product" className={className}>
  <Thumbnail src={src} width={width} height={height} alt="" />
  <div itemProp="name">{name}</div>
  {price && (
    <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
      <span itemProp="price">{price}</span>
      <data itemProp="priceCurrency" value="EUR">
        {currency}
      </data>
    </div>
  )}
  <p itemProp="description">{description}</p>
</div> */}
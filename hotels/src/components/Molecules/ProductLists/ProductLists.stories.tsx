import type { Meta, StoryObj } from '@storybook/react';
import { ProductLists } from '.';
import { ProductListItems } from './ProductListItems';

const meta = {
  title: 'Molecules/Product lists',
  component: ProductLists,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {control: 'number'},
  },
} satisfies Meta<typeof ProductLists>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Simple  = {
  args: {
    children:(<ProductListItems />),
  }
};



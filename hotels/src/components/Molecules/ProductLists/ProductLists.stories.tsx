import type { Meta, StoryObj } from '@storybook/react';
import { ProductLists } from '.';
import { ProductListTab1, ProductListTab2, ProductListTab3 } from './ProductListItems';

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

export const Tab1  = {
  args: {
    children:(<ProductListTab1 />),
  }
};

export const Tab2  = {
  args: {
    children:(<ProductListTab2 />),
  }
};

export const Tab3  = {
  args: {
    children:(<ProductListTab3 />),
  }
};


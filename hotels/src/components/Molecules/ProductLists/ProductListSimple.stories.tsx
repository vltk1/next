import type { Meta, StoryObj } from '@storybook/react';
import { ProductListSimple } from './ProductListSimple';

const meta = {
  title: 'Molecules/Product lists/Product list simple',
  component: ProductListSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
    columns: {control: 'number'},
    spaceY: {control: 'number'},
    spaceX: {control: 'number'},
    className: {control: 'text'},
  },
} satisfies Meta<typeof ProductListSimple>;
export default meta;
type Story = StoryObj<typeof meta>;

export const add:Story  = {
  args: {
    label: 'Job Postings',
  }
};

export const Simple  = {
  args: {
  }
};



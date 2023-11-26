import type { Meta, StoryObj } from '@storybook/react';
import { ProductFeatureSimple } from './ProductFeatureSimple';

const meta = {
  title: 'Molecules/Product Features/Product feature simple',
  component: ProductFeatureSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof ProductFeatureSimple>;
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



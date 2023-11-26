import type { Meta, StoryObj } from '@storybook/react';
import { PromoSectionSimple } from './PromoSectionSimple';

const meta = {
  title: 'Molecules/Promo Sections/Promo section simple',
  component: PromoSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof PromoSectionSimple>;
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



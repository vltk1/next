import type { Meta, StoryObj } from '@storybook/react';
import { Cuisine } from '.';
import { CafeAndRestaurent } from './CafeAndRestaurent';

const meta = {
  title: 'Templates/Cuisine',
  component: Cuisine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    description:  {control: 'text'},
  },
} satisfies Meta<typeof Cuisine>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Simple: Story  = {
  args: {
  }
};


export const Cafe_Restaurent: Story = {
  args: {
    children: (<CafeAndRestaurent />),
  }
};

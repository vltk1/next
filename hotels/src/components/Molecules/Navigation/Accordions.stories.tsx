import type { Meta, StoryObj } from '@storybook/react';
import { Accordions } from './Accordions';

const meta = {
  title: 'Molecules/Navigation/Accordions',
  component: Accordions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof Accordions>;
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



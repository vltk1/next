import type { Meta, StoryObj } from '@storybook/react';
import { Magellans } from './Magellans';

const meta = {
  title: 'Molecules/Navigation/Magellans',
  component: Magellans,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof Magellans>;
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



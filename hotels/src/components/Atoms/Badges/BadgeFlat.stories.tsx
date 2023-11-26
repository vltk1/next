import type { Meta, StoryObj } from '@storybook/react';
import { BadgeFlat } from './BadgeFlat';

const meta = {
  title: 'Molecules/Badges/Badge flat',
  component: BadgeFlat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof BadgeFlat>;
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



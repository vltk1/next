import type { Meta, StoryObj } from '@storybook/react';
import { MediaObjectBasic } from './MediaObjectBasic';

const meta = {
  title: 'Molecules/Media Objects/Media object basic',
  component: MediaObjectBasic,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof MediaObjectBasic>;
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



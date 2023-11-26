import type { Meta, StoryObj } from '@storybook/react';
import { ListContainerSimple } from './ListContainerSimple';

const meta = {
  title: 'Molecules/List Containers/List container simple',
  component: ListContainerSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof ListContainerSimple>;
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



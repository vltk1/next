import type { Meta, StoryObj } from '@storybook/react';
import { ListMessage } from './ListMessage';

const meta = {
  title: 'Molecules/Messages/ListMessage',
  component: ListMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof ListMessage>;
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



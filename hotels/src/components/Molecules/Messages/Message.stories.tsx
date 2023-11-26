import type { Meta, StoryObj } from '@storybook/react';
import { Message } from './Message';

const meta = {
  title: 'Molecules/Messages/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof Message>;
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



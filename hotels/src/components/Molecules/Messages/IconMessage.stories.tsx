import type { Meta, StoryObj } from '@storybook/react';
import { IconMessage } from './IconMessage';

const meta = {
  title: 'Molecules/Messages/IconMessage',
  component: IconMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof IconMessage>;
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



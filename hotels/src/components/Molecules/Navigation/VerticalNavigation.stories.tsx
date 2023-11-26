import type { Meta, StoryObj } from '@storybook/react';
import { VerticalNavigation } from './VerticalNavigation';

const meta = {
  title: 'Molecules/Navigation/Vertical navigation',
  component: VerticalNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof VerticalNavigation>;
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



import type { Meta, StoryObj } from '@storybook/react';
import { CategoryPreviewSimple } from './CategoryPreviewSimple';

const meta = {
  title: 'Molecules/Category Previews/Category preview simple',
  component: CategoryPreviewSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof CategoryPreviewSimple>;
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



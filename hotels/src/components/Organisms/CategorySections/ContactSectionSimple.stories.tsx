import type { Meta, StoryObj } from '@storybook/react';
import { ContactSectionSimple } from './ContactSectionSimple';

const meta = {
  title: 'Organisms/Category Sections/Category section simple',
  component: ContactSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    description:  {control: 'text'},
  },
} satisfies Meta<typeof ContactSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story  = {
  args: {
    title: 'Job Postings',
    description: '',
  }
};


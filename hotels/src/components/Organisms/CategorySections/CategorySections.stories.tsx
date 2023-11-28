import type { Meta, StoryObj } from '@storybook/react';
import { CategorySections } from '.';
import { CategorySectionSimple } from './CategorySectionSimple';

const meta = {
  title: 'Organisms/CategorySections',
  component: CategorySections,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    description:  {control: 'text'},
  },
} satisfies Meta<typeof CategorySections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story  = {
  args: {
   children: (<CategorySectionSimple />)
  }
};


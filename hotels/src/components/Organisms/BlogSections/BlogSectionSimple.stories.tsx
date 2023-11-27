import type { Meta, StoryObj } from '@storybook/react';
import { BlogSectionSimple } from './BlogSectionSimple';

const meta = {
  title: 'Organisms/Blog Sections/Blog section simple',
  component: BlogSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof BlogSectionSimple>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Simple: Story = {
  args: {
  }
};

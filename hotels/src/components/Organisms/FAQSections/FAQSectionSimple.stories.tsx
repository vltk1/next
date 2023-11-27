import type { Meta, StoryObj } from '@storybook/react';
import { FAQSectionSimple } from './FAQSectionSimple';

const meta = {
  title: 'Organisms/FAQ Sections/FAQ section simple',
  component: FAQSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof FAQSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Simple: Story = {
  args: {
    width: 1000,
  }
};

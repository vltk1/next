import type { Meta, StoryObj } from '@storybook/react';
import { NewsletterSectionSimple } from './NewsletterSectionSimple';

const meta = {
  title: 'Organisms/Newsletter Sections/Newsletter section simple',
  component: NewsletterSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof NewsletterSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Simple: Story = {
  args: {
    width: 1000,
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { FeatureSectionSimple } from './FeatureSectionSimple';

const meta = {
  title: 'Organisms/Feature Sections/Feature section simple',
  component: FeatureSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    description:  {control: 'text'},
  },
} satisfies Meta<typeof FeatureSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story  = {
  args: {
    title: 'Job Postings',
    description: '',
  }
};


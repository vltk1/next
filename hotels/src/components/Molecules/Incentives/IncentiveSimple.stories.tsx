import type { Meta, StoryObj } from '@storybook/react';
import { IncentiveSimple } from './IncentiveSimple';

const meta = {
  title: 'Molecules/Incentives/Incentive simple',
  component: IncentiveSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof IncentiveSimple>;
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



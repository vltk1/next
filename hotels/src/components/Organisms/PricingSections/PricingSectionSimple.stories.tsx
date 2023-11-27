import type { Meta, StoryObj } from '@storybook/react';
import { PricingSectionSimple } from './PricingSectionSimple';

const meta = {
  title: 'Organisms/Pricing Sections/Pricing section simple',
  component: PricingSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof PricingSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Simple: Story = {
  args: {
    width: 1000,
  }
};

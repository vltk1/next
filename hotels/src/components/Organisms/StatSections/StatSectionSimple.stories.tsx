import type { Meta, StoryObj } from '@storybook/react';
import { StatSectionSimple } from './StatSectionSimple';

const meta = {
  title: 'Organisms/StatSections/Stat section simple',
  component: StatSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof StatSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Simple: Story = {
  args: {
    width: 1000,
  }
};

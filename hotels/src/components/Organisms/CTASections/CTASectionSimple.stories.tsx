import type { Meta, StoryObj } from '@storybook/react';
import { CTASectionSimple } from './CTASectionSimple';

const meta = {
  title: 'Organisms/CTA Sections/CTA sections simple',
  component: CTASectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof CTASectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    width: 1000,
  }
};

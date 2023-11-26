import type { Meta, StoryObj } from '@storybook/react';
import { HeaderSectionSimple } from './HeaderSectionSimple';

const meta = {
  title: 'Organisms/Header sections/Header section simple',
  component: HeaderSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof HeaderSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    width: 1000,
  }
};

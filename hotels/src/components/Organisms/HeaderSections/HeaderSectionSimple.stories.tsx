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
    top: {control: 'number'},
    right: {control: 'number'},
    bottom: {control: 'number'},
    left: {control: 'number'},
  },
} satisfies Meta<typeof HeaderSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    top: 20, 
    right: 20, 
    bottom: 20,
    left: 20,
  }
};

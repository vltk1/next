import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
const meta = {
  title: 'Molecules/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bgcolor: { control: { type: 'color', presetColors: ['red', 'green']} },
    active: { control: 'boolean' },
    align: { control: 'multi-select', options: ['Left', 'Center', 'Right', 'Between']},
    object: { control: { type: 'file', accept: '.png' } },
    width: {control: 'number'},
    height: {control: 'number'},
    radius: {control: 'number'},
    color: {control: 'color'},
    border: {control: 'color'},
  },
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Simple = {
  args: {
    align: ['Center']
  }
};

export const index = {
  args: {
    align:  ['Center']
  }
};
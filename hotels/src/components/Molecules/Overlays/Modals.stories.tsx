import type { Meta, StoryObj } from '@storybook/react';
import { Modals } from './Modals';
const meta = {
  title: 'Molecules/Overlays/Modals',
  component: Modals,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bgcolor: { control: { type: 'color', presetColors: ['red', 'green']} },
    active: { control: 'boolean' },
    check: { control: 'multi-select', options: ['USA', 'Canada', 'Mexico'] },
    object: { control: { type: 'file', accept: '.png' } },
    width: {control: 'number'},
    height: {control: 'number'},
    radius: {control: 'number'},
    color: {control: 'color'},
    border: {control: 'color'},
  },
} satisfies Meta<typeof Modals>;
export default meta;
type Story = StoryObj<typeof meta>;


export const add = {
  args: {
    title: 'Job Postings',
  }
};

export const Simple = {
  args: {
    title: 'Job Postings',
  }
};

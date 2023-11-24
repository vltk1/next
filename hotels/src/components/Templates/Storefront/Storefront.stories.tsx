import type { Meta, StoryObj } from '@storybook/react';
import { Storefront } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Templates/Store Front',
  component: Storefront,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
    description:  {control: 'text'},
  },
} satisfies Meta<typeof Storefront>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple: Story  = {
  args: {
    title: 'Job Postings',
    description: '',
  }
};


export const Double: Story = {
  args: {
    title: 'Job Postings',
    description: '',
  }
};

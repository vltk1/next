import type { Meta, StoryObj } from '@storybook/react';

import { ButtonBasic } from './ButtonBasic';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Button/Button Basic',
  component: ButtonBasic,
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
  },
} satisfies Meta<typeof ButtonBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const varient = {
  args: {
    label: 'Hile trang'
  },
};

export const normal = {
  args: {
    bgcolor:"",
    color:"#253498",
    label:"Learn more →",
  },
};

export const emphasis = {
  args: {
    bgcolor: "#1e41fa",
    color: "#ebedfa",
    label: "Learn more →",
  },
};


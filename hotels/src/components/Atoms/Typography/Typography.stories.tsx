import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {control: 'text'},
    color: {control: 'color'},
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const heading1 = {
  args: {
    title: 'Debunking Five Data Science Myths',
    setting: [24, 7, 6],
    color: 'black'
  },
};
export const heading2 = {
  args: {
    title: 'Debunking Five Data Science Myths',
    setting: [24, 7, 6],
    color: 'black'
  },
};
export const heading3 = {
  args: {
    title: 'Debunking Five Data Science Myths',
    setting: [24, 7, 6],
    color: 'black'
  },
};


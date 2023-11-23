import type { Meta, StoryObj } from '@storybook/react';

import { Figure } from './Figure';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Figure',
  component: Figure,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: {control: 'text'},
    alt: {control: 'text'},
    width: {control: 'number'},
    height: {control: 'number'},
    caption: {control: 'text'},
    className: {control: 'text'},
  },
} satisfies Meta<typeof Figure>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    src: "https://demo.sirv.com/chair.jpg",
    width: 272,
  },
};


import type { Meta, StoryObj } from '@storybook/react';

import { ThumbnailSimlpe } from './ThumbnailSimlpe';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Thumbnails/Thumbnail simlpe',
  component: ThumbnailSimlpe,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: {control: 'text'},
    width: {control: 'number'},
    height: {control: 'number'},
    alt: {control: 'text'},
    caption: {control: 'text'},
    className: {control: 'text'},
  },
} satisfies Meta<typeof ThumbnailSimlpe>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    src: "/images/Birds-of-Paradise-Pendant-2.jpg",
    width: 272,
    height: 200,
  },
};


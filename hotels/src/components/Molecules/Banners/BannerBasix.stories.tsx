import type { Meta, StoryObj } from '@storybook/react';

import { BannerBasic } from './BannerBasic';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Banners/BannerBasic',
  component: BannerBasic,
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
    name:{control: 'text'},
    description:{control: 'text'},
    price: {control: 'number'},
    currency:{control: 'text'}
  },
} satisfies Meta<typeof BannerBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const varient = {
  args: {
    src: 'https://demo.sirv.com/chair.jpg?scale.width=283&hue=43',
  },
};


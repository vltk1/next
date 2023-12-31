import type { Meta, StoryObj } from '@storybook/react';
import { FooterSectionSimple } from './FooterSectionSimple';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Organisms/Footer Sections/Footer section simple',
  component: FooterSectionSimple,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof FooterSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Simple: Story = {
  args: {
    width: 1000,
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { ButtonBasic } from "../../Atoms/Button/ButtonBasic";
import { CardHeading } from './CardHeading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Headings/Card heading',
  component: CardHeading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof CardHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple  = {
  args: {
    label: 'Job Postings',
  }
};

export const description  = {
  args: {
    label: 'Job Postings',
  }
};
export const action  = {
  args: {
    title: 'Job Postings',
    description: 'Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.',
    button: '',
  }
};

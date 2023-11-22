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
    tag: { control: 'select', options: ['h2', 'h3', 'h4', 'h5','h6','p'] },
    label: {control: 'text'},
    color: { control: { type: 'color', presetColors: ['red', 'green']} },
    size: {control: 'number'},
    line: {control: 'number'},
    bold: {control: 'number'},
    className: {control: 'text'},
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Header = {
  args: {
    label: "",
    size: 1,
    line: 1,
    bold: 1,
    color: "red",
    className: "",
    tag: "h2",
  },
};

export const SubHeader = {
  args: {
    label: "",
    size: 1,
    line: 1,
    bold: 1,
    color: "red",
    className: "",
    tag: "h2",
  },
};

export const UnorderedLists = {
  args: {
    bold:7,
    className:"",
    color:"#004fff",
    label:"1212121212",
    line: 1,
    size:28,
    tag:"h2",
  },
};

export const DefinitionLists = {
  args: {
    tag: 'p',
    label: 'Lorem Ipsum Dolor',
  },
};
export const Blockquotes = {
  args: {
    tag: 'p',
    label: 'Lorem Ipsum Dolor',
  },
};
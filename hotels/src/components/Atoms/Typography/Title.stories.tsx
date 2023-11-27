import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Typography/Title',
  component: Title,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    tag: { control: 'select', options: ['h2', 'h3', 'h4', 'h5','h6'] },
    children: {control: 'text'},
    color: { control: { type: 'color', presetColors: ['red', 'green']} },
    bgcolor: { control: { type: 'color'} },
    align: { control: 'multi-select', options: ['Left', 'Center', 'Right'] },
    size: {control: 'number'},
    line: {control: 'number'},
    bold: {control: 'number'},
    className: {control: 'text'},
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const HeaderSubHeader: Story = {
  args: {
    children: "Qui officia ullamco cupidatat laboris Lorem.",
    size: 1,
    align: ['left'],
    line: 1,
    bold: 1,
    color: "red",
    className: "",
    bgcolor: '',
    tag: "h2",
  },
};

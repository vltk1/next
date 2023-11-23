import type { Meta, StoryObj } from '@storybook/react';
import { Titles } from './Titles';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Typography/Titles',
  component: Titles,
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
} satisfies Meta<typeof Titles>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const varient: Story = {
  args: {
    tag: "h3",
    label: "Excepteur quis deserunt do excepteur culpa amet."
  },
};
export const h2: Story = {
  args: {
    tag: "h2",
    label: "Excepteur quis deserunt do excepteur culpa amet."
  },
};

export const h3: Story = {
  args: {
    bold:7,
    className:"",
    color:"#371b8b",
    label:"1212121212",
    line:3,
    size:32,
    tag:"h2",
  },
};

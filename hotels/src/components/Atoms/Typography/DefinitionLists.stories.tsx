import type { Meta, StoryObj } from '@storybook/react';
import { DefinitionLists } from './DefinitionLists';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Typography/DefinitionLists',
  component: DefinitionLists,
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
} satisfies Meta<typeof DefinitionLists>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const varient: Story = {
  args: {
    label: "A definition list (<dl>) is used to display name-value pairs, like metadata or a dictionary definition. Each term (<dt>) is paired with one or more definitions (<dd>)",
    size: 1,
    line: 1,
    bold: 1,
    color: "red",
    className: "",
    tag: "h2",
  },
};
export const index: Story = {
  args: {
    label: "12",
    size: 1,
    line: 1,
    bold: 1,
    color: "red",
    className: "",
    tag: "h2",
  },
};


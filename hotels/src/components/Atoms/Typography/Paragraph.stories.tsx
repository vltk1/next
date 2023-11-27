import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta = {
  title: 'Atoms/Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {control: 'text'},
    color: { control: { type: 'color', presetColors: ['red', 'green']} },
    align: { control: 'multi-select', options: ['Left', 'Center', 'Right'] },
    size:  {control: 'text'},
    line: {control: 'number'},
    bold: {control: 'number'},
    className: {control: 'text'},
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const LeadParagraph: Story = {
  args: {
    children: "Lorem ipium",
    size: 1,
    line: 1.4,
    bold: 7,
    color: "red",
    align: ["left"],
    className: "",
    tag: "h2",
  },
};

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
    tag: { control: 'select', options: ['h2', 'h3', 'h4', 'h5','h6','p'] },
    label: {control: 'text'},
    color: { control: { type: 'color', presetColors: ['red', 'green']} },
    size: {control: 'number'},
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
    label: "12312",
    size: 1,
    line: 1,
    bold: 1,
    color: "red",
    className: "",
    tag: "h2",
  },
};

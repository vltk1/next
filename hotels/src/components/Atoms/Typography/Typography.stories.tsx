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
    title: {control: 'text'},
    color: { control: { type: 'color', presetColors: ['red', 'green']} },
    size: {control: 'number'},
    line: {control: 'number'},
    bold: {control: 'number'},
    className: {control: 'text'},
    customs: { control: 'inline-check', options: ['underline', 'letter'] },
    typescale: { control: 'multi-select', options: ['Time new roman', 'Canada', 'sansi'] },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Header1 = {
  args: {
    tag: 'h3',
    title: 'Debunking Five Data Science Myths',
  },
};
export const Header2 = {
  args: {
    tag: 'h3',
    title: 'Debunking Five Data Science Myths',
  },
};
export const Header3 = {
  args: {
    tag: 'h3',
    title: 'Debunking Five Data Science Myths',
  },
};
export const Header4 = {
  args: {
    tag: 'h3',
    title: 'Debunking Five Data Science Myths',
  },
};
export const Header5 = {
  args: {
    tag: 'h3',
    title: 'Debunking Five Data Science Myths',
  },
};
export const Header6 = {
  args: {
    tag: 'h3',
    title: 'Debunking Five Data Science Myths',
  },
};
export const SubHeader1 = {
  args: {
    tag: 'h3',
    title: 'Debunking Five Data Science Myths',
  },
};

export const SubHeader2 = {
  args: {
    tag: 'h3',
    title: 'Debunking Five Data Science Myths',
  },
};

export const Subheader3 = {
  args: {
    tag: 'h3',
    title: 'Debunking Five Data Science Myths',
  },
};

export const LeadParagraph = {
  args: {
    tag: 'p',
    title: 'Lorem Ipsum Dolor',
  },
};

export const UnorderedLists = {
  args: {
    tag: 'p',
    title: 'Lorem Ipsum Dolor',
  },
};

export const DefinitionLists = {
  args: {
    tag: 'p',
    title: 'Lorem Ipsum Dolor',
  },
};
export const Blockquotes = {
  args: {
    tag: 'p',
    title: 'Lorem Ipsum Dolor',
  },
};
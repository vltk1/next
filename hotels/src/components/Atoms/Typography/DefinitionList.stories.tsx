import type { Meta, StoryObj } from '@storybook/react';
import { DefinitionList } from './DefinitionList';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Typography/DefinitionList',
  component: DefinitionList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof DefinitionList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const varient: Story = {
  args: {
    label: "A definition list (<dl>) is used to display name-value pairs, like metadata or a dictionary definition. Each term (<dt>) is paired with one or more definitions (<dd>)",
  },
};

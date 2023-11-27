import type { Meta, StoryObj } from '@storybook/react';
import { ContentSections } from '.';
import { ContentSectionBasic } from './ContentSectionBasic';
import { ContentSectionDouble } from './ContentSectionDouble';

const meta = {
  title: 'Organisms/Content Sections',
  component: ContentSections,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof ContentSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic : Story = {
  args: {
    children: <ContentSectionBasic />,
  }
};

export const Double : Story = {
  args: {
    children: <ContentSectionDouble />,
  }
};




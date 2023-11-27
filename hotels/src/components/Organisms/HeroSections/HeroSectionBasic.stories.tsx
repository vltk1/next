import type { Meta, StoryObj } from '@storybook/react';
import { HeroSectionBasic } from './HeroSectionBasic';

const meta = {
  title: 'Organisms/Hero Sections/Hero section basic',
  component: HeroSectionBasic,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof HeroSectionBasic>;

export default meta;
type Story = StoryObj<typeof meta>;


export const add: Story = {
  args: {
  }
};

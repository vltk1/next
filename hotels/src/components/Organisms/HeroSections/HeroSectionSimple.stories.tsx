import type { Meta, StoryObj } from '@storybook/react';
import { HeroSectionSimple } from './HeroSectionSimple';
const meta = {
  title: 'Organisms/Hero Sections/Hero section simple',
  component: HeroSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof HeroSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    width: 1000,
  }
};

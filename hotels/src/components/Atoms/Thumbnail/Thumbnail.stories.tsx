import type { Meta, StoryObj } from '@storybook/react';
import { Thumbnail } from '.';

const meta = {
  title: 'Atoms/Thumbnail',
  component: Thumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {control: 'text'},
    width: {control: 'number'},
    height: {control: 'number'},
    alt: {control: 'text'},
    caption: {control: 'text'},
    className: {control: 'text'},
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "/images/Birds-of-Paradise-Pendant-2.jpg",
    width: 272,
    height: 200,
  },
};


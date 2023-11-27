import type { Meta, StoryObj } from '@storybook/react';
import { ContactSectionSimple } from './ContactSectionSimple';

const meta = {
  title: 'Organisms/Contact Sections/Contact section simple',
  component: ContactSectionSimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
  },
} satisfies Meta<typeof ContactSectionSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {

  }
};

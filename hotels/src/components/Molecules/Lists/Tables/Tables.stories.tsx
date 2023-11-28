import type { Meta, StoryObj } from '@storybook/react';
import { Tables } from '.';
import { TableNormal } from './TableNormal';



const meta = {
  title: 'Molecules/Lists/Tables',
  component: Tables,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof Tables>;
export default meta;
type Story = StoryObj<typeof meta>;

export const add:Story  = {
  args: {
    children: (<TableNormal />),
  }
};



import type { Meta, StoryObj } from '@storybook/react';
import { Column, Columns } from '.';

import { ThumbnailSimlpe } from '../Thumbnail';
import { Title } from '../Typography/Title';

const meta = {
  title: 'Atoms/Columns',
  component: Columns,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'number'},
    columns: {control: 'number'},
    spaceY: {control: 'number'},
    spaceX: {control: 'number'},
    className: {control: 'text'},
  },
} satisfies Meta<typeof Columns>;
export default meta;
type Story = StoryObj<typeof meta>;

export const add:Story  = {
  args: {
    children: [<Column className="Hello">
      <ThumbnailSimlpe
        alt=""
        caption=""
        height={200}
        src="/images/Birds-of-Paradise-Pendant-2.jpg"
        width={640}
      />
      <div>
        <Title
          bold={4}
          className=""
          color="#242424"
          label="EARNINGS"
          line={4}
          size={13}
          tag="p"
        />
        <Title
          bold={4}
          className=""
          color="#242424"
          label="Blue Stripes & Stone Earrings"
          line={6}
          size={18}
          tag="h3"
        />
        <Title
          bold={4}
          className=""
          color="#242424"
          label="$159.00"
          line={6}
          size={16}
          tag="p"
        />
      </div>
    </Column>, <Column className="Hello">
      <ThumbnailSimlpe
        alt=""
        caption=""
        height={200}
        src="/images/Birds-of-Paradise-Pendant-2.jpg"
        width={640}
      />
      <div>
        <Title
          bold={4}
          className=""
          color="#242424"
          label="EARNINGS"
          line={4}
          size={13}
          tag="p"
        />
        <Title
          bold={4}
          className=""
          color="#242424"
          label="Blue Stripes & Stone Earrings"
          line={6}
          size={18}
          tag="h3"
        />
        <Title
          bold={4}
          className=""
          color="#242424"
          label="$159.00"
          line={6}
          size={16}
          tag="p"
        />
      </div>
    </Column>, <Column className="Hello">
      <ThumbnailSimlpe
        alt=""
        caption=""
        height={200}
        src="/images/Birds-of-Paradise-Pendant-2.jpg"
        width={640}
      />
      <div>
        <Title
          bold={4}
          className=""
          color="#242424"
          label="EARNINGS"
          line={4}
          size={13}
          tag="p"
        />
        <Title
          bold={4}
          className=""
          color="#242424"
          label="Blue Stripes & Stone Earrings"
          line={6}
          size={18}
          tag="h3"
        />
        <Title
          bold={4}
          className=""
          color="#242424"
          label="$159.00"
          line={6}
          size={16}
          tag="p"
        />
      </div>
    </Column>],
  }
};




import { Thumbnail } from '../../Atoms/Thumbnail';
import { Title } from '../../Atoms/Typography/Title';
import React from 'react';

export function ProductListItems({children}:any) {
  return (
    <div>
      <div>
      <hgroup className='min-h-[124rem] bg-[#fff]'>
          <Title
  align={[
    'center'
  ]}
  bgcolor=""
  bold={7}
  className=""
  color="#533b2b"
  line={1.8}
  size={25}
  tag="h3"
>
  CAFÉ & RESTAURANT
</Title>
<Title
  align={[
    'center'
  ]}
  bgcolor=""
  bold={7}
  className=""
  color="#65b7ec"
  line={1.8}
  size={35}
  tag="h2"
>
  CAFÉ OASIS 中野坂上店
</Title>
          </hgroup>
      </div>
      <div className='flex'>
        <div>
        <Thumbnail
  alt=""
  height={360}
  src="/oasislunch/product/thumb1.png"
  width={520}
/>
        </div>
        <div className='grow'>
          
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
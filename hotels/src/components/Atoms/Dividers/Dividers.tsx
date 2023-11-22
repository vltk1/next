import React from 'react';

export function Dividers({color}:any) {
  return (
    <>
      <hr className='w-full min-w-[100px] flex h-[1px] border-0' />
      <style jsx>{`
        hr{
          background-color: ${color};
        }
      `}</style>
    </>
  );
}

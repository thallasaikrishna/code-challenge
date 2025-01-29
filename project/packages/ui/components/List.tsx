import React from 'react'

interface Pokemon {
  name: string;
  url: string;
};

export const List = (props: {data:Pokemon[]}) => {
  let {data} = props
  return <div className='list'>
      {data?.map((item: Pokemon, index: number) =>
        <div className='list-item' key={index}>
          <h4>{item.name}</h4>

        </div>)}
  </div>
}
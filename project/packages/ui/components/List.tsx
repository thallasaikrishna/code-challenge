import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deletePokemon } from '../../../apps/app/src/features/pokemon/pokemonSlice';

interface Pokemon {
  name: string;
  url: string;
};

export const List = (props: {data:Pokemon[]}) => {

  const dispatch = useDispatch()

  let {data} = props
  return <div className='list'>
      {data?.map((item: Pokemon, index: number) =>
        <div className='list-item' key={index}>
          <h4>{item.name}</h4>
          <button onClick={()=>dispatch(deletePokemon(item.name))}>Remove</button>

        </div>)}
  </div>
}
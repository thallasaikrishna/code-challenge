import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import useFetch from './hooks/useFetch'
import {fetchPokemonList} from './features/pokemon/pokemonSlice'
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"
// Question 1: How did you manage to fetch the list and what tool did you use?
// Ans: I have created a custom hook to make a fetch call, I have used Axios to make the api call

// Question 2: What steps would you take to future improve this?
// Ans: I would like to add tanstack query to make api calling more simplified

const App = () => {
  const dispatch = useDispatch()
const [data, e, isLoading] = useFetch(api)

const { pokemonList, loading, error } = useSelector((state) => state);

console.log(loading,pokemonList)

useEffect(()=>{
  dispatch(fetchPokemonList(api))
},[dispatch])

if(loading) return <p>Loading...</p>
  return (
    <>
      <h1>Pokemon list:</h1>
     { Array.isArray(pokemonList) && pokemonList.length ? <List data = {pokemonList}/> : null}
    </>
  )
}

export default App

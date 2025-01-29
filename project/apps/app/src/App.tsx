import { useEffect } from 'react'
import useFetch from './hooks/useFetch'
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"
// Question 1: How did you manage to fetch the list and what tool did you use?
// Ans: I have created a custom hook to make a fetch call, I have used Axios to make the api call

// Question 2: What steps would you take to future improve this?
// Ans: I would like to add tanstack query to make api calling more simplified

const App = () => {
const [data, error, isLoading] = useFetch(api)

  return (
    <>
      <h1>Pokemon list:</h1>
     { Array.isArray(data) && data.length ? <List data = {data}/> : null}
    </>
  )
}

export default App

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface Pokemon{
    name:string,
    url:string
}

const initialState={
    pokemonList:[],
    loading:false,
    error:null 
}

export const fetchPokemonList = createAsyncThunk(
    "pokemon/fetchPokemonList",
    async (url:string, { rejectWithValue }) => {
      try {
        const response = await axios.get(url);
        return response?.data?.results ; 
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


export const pokemonSlice=createSlice({
    name:"pokemon",
    initialState,
    reducers:{
        deletePokemon:(state,action)=>{
            state.pokemonList=state.pokemonList.filter((pokemon:Pokemon)=>pokemon.name!==action.payload);
        }
    },
    extraReducers:(builder)=> {
        builder.addCase(fetchPokemonList.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(fetchPokemonList.fulfilled,(state,action)=>{
            state.loading=false;
            state.pokemonList=action.payload
        })
        .addCase(fetchPokemonList.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    },
})


export const {deletePokemon} = pokemonSlice.actions
export default pokemonSlice.reducer;
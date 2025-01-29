import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from './features/pokemon/pokemonSlice'

export const Store=configureStore({
    reducer:pokemonReducer

})

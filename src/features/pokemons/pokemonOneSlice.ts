import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokeAPI } from "pokeapi-types";
import { RootState } from "../../app/store";

export interface pokemonOneState {
  value: PokeAPI.Pokemon | undefined;
}

const initialState: pokemonOneState = {
  value: undefined,
};

export const pokemonOneSlice = createSlice({
  name: "pokemonOne",
  initialState,
  reducers: {
    setPokemonOne: (state, action: PayloadAction<PokeAPI.Pokemon>) => {
      state.value = action.payload;
    },
  },
});

export const { setPokemonOne } = pokemonOneSlice.actions;

export const selectPokemonOne = (state: RootState) => state.pokemonOne.value;

export default pokemonOneSlice.reducer;
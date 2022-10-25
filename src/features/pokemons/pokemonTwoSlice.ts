import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokeAPI } from "pokeapi-types";
import { RootState } from "../../app/store";

export interface pokemonTwoState {
  value: PokeAPI.Pokemon | undefined;
}

const initialState: pokemonTwoState = {
  value: undefined,
};

export const pokemonTwoSlice = createSlice({
  name: "pokemonTwo",
  initialState,
  reducers: {
    setPokemonTwo: (state, action: PayloadAction<PokeAPI.Pokemon>) => {
      state.value = action.payload;
    },
  },
});

export const { setPokemonTwo } = pokemonTwoSlice.actions;

export const selectPokemonTwo = (state: RootState) => state.pokemonTwo.value;

export default pokemonTwoSlice.reducer;
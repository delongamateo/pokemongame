import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokeAPI } from "pokeapi-types";
import { RootState } from "../../app/store";

export interface pokemonOneState {
  value: PokeAPI.Pokemon | undefined;
  health: number;
}

const initialState: pokemonOneState = {
  value: undefined,
  health: 0,
};

export const pokemonOneSlice = createSlice({
  name: "pokemonOne",
  initialState,
  reducers: {
    setPokemonOne: (state, action: PayloadAction<PokeAPI.Pokemon>) => {
      state.value = action.payload;
    },
    setPokemonOneHealth: (state, action: PayloadAction<number>) => {
      state.health = action.payload;
    },
  },
});

export const { setPokemonOne, setPokemonOneHealth } =
  pokemonOneSlice.actions;

export const selectPokemonOne = (state: RootState) => state.pokemonOne.value;

export const selectPokemonOneHealth = (state: RootState) =>
  state.pokemonOne.health;

export default pokemonOneSlice.reducer;

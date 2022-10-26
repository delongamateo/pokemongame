import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokeAPI } from "pokeapi-types";
import { RootState } from "../../app/store";

export interface pokemonTwoState {
  value: PokeAPI.Pokemon | undefined;
  health: number;
}

const initialState: pokemonTwoState = {
  value: undefined,
  health: 0,
};

export const pokemonTwoSlice = createSlice({
  name: "pokemonTwo",
  initialState,
  reducers: {
    setPokemonTwo: (state, action: PayloadAction<PokeAPI.Pokemon>) => {
      state.value = action.payload;
    },
    setPokemonTwoHealth: (state, action: PayloadAction<number>) => {
      state.health = action.payload;
    },
  },
});

export const { setPokemonTwo, setPokemonTwoHealth } =
  pokemonTwoSlice.actions;

export const selectPokemonTwo = (state: RootState) => state.pokemonTwo.value;

export const selectPokemonTwoHealth = (state: RootState) =>
  state.pokemonTwo.health;

export default pokemonTwoSlice.reducer;

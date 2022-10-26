import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokeAPI } from "pokeapi-types";
import { RootState } from "../../app/store";

export interface pokemonTwoState {
  value: PokeAPI.Pokemon | undefined;
  health: number;
  isAttacking: boolean;
}

const initialState: pokemonTwoState = {
  value: undefined,
  health: 0,
  isAttacking: false,
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
    setIsPokemonTwoAttacking: (state, action: PayloadAction<boolean>) => {
      state.isAttacking = action.payload;
    },
  },
});

export const { setPokemonTwo, setPokemonTwoHealth, setIsPokemonTwoAttacking } =
  pokemonTwoSlice.actions;

export const selectPokemonTwo = (state: RootState) => state.pokemonTwo.value;

export const selectPokemonTwoHealth = (state: RootState) =>
  state.pokemonTwo.health;

export const selectIsPokemonTwoAttacking = (state: RootState) =>
  state.pokemonTwo.isAttacking;

export default pokemonTwoSlice.reducer;

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokemonOneReducer from "../features/pokemons/pokemonOneSlice";
import pokemonTwoReducer from "../features/pokemons/pokemonTwoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemonOne: pokemonOneReducer,
    pokemonTwo: pokemonTwoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

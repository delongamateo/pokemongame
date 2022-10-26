import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokemonOneReducer from "../features/pokemons/pokemonOneSlice";
import pokemonTwoReducer from "../features/pokemons/pokemonTwoSlice";
import logsReducer from "../features/logs/logsSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemonOne: pokemonOneReducer,
    pokemonTwo: pokemonTwoReducer,
    logs: logsReducer,
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

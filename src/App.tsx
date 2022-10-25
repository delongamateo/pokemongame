import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./app/hooks"

import { QueryClient, QueryClientProvider } from "react-query";
import {
  selectPokemonOne,
} from "./features/pokemons/pokemonOneSlice";
import {
  selectPokemonTwo,
} from "./features/pokemons/pokemonTwoSlice";
import styled from "styled-components"
import Home from "./components/Home/Home"

const App = () => {
  const queryClient = new QueryClient();
  const pokemonOne = useAppSelector(selectPokemonOne)
  const pokemonTwo = useAppSelector(selectPokemonTwo)

  useEffect(() => {
    console.log(pokemonOne, pokemonTwo)
  }, [pokemonTwo, pokemonOne])

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <p>{pokemonOne?.name}</p>
      <p>{pokemonTwo?.name}</p>
    </QueryClientProvider>

  );
}

const Container = styled.div`
  display: flex;
`

export default App;

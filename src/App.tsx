import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useGetPokemonByIDQuery } from './features/pokemons/pokemonAPI';
import styled from "styled-components"
import Home from "./components/Home"

const App = () => {

  const {
    data: pokemon
  } = useGetPokemonByIDQuery("1");

  useEffect(() => console.log(pokemon))

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

const Container = styled.div`
  display: flex;
`

export default App;

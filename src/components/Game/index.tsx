import { FC, useEffect } from 'react'
import { Container, CardsContainer } from "./style"
import { useAppSelector } from '../../app/hooks'
import { selectPokemonOne } from '../../features/pokemons/pokemonOneSlice'
import { selectPokemonTwo } from '../../features/pokemons/pokemonTwoSlice'
import PokemonCard from '../PokemonCard'

const Game = () => {
  const pokemonOne = useAppSelector(selectPokemonOne);
  const pokemonTwo = useAppSelector(selectPokemonTwo);

  if (!pokemonOne || !pokemonTwo) return (
    <p>Loading</p>
  )

  return (
    <Container>
      <CardsContainer>
        <PokemonCard pokemon={pokemonOne} />
        <PokemonCard pokemon={pokemonTwo} />
      </CardsContainer>

    </Container>
  )
}

export default Game;

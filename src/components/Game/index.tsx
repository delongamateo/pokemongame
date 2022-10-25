import { FC } from 'react'
import { Container } from "./style"
import { useAppSelector } from '../../app/hooks'
import { selectPokemonOne } from '../../features/pokemons/pokemonOneSlice'
import { selectPokemonTwo } from '../../features/pokemons/pokemonTwoSlice'

const Game = () => {
  const pokemonOne = useAppSelector(selectPokemonOne);
  const pokemonTwo = useAppSelector(selectPokemonTwo);

  return (
    <Container>Game
      <p>{pokemonOne?.name}</p>
      <p>{pokemonTwo?.name}</p>
    </Container>
  )
}

export default Game;

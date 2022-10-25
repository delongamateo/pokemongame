import { FC, useEffect } from 'react'
import { Container, CardsContainer, AttackContainer, Arrow } from "./style"
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectPokemonOne, selectPokemonOneHealth, setPokemonOneHealth, selectIsPokemonOneAttacking, setIsPokemonOneAttacking } from '../../features/pokemons/pokemonOneSlice'
import { selectPokemonTwo, selectPokemonTwoHealth, setIsPokemonTwoAttacking, selectIsPokemonTwoAttacking, setPokemonTwoHealth } from '../../features/pokemons/pokemonTwoSlice'
import PokemonCard from '../PokemonCard'
import Button from '../Button'

const Game = () => {
  const pokemonOne = useAppSelector(selectPokemonOne);
  const pokemonTwo = useAppSelector(selectPokemonTwo);
  const pokemonOneHealth = useAppSelector(selectPokemonOneHealth);
  const pokemonTwoHealth = useAppSelector(selectPokemonTwoHealth);
  const dispatch = useAppDispatch()

  const { stats } = pokemonOne ?? {}

  useEffect(() => {
    if (!stats) return;
    console.log(stats[5].base_stat)
  }, [stats])

  if (!pokemonOne || !pokemonTwo) return (
    <p>Loading</p>
  )

  return (
    <Container>
      <CardsContainer>
        <PokemonCard pokemon={pokemonOne} health={pokemonOneHealth} />
        <AttackContainer>
          <Arrow src="/assets/arrow.svg" />
          <Button onClick={() => console.log("attacck")} title="Attack!" />
        </AttackContainer>
        <PokemonCard pokemon={pokemonTwo} health={pokemonTwoHealth} />
      </CardsContainer>

    </Container>
  )
}

export default Game;

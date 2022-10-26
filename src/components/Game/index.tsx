import { FC, useEffect, useState } from 'react'
import { Container, CardsContainer, AttackContainer, Arrow } from "./style"
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectPokemonOne, selectPokemonOneHealth, setPokemonOneHealth, selectIsPokemonOneAttacking, setIsPokemonOneAttacking } from '../../features/pokemons/pokemonOneSlice'
import { selectPokemonTwo, selectPokemonTwoHealth, setIsPokemonTwoAttacking, selectIsPokemonTwoAttacking, setPokemonTwoHealth } from '../../features/pokemons/pokemonTwoSlice'
import PokemonCard from '../PokemonCard'
import Button from '../Button'

const Game = () => {
  const [isAttacking, setIsAttacking] = useState<string>("right")
  const pokemonOne = useAppSelector(selectPokemonOne);
  const pokemonTwo = useAppSelector(selectPokemonTwo);
  const pokemonOneHealth = useAppSelector(selectPokemonOneHealth);
  const pokemonTwoHealth = useAppSelector(selectPokemonTwoHealth);
  const oneattacking = useAppSelector(selectIsPokemonOneAttacking)
  const twoattacking = useAppSelector(selectIsPokemonTwoAttacking)
  const dispatch = useAppDispatch()

  const { stats: pokemonOneStats } = pokemonOne ?? {}
  const { stats: pokemonTwoStats } = pokemonTwo ?? {}

  useEffect(() => {
    if (!pokemonOneStats || !pokemonTwoStats) return;
    dispatch(setPokemonOneHealth(pokemonOneStats[0].base_stat))
    dispatch(setPokemonTwoHealth(pokemonTwoStats[0].base_stat))
    if (pokemonOneStats[5].base_stat > pokemonTwoStats[5].base_stat) {
      setIsAttacking("left")
    } else {
      setIsAttacking("right")
    }
  }, [])

  const handleAttack = () => {
    if (!pokemonOneStats || !pokemonTwoStats) return;
    console.log("aa")
    if (isAttacking === "left") {
      console.log("ff")
      dispatch(setPokemonTwoHealth(pokemonTwoHealth - ((pokemonOneStats[1].base_stat / 2) * (pokemonTwoStats[2].base_stat / 100))))
      setIsAttacking("right")
    } else {
      dispatch(setPokemonOneHealth(pokemonOneHealth - ((pokemonTwoStats[1].base_stat / 2) * (pokemonOneStats[2].base_stat / 100))))
      setIsAttacking("left")
    }
  }

  useEffect(() => console.log(isAttacking), [isAttacking])

  if (!pokemonOne || !pokemonTwo) return (
    <p>Loading</p>
  )

  return (
    <Container>
      <CardsContainer>
        <PokemonCard pokemon={pokemonOne} health={pokemonOneHealth} />
        <AttackContainer>
          <Arrow src="/assets/arrow.svg" side={isAttacking} />
          <Button onClick={() => handleAttack()} title="Attack!" />
        </AttackContainer>
        <PokemonCard pokemon={pokemonTwo} health={pokemonTwoHealth} />
      </CardsContainer>

    </Container>
  )
}

export default Game;

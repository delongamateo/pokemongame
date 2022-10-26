import { FC, useEffect, useState } from 'react'
import { Container, CardsContainer, AttackContainer, Arrow, BottomContainer } from "./style"
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectPokemonOne, selectPokemonOneHealth, setPokemonOneHealth } from '../../features/pokemons/pokemonOneSlice'
import { selectPokemonTwo, selectPokemonTwoHealth, setPokemonTwoHealth } from '../../features/pokemons/pokemonTwoSlice'
import { addLog } from '../../features/logs/logsSlice'
import PokemonCard from '../PokemonCard'
import Button from '../Button'
import Menu from '../Menu'
import Logs from '../Logs'
import EndGameScreen from '../EndGameScreen'

const Game = () => {
  const [isAttacking, setIsAttacking] = useState<string>()

  const pokemonOne = useAppSelector(selectPokemonOne);
  const pokemonTwo = useAppSelector(selectPokemonTwo);
  const pokemonOneHealth = useAppSelector(selectPokemonOneHealth);
  const pokemonTwoHealth = useAppSelector(selectPokemonTwoHealth);
  const dispatch = useAppDispatch()

  const { stats: pokemonOneStats } = pokemonOne ?? {}
  const { stats: pokemonTwoStats } = pokemonTwo ?? {}

  useEffect(() => {
    if (!pokemonOneStats || !pokemonTwoStats) return;
    if (pokemonOneStats[5].base_stat > pokemonTwoStats[5].base_stat) {
      setIsAttacking("left")
    } else {
      setIsAttacking("right")
    }
  }, [])

  const handleAttack = () => {
    if (!pokemonOneStats || !pokemonTwoStats) return;
    if (isAttacking === "left") {
      if (Math.floor(Math.random() * 9) >= 2) {
        const damage = (pokemonOneStats[1].base_stat / 2) - (pokemonOneStats[1].base_stat / 2 * pokemonTwoStats[2].base_stat / 100)
        const newHealth = pokemonTwoHealth - damage
        dispatch(setPokemonTwoHealth(newHealth < 0 ? 0 : newHealth))
        dispatch(addLog(`${pokemonOne?.name} attacked ${pokemonTwo?.name} for ${damage}dmg`))
        if (newHealth <= 0) {
          dispatch(addLog(`${pokemonOne?.name} won!`))

        }
      } else {
        dispatch(addLog(`${pokemonOne?.name} missed ${pokemonTwo?.name}`))
      }
      setIsAttacking("right")
    } else {
      if (Math.floor(Math.random() * 9) >= 2) {
        const damage = (pokemonTwoStats[1].base_stat / 2) - (pokemonTwoStats[1].base_stat / 2 * pokemonOneStats[2].base_stat / 100)
        const newHealth = pokemonOneHealth - damage
        dispatch(setPokemonOneHealth(newHealth < 0 ? 0 : newHealth))
        dispatch(addLog(`${pokemonTwo?.name} attacked ${pokemonOne?.name} for ${damage}dmg`))
        if (newHealth <= 0) {
          dispatch(addLog(`${pokemonTwo?.name} won!`))

        }
      } else {
        dispatch(addLog(`${pokemonTwo?.name} missed ${pokemonOne?.name}`))
      }
      setIsAttacking("left")
    }
  }

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
      <BottomContainer>
        {pokemonOneHealth > 0 && pokemonTwoHealth > 0 && <Menu />}
        <Logs />
      </BottomContainer>
      {!(pokemonOneHealth > 0 && pokemonTwoHealth > 0) && <EndGameScreen />}
    </Container>
  )
}

export default Game;

import { FC } from 'react'
import { Container, Logo, LogoTitle, LogoContainer, LoadingMessage, LoadingContainer, LoadingImage } from "./style"
import useGetRandomPokemons from "../../features/pokemons/useGetRandomPokemons"
import Button from "../Button"

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  const { newGame, isPokemonOneLoading, isPokemonTwoLoading } = useGetRandomPokemons()

  return (
    <Container>
      <LogoContainer>
        <Logo src='/assets/Kodi-logo.svg' />
        <LogoTitle src='/assets/kodimon.png' />
      </LogoContainer>
      {(isPokemonOneLoading || isPokemonTwoLoading) &&
        <LoadingContainer>
          <LoadingMessage>Catching Pokémons...</LoadingMessage>
          <LoadingImage src='/assets/pokeball.png' />
        </LoadingContainer>
      }
      <Button onClick={() => newGame()} title="New Game" isDisabled={isPokemonOneLoading || isPokemonTwoLoading} />
    </Container>
  )
}



export default Home;

import { FC } from 'react'
import { Container, Logo, LogoTitle, LogoContainer } from "./style"
import useGetRandomPokemons from "../../features/pokemons/useGetRandomPokemons"
import Button from "../Button"

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  const setEnabled = useGetRandomPokemons()

  return (
    <Container>
      <LogoContainer>
        <Logo src='/assets/Kodi-logo.svg' />
        <LogoTitle src='/assets/kodimon.png' />
      </LogoContainer>
      <Button onClick={() => setEnabled(true)} title="New Game" />
    </Container>
  )
}



export default Home;

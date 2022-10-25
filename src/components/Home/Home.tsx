import { FC } from 'react'
import { Container } from "./style"
import useGetRandomPokemons from "../../features/pokemons/useGetRandomPokemons"

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  useGetRandomPokemons()

  return (
    <Container>Home</Container>
  )
}



export default Home;

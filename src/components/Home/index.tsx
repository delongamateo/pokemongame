import { Container, Logo, LogoTitle, LogoContainer } from "./style";
import useGetRandomPokemons from "../../features/pokemons/useGetRandomPokemons";
import Button from "../Button";
import Loader from "../Loader";

const Home = () => {
  const { newGame, isPokemonOneFetching, isPokemonTwoFetching } =
    useGetRandomPokemons();

  return (
    <Container>
      <LogoContainer>
        <Logo src="/assets/Kodi-logo.svg" />
        <LogoTitle src="/assets/kodimon.png" />
      </LogoContainer>
      {(isPokemonOneFetching || isPokemonTwoFetching) && <Loader />}
      <Button
        onClick={newGame}
        title="New Game"
        isDisabled={isPokemonOneFetching || isPokemonTwoFetching}
      />
    </Container>
  );
};

export default Home;

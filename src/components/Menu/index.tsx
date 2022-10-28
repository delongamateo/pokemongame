import { FC } from "react";
import { Container, Title, ButtonsContainer } from "./style";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import useGetRandomPokemons from "../../features/pokemons/useGetRandomPokemons";
import { useAppDispatch } from "../../app/hooks";
import { setPokemonOne } from "../../features/pokemons/pokemonOneSlice";
import { setPokemonTwo } from "../../features/pokemons/pokemonTwoSlice";

type MenuProps = {
  isEndGame?: boolean;
};

const Menu: FC<MenuProps> = ({ isEndGame }) => {
  const navigate = useNavigate();
  const { newGame, newOpponent } = useGetRandomPokemons();
  const dispatch = useAppDispatch();

  const navigateToHome = () => {
    dispatch(setPokemonOne(undefined));
    dispatch(setPokemonTwo(undefined));
    navigate("/");
  };

  return (
    <Container>
      <Title>Menu</Title>
      <ButtonsContainer>
        <Button title="Home" onClick={navigateToHome} />
        <Button title="New Game" onClick={newGame} />
        {isEndGame && (
          <Button title="New opponent" onClick={newOpponent} />
        )}
      </ButtonsContainer>
    </Container>
  );
};

export default Menu;

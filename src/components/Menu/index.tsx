import { FC } from 'react'
import { Container, Title, ButtonsContainer } from "./style"
import Button from "../Button"
import { useNavigate } from "react-router-dom"
import useGetRandomPokemons from '../../features/pokemons/useGetRandomPokemons'

type MenuProps = {
    isEndGame?: boolean;
}

const Menu: FC<MenuProps> = ({ isEndGame }) => {
    const navigate = useNavigate()
    const { newGame, newOpponent } = useGetRandomPokemons()

    return (
        <Container>
            <Title>Menu</Title>
            <ButtonsContainer>
                <Button title='Home' onClick={() => navigate("/")} />
                <Button title='New Game' onClick={() => newGame()} />
                {isEndGame && <Button title='New opponent' onClick={() => newOpponent()} />}
            </ButtonsContainer>
        </Container>
    )
}

export default Menu

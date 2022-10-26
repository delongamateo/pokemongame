import {FC} from 'react'
import { Container, Title,  ButtonsContainer} from "./style"
import Button from "../Button"

type MenuProps = {

}

const Menu: FC<MenuProps> = () => {
    return (
        <Container>
            <Title>Menu</Title>
            <ButtonsContainer>
                <Button title='Home' onClick={() => console.log("")}/>
                <Button title='New Game' onClick={() => console.log("")}/>
                <Button title='New opponent' onClick={() => console.log("")}/>
            </ButtonsContainer>
        </Container>
    )
}

export default Menu

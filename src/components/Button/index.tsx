import {FC} from 'react'
import {StyledButton} from "./style"

type ButtonProps = {
    onClick: () => void;
    title: string;
}

const Button: FC<ButtonProps> = ({onClick,title}) => {
    return (
        <StyledButton onClick={onClick}>{title}</StyledButton>
    )
}

export default Button

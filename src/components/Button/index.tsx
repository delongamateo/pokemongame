import { FC } from 'react'
import { StyledButton } from "./style"

type ButtonProps = {
    onClick: () => void;
    title: string;
    isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, title, isDisabled }) => {
    return (
        <StyledButton onClick={onClick} disabled={isDisabled}>{title}</StyledButton>
    )
}

export default Button

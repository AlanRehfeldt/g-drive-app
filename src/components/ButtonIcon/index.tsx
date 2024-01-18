import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles"

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string
    alt?: string
    handleReturn?: () => void
}

export function ButtonIcon({ icon, alt, handleReturn, ...rest }: ButtonIconProps) {
    return (
        <Container 
            onClick={ handleReturn }
            { ...rest }
        >
            <img src={ icon } alt={ alt } />
        </Container>
    )
}
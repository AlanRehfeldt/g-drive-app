import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles"

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string
    alt?: string
}

export function ButtonIcon({ icon, alt, ...rest }: ButtonIconProps) {
    return (
        <Container { ...rest }>
            <img src={ icon } alt={ alt } />
        </Container>
    )
}
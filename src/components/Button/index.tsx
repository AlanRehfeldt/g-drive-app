import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading, ...rest }: ButtonProps) {
  return (
    <Container
      type="button" // Defina o tipo como "button"
      disabled={loading}
      {...rest}
    >
      {loading ? "Carregando..." : title}
    </Container>
  );
}

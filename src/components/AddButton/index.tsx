import { Container } from "./styles"

import plus from "../../assets/plus.svg"

interface AddButtonProps {
    onClick?: () => void;
}

export function AddButton({ onClick }: AddButtonProps) {
  return (
    <Container>
      <button onClick={ onClick }>
        <img src={plus} alt="Mathematic plus simble" />
        <span>New</span>
      </button>
    </Container>
  )
}

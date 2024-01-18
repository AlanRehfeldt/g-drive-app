import { Container } from "./styles"

import arrowright from "../../assets/arrowright.svg"

interface SubMenuProps {
    logo: string
    label: string
    selected?: boolean
    to: string
    onClick?: () => void;
    disabled?: boolean
  }

export function SubMenu({ logo, label, selected, to, onClick, disabled }: SubMenuProps) {
    return (
        <Container to={ to } onClick={onClick} className={ disabled ? "disabled" : "" }>
                <img 
                    src={ arrowright } 
                    alt="Arrow indicationg selected sub menu" 
                    className={ selected ? "" : "hidden" }
                />
                <button>
                    <img src={ logo } alt={ label } />
                    <span>{ label }</span>
                </button>
        </Container>
    )
}
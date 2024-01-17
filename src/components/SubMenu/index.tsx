import { Container } from "./styles"

import arrowright from "../../assets/arrowright.svg"

interface SubMenuProps {
    logo: string
    label: string
    selected?: boolean
    to: string
    onClick?: () => void;
  }

export function SubMenu({ logo, label, selected, to, onClick }: SubMenuProps) {
    return (
        <Container to={ to } onClick={onClick}>
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
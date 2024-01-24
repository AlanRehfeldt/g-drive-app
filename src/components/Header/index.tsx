import { Container } from "./styles";

import { ButtonIcon } from "../ButtonIcon";

import listview from "../../assets/listview.svg"
import info from "../../assets/info.svg"
import arrow from "../../assets/arrowright2.svg"

interface IHeader {
    children: React.ReactNode
    handleReturn?: () => void
}

export function Header({ children, handleReturn }: IHeader) {
    return (
        <Container>
            <div>
                <ButtonIcon icon={ arrow } handleReturn={handleReturn} />
                { children }
            </div>
            <div>
                <ButtonIcon icon={ listview } />
                <ButtonIcon icon={ info } />
            </div>
        </Container>
    )
}

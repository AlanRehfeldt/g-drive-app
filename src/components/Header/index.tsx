import { Container } from "./styles";

import { ButtonIcon } from "../ButtonIcon";

import listview from "../../assets/listview.svg"
import info from "../../assets/info.svg"

export function Header({ title }: { title: string }) {
    return (
        <Container>
            <span>{ title }</span>
            <div>
                <ButtonIcon icon={ listview } />
                <ButtonIcon icon={ info } />
            </div>
        </Container>
    )
}

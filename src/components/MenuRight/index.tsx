import { Container } from "./style";

import { ButtonIcon } from "../ButtonIcon";

import calendar from "../../assets/calendar.svg"
import gkeep from "../../assets/gkeep.svg"
import task from "../../assets/task.svg"
import singleuser from "../../assets/singleuser.svg"
import plussmall from "../../assets/plussmall.svg"
import arrowright2 from "../../assets/arrowright2.svg"

export function MenuRight() {
    return (
        <Container>
            <div>
                <ButtonIcon icon={ calendar }/>
                <ButtonIcon icon={ gkeep }/>
                <ButtonIcon icon={ task }/>
                <ButtonIcon icon={ singleuser }/>
                <ButtonIcon className="lastBtn" icon={ plussmall }/>
            </div>
            <ButtonIcon icon={ arrowright2 }/>
        </Container>
    )
}
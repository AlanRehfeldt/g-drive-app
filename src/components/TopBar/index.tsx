import { Container, Content, Logo, ToolsContent, UserContent } from "./styles"

import { Search } from "../Search"
import { ButtonIcon } from "../ButtonIcon";

import logo from "../../assets/logo.svg"
import help from "../../assets/help.svg"
import settings from "../../assets/settings.svg"
import app from "../../assets/app.svg"
import avatar from "../../assets/avatar.svg"

export function TopBar() {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="G-Drive logo" />
                <span>Drive</span>
            </Logo>
            <Content>
                <Search placeholder="Search in Drive" />
                <UserContent>
                    <ToolsContent>
                        <ButtonIcon icon={ help } alt="Question mark for help" />
                        <ButtonIcon icon={ settings } alt="Gear icon for accessing settings" />
                    </ToolsContent>
                    <ButtonIcon icon={ app } alt="Icon access other apps" />
                    <div>
                        <span>G-Drive</span>
                        <ButtonIcon icon={ avatar } alt="Avatar icon" />
                    </div>
                </UserContent>
            </Content>
        </Container>
    )
}
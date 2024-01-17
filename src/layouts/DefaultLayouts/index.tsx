import { Outlet } from "react-router-dom"

import { Container, Content } from "./styles"

import { TopBar } from "../../components/TopBar"
import { MenuLeft } from "../../components/MenuLeft"
import { MenuRight } from "../../components/MenuRight"

export function DefaultLayout() {
    return (
        <Container>
            <TopBar />
            <Content>
                <MenuLeft />
                <Outlet />
                <MenuRight />
            </Content>
        </Container>
    )
}
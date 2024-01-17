import { Container, Content } from "./styles"

import search from "../../assets/search.svg"
import filters from "../../assets/filters.svg"

export function Search({ ...rest }) {
    return (
        <Container>
            <Content>
                <img src={search} alt="" />
                <input { ...rest } />
            </Content>
            <button>
                <img src={filters} alt="" />
            </button>
        </Container>
    )
}
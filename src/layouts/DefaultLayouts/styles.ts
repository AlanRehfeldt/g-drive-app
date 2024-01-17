import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background: ${(props) => props.theme.BG_WHITE};
`

export const Content = styled.main`
    display: flex;
    align-items: flex-start;

    height: 100%;
`
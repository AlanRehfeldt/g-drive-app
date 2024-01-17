import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.BG_LIGHT};
    color: ${(props) => props.theme.GREY};

    margin-bottom: 0.5rem;
    border-radius: 0.625rem;

    > input {
        height: 3.5rem;
        width: 100%;

        padding: 0.75rem;

        color: ${(props) => props.theme.GREY};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${(props) => props.theme.GREY};
        }
    }

    > svg {
        margin-left: 16px;
    }
`
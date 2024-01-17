import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background: ${(props) => props.theme.BLUE_LIGHT};
    color: ${(props) => props.theme.GREY};

    min-height: 3.5rem;
    border: 0;
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: 0.675rem;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`
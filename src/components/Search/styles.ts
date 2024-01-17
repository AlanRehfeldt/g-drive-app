import styled from'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    width: 28.5rem;
    padding: 0.63rem 0.75rem 0.5rem;

    background: ${(props) => props.theme.BG_LIGHT};
    border-radius: 0.25rem;

    button {
        height: 1.25rem;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    width: 100%;

    input {
        width: 100%;
        background: transparent;

        :focus {
            box-shadow: none;
            outline: none;
        }
    }
`
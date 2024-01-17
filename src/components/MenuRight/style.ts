import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    width: 3rem;
    height: 100%;
    padding: 1.5rem 1rem 2rem;

    border-left: 1px solid ${(props) => props.theme.GRAY_SEPARATOR};
    border-bottom: 1px solid ${(props) => props.theme.GRAY_SEPARATOR};

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1.75rem;

        > :last-child {
            border-top: 1px solid ${(props) => props.theme.GRAY_SEPARATOR};
            padding-top: 1.75rem;
        }
    }
`
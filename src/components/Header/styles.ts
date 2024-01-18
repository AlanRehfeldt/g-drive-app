import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 0.5rem 1.375rem 0.5rem 0;

    border-bottom: 1px solid ${(props) => props.theme.GRAY_SEPARATOR};

    span {
        font-size: 1.25rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.75rem;
    }

    > div:first-child button {
        transform: rotate(180deg);
    }
`
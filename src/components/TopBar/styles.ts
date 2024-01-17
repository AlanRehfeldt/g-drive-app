import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    gap: 7.0675rem;

    padding: 0.375rem 1rem 0.375rem 0.75rem;
    border-bottom: 1px solid ${(props) => props.theme.GRAY_SEPARATOR};
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    padding-right: 0.5rem;

    span {
        font-size: 1.375rem;
        font-weight: 500;
        color: ${(props) => props.theme.GREY_LIGHT};
    }
`

export const UserContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    padding-left: 0.5rem;

    div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        padding: 0.25rem;

        border: 1px solid ${(props) => props.theme.GRAY_SEPARATOR_HOVER};
        border-radius: 0.25rem;

        span {
            white-space: nowrap;
            font-size: 1.125rem;
        }
    }
`

export const ToolsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    padding-right: 3.25rem;
`
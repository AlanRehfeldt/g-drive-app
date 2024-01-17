import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    min-width: 12.75rem;
    height: 100%;
    padding-top: 0.875rem;

    > div:first-child {
        justify-self: start;
        align-self: flex-start;
        margin-left: 0.75rem;
    }
`

export const MenuContent = styled.nav`
    align-self: self-start;
    margin: 1rem 0;
    width: 100%;

`

export const StorageData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: self-start;

    width: 100%;
    padding: 0.5rem 2.25rem 0 0;

    border-top: 1px solid ${(props) => props.theme.GRAY_SEPARATOR};

    .storageData {
        display: flex;
        flex-direction: column;
        align-items: start;

        padding: 0.5rem 0 0 1.25rem;

        .progress_container {
            position: relative;
            width: 100%;
            height: 2px;
    
            background: ${(props) => props.theme.GRAY_SEPARATOR_HOVER};
    
            .progress_bar {
                position: absolute;
                width: 75%;
                height: 2px;
                background: ${(props) => props.theme.BLUE};
            }
        }
    
        span {
            padding-top: 0.375rem;
            font-size: 0.75rem;
        }
    
        button {
            color: ${(props) => props.theme.BLUE};
            width: fit-content;
            margin-top: 0.25rem;
            font-weight: 500;
        }
    }
`
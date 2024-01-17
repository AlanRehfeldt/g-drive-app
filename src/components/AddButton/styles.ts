import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 3.1875rem;
        box-shadow: 0px 1px 4px 0 rgba(66, 66, 66, 0.25);

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;

        padding: 0.625rem 1.5rem 0.625rem 1rem;
    
        background: none;
    
        >img {
            width: 1.75rem;
            height: 1.75rem;
        }
    
        >span {
            font-size: 1.125rem;
            font-weight: 500;
            line-height: 1.5rem;
        }
    }
`
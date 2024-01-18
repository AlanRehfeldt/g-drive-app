import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface ContainerProps {
    selected?: boolean
    disabled?: boolean
}

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: start;

    padding: 0.5rem 0;

    > .disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .hidden {
        visibility: hidden;
    }

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`as React.FC<LinkProps & ContainerProps>;
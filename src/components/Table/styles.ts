import styled, { css } from "styled-components";

export const Container = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.25rem;

    > tbody {
        > tr {
            cursor: pointer
        }
    }
`;

export const TableHeader = styled.th`
    padding: 0.625rem;
    text-align: left;
`;

export const TableData = styled.td`
    padding: 0.625rem;
    border-top: 1px solid #ddd;
    
    img {
        margin-right: 0.25rem;
    }

    ${({ className }) => {
        if (className) {
            if (className.includes("biggerColumn")) {
                return css`
                    width: 50%;
                `;
            } else if (className.includes("smallColumns")) {
                return css`
                    width: 16.67%;
                `;
            }
        }
        return css`
        `;
    }}
`;
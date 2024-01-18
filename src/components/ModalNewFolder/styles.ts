import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  > label:first-child {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > label {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    }
  }
`;

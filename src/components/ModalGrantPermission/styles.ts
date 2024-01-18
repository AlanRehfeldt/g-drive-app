import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  
  label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  }

  > label:first-child {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    justify-content: center;
    font-weight: 500;
  }

  .permissionSelection {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.25rem;
  }

`;

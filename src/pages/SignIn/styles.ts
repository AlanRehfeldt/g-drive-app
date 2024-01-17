import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  width: 40rem;
  padding: 0 8.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 3rem; 
    color: ${(props) => props.theme.GREY};
  }

  > h2 {
    font-size: 1.5rem; 
    margin: 3rem 0; 
  }

  > p {
    font-size: 0.875rem; 
    color: ${(props) => props.theme.GREY};
  }

  > a {
    margin-top: 7.75rem;
    color: ${(props) => props.theme.GREY};
  }
`

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    flex: 1;
    background-size: cover;

    img {
        width: 20rem;
        height: auto;
    }

    span {
        font-size: 6rem;
        font-weight: bold;
    }
`;

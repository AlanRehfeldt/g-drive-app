import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.BG_WHITE};
  width: 30rem;
  padding: 2rem;
  box-shadow: 0px 1px 4px 0 rgba(66, 66, 66, 0.25);
  border-radius: 0.5rem;
  z-index: 1000;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
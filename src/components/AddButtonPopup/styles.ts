import styled from "styled-components";

export const Popup = styled.div<{ isOpen: boolean; buttonRect?: DOMRect }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 15rem;
  padding: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  top: ${(props) => (props.buttonRect ? props.buttonRect.bottom + 'px' : '0')};
  left: ${(props) => (props.buttonRect ? props.buttonRect.left + 'px' : '0' )};

  > div:nth-child(1) {
    position: absolute;
    right: 0;
    width: fit-content;
    background: transparent;
  }

  > div:nth-child(2) {
    border-bottom: 1px solid ${(props) => props.theme.GRAY_SEPARATOR};
  }

  > div:nth-child(4) {
    border-bottom: 1px solid ${(props) => props.theme.GRAY_SEPARATOR};
  }
`;

export const PopupOption = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 0.75rem;

  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
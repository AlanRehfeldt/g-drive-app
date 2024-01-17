import { ModalWrapper, ModalOverlay } from './styles';

interface ModalProps {
  showModal: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export function Modal({ showModal, handleClose, children }: ModalProps) {
  return (
    <>
      {showModal && (
        <>
          <ModalOverlay onClick={handleClose} />
          <ModalWrapper>{children}</ModalWrapper>
        </>
      )}
    </>
  );
}

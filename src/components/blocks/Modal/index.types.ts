import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  modalCloseHandler: () => void;
}

export interface PortalModalProps {
  children: ReactNode;
}

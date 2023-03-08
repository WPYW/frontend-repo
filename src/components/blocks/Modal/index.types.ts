import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
}

export interface ModalOverlayProps {
  isOpen: boolean;
}

import styled from 'styled-components';
import { ModalProps } from './index.types';

export const ModalOverlay = styled.div<Pick<ModalProps, 'isOpen'>>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: flex-start;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.84);

  z-index: 100;

  overflow: auto;

  @media screen and (max-width: 420px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div``;

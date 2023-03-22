import styled from 'styled-components';
import { ModalOverlayProps } from './index.types';

export const ModalOverlay = styled.div<ModalOverlayProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(183, 183, 183, 0.7);
  backdrop-filter: blur(10px);

  z-index: 1000;
`;

export const Wrapper = styled.div`
  width: 528px;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  overflow: scroll;

  padding: 30px 40px;

  border-radius: 2rem;

  background-color: var(--modal-background-color);
`;

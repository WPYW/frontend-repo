import styled from 'styled-components';
import { ModalProps } from './index.types';

import { ReactComponent as CloseButtonImage } from '@/assets/close-x.svg';

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
`;

export const CloseButton = styled(CloseButtonImage)`
  position: fixed;
  top: 30px;
  right: 30px;

  width: 40px;
  height: 40px;

  padding: 10px 10px;

  cursor: pointer;

  &:hover {
    stroke: red;
  }

  @media screen and (max-width: 420px) {
    top: 2px;
    right: 2px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    margin-top: 0px;
    margin-bottom: 0px;

    width: 100%;
    height: 100%;
  }
`;

import styled, { css } from 'styled-components';
import { techProps } from './index.types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (max-width: 420px) {
    width: 100%;
    gap: 4px;
  }
`;

export const RecruitTechWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  gap: 10px;
  padding-top: 20px;
`;

export const RecruitTechImg = styled.img`
  display: flex;
  float: left;
  margin-top: 2px;
  margin-left: 5px;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

export const RecruitTechItem = styled.button<techProps>`
  all: unset;
  width: 150px;
  border-radius: 30px;

  background-color: white;
  font-size: var(--base-text-size-large);
  font-family: sans-serif;
  padding: 10px;
  cursor: pointer;
  color: #181818;

  &:hover {
    background-color: #ff9b25;
    color: white;
  }

  ${(props) =>
    props.toggleClicked &&
    css`
      background-color: #ff9b25;
      color: white;
    `};
`;

export const Modal = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  backdrop-filter: blur(${({ visible }) => (visible ? '5px' : '0px')});
  & > div {
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    background-color: #fff;
  }
  ${({ visible }) =>
    visible &&
    css`
      transform: translate(-50%, -50%) scale(1.1);
    `}
`;

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  padding: 20px;
  position: relative;
  text-align: center;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  right: 10px;
  top: 10px;
  &:hover {
    color: #000;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 20px 0;
`;

export const ModalDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0 0 20px 0;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  background-color: #0070f3;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 0 10px;
  padding: 10px 20px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0058c4;
  }
`;

export const Button = styled.button`
  background: none;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-xlarge);
  color: var(--main-color-orange);

  border: 4px solid;
  border-color: var(--main-color-orange);
  border-radius: 8px;

  padding: 8px 12px;

  cursor: pointer;

  &:hover {
    background-color: var(--main-color-orange);
    color: #ffffff;
  }

  @media screen and (max-width: 420px) {
    font-size: var(--base-text-size-normal);
  }
`;

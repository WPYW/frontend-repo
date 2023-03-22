import styled, { css } from 'styled-components';
import { RecruitModalButtonProps } from './index.types';

export const Wrapper = styled.button<Pick<RecruitModalButtonProps, 'id'>>`
  width: 100%;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-xlarge);
  color: var(--modal-button-text-color);

  border: 2.5px solid;
  border-color: var(--main-color-orange);
  border-radius: 8px;

  background-color: var(--main-color-orange);

  padding: 8px 12px;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  ${(props) =>
    props.id === 'close' &&
    css`
      background-color: transparent;
      color: red;
      border-color: red;

      &:hover {
        background-color: red;
        color: var(--modal-button-text-color);
      }
    `}

  @media screen and (max-width: 420px) {
    font-size: var(--base-text-size-normal);
  }
`;

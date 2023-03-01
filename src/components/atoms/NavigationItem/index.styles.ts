import styled, { css, keyframes } from 'styled-components';
import { NavigationItemProps } from './index.types';

const animation = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

export const Wrapper = styled.button<Pick<NavigationItemProps, 'clicked'>>`
  all: unset;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: #848484;

  padding: 16px;

  cursor: pointer;

  ${(props) =>
    props.clicked &&
    css`
      color: var(--navigation-item-clicked-text-color);

      &::after {
        content: '';

        display: block;
        width: 100%;
        height: 4px;
        background-color: var(--main-color-orange);

        animation: ${animation} 0.6s;
      }
    `}
`;

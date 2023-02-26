import styled, { css } from 'styled-components';

import { BaseDescriptionProps } from './index.types';

export const Description = styled.p<Pick<BaseDescriptionProps, 'type'>>`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-3xlarge);
  color: var(--base-description-text-color);
  line-height: 1.5;

  white-space: pre-wrap;

  @media only screen and (max-width: 420px) {
    font-size: var(--base-text-size-medium);
  }

  ${(props) =>
    props.type === 'card' &&
    css`
      font-weight: var(--base-text-weight-normal);
      font-size: var(--base-text-size-normal);
      color: var(--card-description-text-color);

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      word-break: break-all;
      overflow: hidden;

      @media only screen and (max-width: 420px) {
        font-size: var(--base-text-size-normal);
      }
    `}
`;

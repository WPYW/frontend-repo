import styled from 'styled-components';

export const Description = styled.p`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-xlarge);
  color: var(--base-description-text-color);
  line-height: 1.5;

  white-space: pre-wrap;

  @media only screen and (max-width: 420px) {
    font-size: var(--base-text-size-small);
  }
`;

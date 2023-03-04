import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: var(--base-text-weight-2xbold);
  font-size: var(--base-text-size-4xlarge);
  color: var(--main-color-orange);

  @media only screen and (max-width: 420px) {
    font-size: var(--base-text-size-2xlarge);
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const Title = styled.h1`
  font-weight: var(--base-text-weight-2xbold);
  font-size: var(--base-text-size-4xlarge);
  color: var(--main-color-orange);

  @media only screen and (max-width: 420px) {
    font-size: var(--base-text-size-2xlarge);
  }
`;

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

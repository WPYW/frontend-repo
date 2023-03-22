import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 6px;
`;

export const Title = styled.h1`
  font-weight: var(--base-text-weight-2xbold);
  font-family: 'poppin', 'sans-serif';
  font-size: 20px;
  color: var(--main-color-orange);
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

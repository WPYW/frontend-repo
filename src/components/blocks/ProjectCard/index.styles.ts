import styled, { css } from 'styled-components';
import { DescriptionProps } from './index.types';

export const Wrapper = styled.a`
  all: unset;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 20px 20px 16px;

  background-color: rgb(255, 255, 255);

  border-radius: 24px;

  transition: all 0.2s ease-in-out 0s;

  cursor: pointer;

  &:hover {
    background-color: rgb(253, 253, 255);
    box-shadow: rgb(0 0 0 / 12%) 6px 8px 16px;
    transform: translateY(-2px);
  }
`;

export const CardHeaderWrapper = styled.div``;

export const CardBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Created = styled.span`
  font-weight: var(--base-text-weight-normal);
  font-size: var(--base-text-size-small);
  color: var(--card-created-text-color);

  margin-top: 4px;
`;

export const Title = styled.h1`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-3xlarge);
  /* color: var(--main-color-orange); */
`;

export const Description = styled.p<Pick<DescriptionProps, 'overlay'>>`
  font-weight: var(--base-text-weight-normal);
  font-size: var(--base-text-size-medium);
  color: var(--card-description-text-color);

  line-height: 1.5em;

  word-break: break-word;
  white-space: pre-line;

  position: relative;

  overflow: hidden;

  ${(props) =>
    props.overlay &&
    css`
      max-height: 108px;

      ::after {
        content: '';

        display: block;
        width: 100%;
        height: 72px;

        position: absolute;
        bottom: 0px;

        background-image: linear-gradient(
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.8) 60%,
          rgb(255, 255, 255) 100%
        );
      }
    `}
`;

export const CardFooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

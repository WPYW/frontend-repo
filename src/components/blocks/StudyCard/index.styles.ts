import styled, { css } from 'styled-components';
import { DescriptionProps } from './index.types';
import { ReactComponent as ViewsIcon } from '@/assets/views-icon.svg';
import { ReactComponent as LikesIcon } from '@/assets/likes-icon.svg';

export const Wrapper = styled.a`
  all: unset;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 20px 20px 16px;

  background-color: var(--card-background-color);

  border-radius: 24px;

  transition: all 0.2s ease-in-out 0s;

  cursor: pointer;

  &:hover {
    background-color: var(--card-background-color-hover);
    box-shadow: var(--card-background-box-shadow);
    transform: translateY(-2px);
  }
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
  color: var(--card-title-text-color);
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

        background-image: var(--card-overlay-layer);
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

export const Dday = styled.h2`
  background-color: #ff7425;
  border-radius: 5px;
  padding: 10px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const Views = styled(ViewsIcon)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Likes = styled(LikesIcon)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

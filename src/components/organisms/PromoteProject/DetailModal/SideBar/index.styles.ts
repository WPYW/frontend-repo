import styled from 'styled-components';

import { ReactComponent as GitHubLogo } from '@/assets/github-mark.svg';
import { ReactComponent as DemoSiteIcon } from '@/assets/demosite-icon.svg';
import { ReactComponent as Like } from '@/assets/likes-icon.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 40vh;
  right: 2vw;

  @media screen and (max-width: 420px) {
    height: auto;

    top: auto;
    bottom: 10px;
    right: 10px;
  }
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 16px 8px;
  border-radius: 20px;

  background-color: #c4c4c4;

  @media screen and (max-width: 420px) {
    flex-direction: row;
    padding: 10px 12px;
  }
`;

export const Github = styled(GitHubLogo)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  fill: #24292f;

  &:hover {
    fill: rgba(0, 0, 0, 0.5);
  }
`;

export const DemoSite = styled(DemoSiteIcon)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  fill: #24292f;

  &:hover {
    fill: rgba(0, 0, 0, 0.5);
  }
`;

export const LikeButton = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  position: relative;
  width: 40px;
  height: 40px;

  cursor: pointer;

  @media screen and (max-width: 420px) {
    width: 20px;
    height: 20px;
  }
`;

export const LikeIcon = styled(Like)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  fill: #ec5354;

  &:hover {
    fill: #df7c7d;
  }
`;

export const LikeCount = styled.div`
  position: absolute;
  bottom: -12px;

  font-weight: 500;
  font-size: 1.2rem;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

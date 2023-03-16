import styled from 'styled-components';

import { ReactComponent as GitHubLogo } from '@/assets/github-mark.svg';
import { ReactComponent as DemoSiteIcon } from '@/assets/demosite-icon.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0px;
  right: 174px;

  height: 100%;

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

  padding: 10px 8px;
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

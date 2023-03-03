import styled, { css } from 'styled-components';
import { SideBarProps } from './index.types';

import { ReactComponent as Icon } from '@/assets/sidebar-icon.svg';

export const Wrapper = styled.nav`
  position: sticky;
  top: 92px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: #848484;

  cursor: pointer;

  margin-bottom: 10px;
`;

export const SideBarIcon = styled(Icon)<SideBarProps>`
  width: 24px;
  height: 24px;

  fill: rgb(196, 196, 196);
  transform: rotate(90deg);

  transition: all 0.3s ease-in-out 0s;

  ${(props) =>
    props.$headerClicked &&
    css`
      transform: rotate(0deg);
    `}
`;

export const SubWrapper = styled.div<SideBarProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  overflow: auto;

  padding-right: 8px;
  padding-bottom: 10px;

  border-bottom: 1px solid var(--side-bar-border-bottom-color);

  ${(props) =>
    props.$headerClicked &&
    css`
      height: 0px;
      border-bottom: 0px;
      padding-bottom: 0px;
    `}
`;

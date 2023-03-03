import styled from 'styled-components';
import { SideBarItemProps } from './index.types';

export const Wrapper = styled.button<Pick<SideBarItemProps, 'clicked'>>`
  border: none;
  background: none;

  font-size: var(--base-text-size-small);
  color: var(--side-bar-item-text-color);
  text-align: left;

  border-radius: 10px;

  width: 100%;

  padding: 8px 12px 8px 24px;

  cursor: pointer;

  &:hover {
    background-color: var(--side-bar-item-background-color-hover);
  }

  background-color: ${(props) => props.clicked && 'var(--side-bar-item-background-color-hover)'};
`;

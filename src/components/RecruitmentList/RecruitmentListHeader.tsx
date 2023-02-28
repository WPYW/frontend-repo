import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as SearchBarIcon } from '@/assets/search-icon.svg';

interface IProjectListHeaderProps {
  onSetOrdering: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSetSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function RecruitmentListHeader({ onSetOrdering, onSetSearch }: IProjectListHeaderProps) {
  const [clickedNavigationItemId, setClickedNavigationItemId] = useState('created');
  return (
    <RecruitmentListHeaderWrapper>
      <NavigationBar>
        <NavigationItem
          id="created"
          onClick={(event) => {
            onSetOrdering(event);
            setClickedNavigationItemId((event.target as HTMLElement).id);
          }}
          data-clickednavigationitemid={clickedNavigationItemId}
        >
          최신
        </NavigationItem>
        <NavigationItem
          id="frontend"
          onClick={(event) => {
            onSetOrdering(event);
            setClickedNavigationItemId((event.target as HTMLElement).id);
          }}
          data-clickednavigationitemid={clickedNavigationItemId}
        >
          프론트엔드
        </NavigationItem>
        <NavigationItem
          id="backend"
          onClick={(event) => {
            onSetOrdering(event);
            setClickedNavigationItemId((event.target as HTMLElement).id);
          }}
          data-clickednavigationitemid={clickedNavigationItemId}
        >
          백엔드
        </NavigationItem>
        <NavigationItem
          id="mobile"
          onClick={(event) => {
            onSetOrdering(event);
            setClickedNavigationItemId((event.target as HTMLElement).id);
          }}
          data-clickednavigationitemid={clickedNavigationItemId}
        >
          모바일
        </NavigationItem>
        <NavigationItem
          id="etc"
          onClick={(event) => {
            onSetOrdering(event);
            setClickedNavigationItemId((event.target as HTMLElement).id);
          }}
          data-clickednavigationitemid={clickedNavigationItemId}
        >
          기타
        </NavigationItem>
      </NavigationBar>
      <SearchBarWrapper>
        <SearchBarIcon />
        <SearchBar placeholder="최고의 팀을 찾아보세요~" onChange={onSetSearch} />
      </SearchBarWrapper>
    </RecruitmentListHeaderWrapper>
  );
}

const RecruitmentListHeaderWrapper = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const NavigationBar = styled.nav`
  width: 100%;
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 900px) {
    gap: 10px;
  }
`;

const NavigationItem = styled.button<{ 'data-clickednavigationitemid': string }>`
  all: unset;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: #848484;

  padding: 16px;

  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-medium);
  }

  ${(props) =>
    props.id === props['data-clickednavigationitemid'] &&
    css`
      color: var(--mainpage-navigation-bar-clicked-item-text-color);

      &::after {
        content: '';

        display: block;
        width: 100%;
        height: 4px;
        background-color: var(--main-color-orange);

        animation: ${NavigationItemUnderlineAnimation} 0.6s;
      }
    `}
`;

const NavigationItemUnderlineAnimation = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

const SearchBarWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px 16px;

  background-color: var(--mainpage-searchbar-background-color);

  border-radius: 10px;
`;

const SearchBar = styled.input`
  all: unset;

  color: #333333;

  ::placeholder {
    color: var(--mainpage-searchbar-placeholder-text-color);
  }
`;

import React from 'react';
import styled from 'styled-components';

import { ReactComponent as SearchBarIcon } from '@/assets/search-icon.svg';

interface IProjectListHeaderProps {
  onSetOrdering: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSetSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ProjectListHeader({ onSetOrdering, onSetSearch }: IProjectListHeaderProps) {
  return (
    <ProjectListHeaderWrapper>
      <NavigationBar>
        <NavigationItem id="created" onClick={onSetOrdering}>
          최신순
        </NavigationItem>
        <NavigationItem id="views" onClick={onSetOrdering}>
          조회수순
        </NavigationItem>
        <NavigationItem id="like" onClick={onSetOrdering}>
          좋아요순
        </NavigationItem>
      </NavigationBar>
      <SearchBarWrapper>
        <SearchBarIcon />
        <SearchBar placeholder="어떤 프로젝트 찾으시나요?" onChange={onSetSearch} />
      </SearchBarWrapper>
    </ProjectListHeaderWrapper>
  );
}

const ProjectListHeaderWrapper = styled.div`
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
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
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 900px) and (max-width: 1200px) {
  }
`;

const NavigationItem = styled.button`
  all: unset;

  color: var(--mainpage-navigation-bar-item-text-color);

  background-color: var(--mainpage-navigation-bar-item-background-color);

  border-radius: 8px;

  padding: 10px 20px;

  cursor: pointer;
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

  color: var(--mainpage-searchbar-text-color);

  ::placeholder {
    color: var(--mainpage-searchbar-placeholder-text-color);
  }
`;

import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as SearchBarIcon } from '@/assets/search-icon.svg';
import reactLogo from '@/assets/logo-react.svg';
import springLogo from '@/assets/logo-spring.svg';
import ec2Logo from '@/assets/logo-ec2.svg';
import jsLogo from '@/assets/logo-js.svg';

interface IProjectListHeaderProps {
  onSetOrdering: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSetSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface techProps {
  toggleClicked: boolean;
}

export function RecruitmentListHeader({ onSetOrdering, onSetSearch }: IProjectListHeaderProps) {
  const [clickedNavigationItemId, setClickedNavigationItemId] = useState('created');
  const [clickTechItemId, setClickTechItemId] = useState<string[]>([]);

  const techList = [
    { id: 'react', name: 'React', image: reactLogo, toggleClicked: false },
    { id: 'spring', name: 'Spring', image: springLogo, toggleClicked: false },
    { id: 'ec2', name: 'EC2', image: ec2Logo, toggleClicked: false },
    { id: 'javascript', name: 'Javascript', image: jsLogo, toggleClicked: false },
  ];

  const [selectedTech, setSelectedTech] = useState(Array(techList.length).fill(false));

  //어.. 기술스택을 배열에 저장해서 프롭에 전달해서 map으로 분리해서 깔끔하게 함.

  const handleClick = (name: string, index: number) => {
    setSelectedTech((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setClickTechItemId((prevState) => {
      const newState = [...prevState];
      if (!newState.includes(name)) {
        newState.push(name);
      } else {
        const index = newState.indexOf(name);
        newState.splice(index, 1);
      }
      return newState;
    });
  };

  console.log(clickTechItemId);

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
      <RecruitTechWrapper>
        {techList.map((tech, index) => (
          <RecruitTechItem
            key={tech.id}
            toggleClicked={selectedTech[index]}
            onClick={() => handleClick(tech.id, index)}
          >
            <RecruitTechImg src={tech.image} />
            <span>{tech.name}</span>
          </RecruitTechItem>
        ))}
      </RecruitTechWrapper>
    </RecruitmentListHeaderWrapper>
  );
}

const RecruitmentListHeaderWrapper = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const RecruitTechWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  gap: 10px;
  padding-top: 20px;
`;

const RecruitTechImg = styled.img`
  display: flex;
  float: left;
  margin-top: 2px;
  margin-left: 5px;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const RecruitTechItem = styled.button<techProps>`
  all: unset;
  width: 150px;
  border-radius: 30px;
  background-color: #f2f2f2;
  font-size: var(--base-text-size-large);
  font-family: sans-serif;
  padding: 10px;
  cursor: pointer;
  color: #181818;

  &:hover {
    background-color: #ff9b25;
    color: white;
  }

  ${(props) =>
    props.toggleClicked &&
    css`
      background-color: #ff9b25;
      color: white;
    `};
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

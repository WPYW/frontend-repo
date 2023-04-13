import React, { useState } from 'react';
import * as S from './index.styles';
import reactLogo from '@/assets/logo-react.svg';
import springLogo from '@/assets/logo-spring.svg';
import ec2Logo from '@/assets/logo-ec2.svg';
import jsLogo from '@/assets/logo-js.svg';
import { NavigationItem, SearchBar } from '@/components/atoms';
import { IProjectListHeaderProps } from './index.types';
import { useDispatch } from 'react-redux';
import { recruituploadModalOpen } from '@/stores/slices/recruitModalSlice';

export function RecruitmentListHeader({ ordering, setParams }: IProjectListHeaderProps) {
  const [clickTechItemId, setClickTechItemId] = useState<string[]>([]);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const techList = [
    { id: 'react', name: 'React', image: reactLogo, toggleClicked: false },
    { id: 'spring', name: 'Spring', image: springLogo, toggleClicked: false },
    { id: 'ec2', name: 'EC2', image: ec2Logo, toggleClicked: false },
    { id: 'javascript', name: 'Javascript', image: jsLogo, toggleClicked: false },
  ];

  const [selectedTech, setSelectedTech] = useState(Array(techList.length).fill(false));

  //어.. 기술스택을 배열에 저장해서 프롭에 전달해서 map으로 분리해서 깔끔하게 함.
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setParams((prev) => ({ ...prev, ordering: (event.target as HTMLElement).id }));
  };

  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.NavigationWrapper>
          <NavigationItem id="created" clicked={ordering === 'created'} onClick={onClickHandler}>
            최신순
          </NavigationItem>
          <NavigationItem id="frontend" clicked={ordering === 'frontend'} onClick={onClickHandler}>
            프론트엔드
          </NavigationItem>
          <NavigationItem id="backend" clicked={ordering === 'backend'} onClick={onClickHandler}>
            백엔드
          </NavigationItem>
          <NavigationItem id="mobile" clicked={ordering === 'mobile'} onClick={onClickHandler}>
            모바일
          </NavigationItem>
          <NavigationItem id="etc" clicked={ordering === 'etc'} onClick={onClickHandler}>
            기타
          </NavigationItem>
        </S.NavigationWrapper>
        <S.Button onClick={() => dispatch(recruituploadModalOpen())}>모달 테스트</S.Button>
      </S.SubWrapper>
      <SearchBar
        placeholder="최고의 팀원을 찾아보세요~"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />

      <S.RecruitTechWrapper>
        {techList.map((tech, index) => (
          <S.RecruitTechItem
            key={tech.id}
            toggleClicked={selectedTech[index]}
            onClick={() => handleClick(tech.id, index)}
          >
            <S.RecruitTechImg src={tech.image} />
            <span>{tech.name}</span>
          </S.RecruitTechItem>
        ))}
      </S.RecruitTechWrapper>
    </S.Wrapper>
  );
}

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Carousel } from './Carousel';

import { ReactComponent as ViewsIcon } from '@/assets/views-icon.svg';
import { ReactComponent as LikesIcon } from '@/assets/likes-icon.svg';
import { LoadingDots } from '../LoadingDots';

interface IProject {
  id: string;
  projectTitle: string;
  projectDescription: string;
  projectHashtag: string[];
  previewImages: string[];
  views: number;
  likes: number;
}

interface CardList {
  projectList: IProject[];
  isLoading: boolean;
}

export function CardList({ projectList, isLoading }: CardList) {
  const navigate = useNavigate();

  if (isLoading)
    return (
      <LoadingDotsWrapper>
        <LoadingDots />
      </LoadingDotsWrapper>
    );

  return (
    <CardListWrapper>
      {projectList.map((project: IProject, index: number) => {
        return (
          <CardWrapper key={index}>
            <Carousel previewImages={project.previewImages} />
            <ProjectInfoWrapper onClick={() => navigate(`/project/detail/${project.id}`)}>
              <ViewsAndLikesWrapper>
                <Views>
                  <ViewsIcon style={{ objectFit: 'cover' }} />
                  {project.views}
                </Views>
                <div style={{ border: '1px solid #BCBCBC', width: 0, height: '100%' }}></div>
                <Likes>
                  <LikesIcon style={{ objectFit: 'cover' }} />
                  {project.likes}
                </Likes>
              </ViewsAndLikesWrapper>
              <ProjectTitle>{project.projectTitle}</ProjectTitle>
              <ProjectDescription>{project.projectDescription}</ProjectDescription>
              <ProjectHashtagsWrapper>
                {project.projectHashtag.map((project, index) => {
                  if (index < 3) return <Hashtag key={index}>{project}</Hashtag>;
                })}
                {project.projectHashtag.length > 3 && (
                  <Hashtag>{`+ ${project.projectHashtag.length - 3}`}</Hashtag>
                )}
              </ProjectHashtagsWrapper>
            </ProjectInfoWrapper>
          </CardWrapper>
        );
      })}
    </CardListWrapper>
  );
}

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  padding: 30px;

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  height: 500px;

  border: 1px solid #bcbcbc;
  border-radius: 24px;

  box-shadow: 5px 10px 10px rgb(0 0 0 / 20%);

  cursor: pointer;
`;

const ProjectInfoWrapper = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  height: 50%;
`;

const ProjectTitle = styled.h1`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: var(--mainpage-cardlist-title-text-color);
`;

const ProjectDescription = styled.p`
  font-weight: var(--base-text-weight-normal);
  font-size: var(--base-text-size-medium);

  overflow: scroll;
`;

const ProjectHashtagsWrapper = styled.div`
  display: flex;
  gap: 8px;

  flex-wrap: wrap;
`;

const Hashtag = styled.div`
  padding: 4px 12px 4px 12px;

  border-radius: 12px;

  font-size: var(--base-text-size-normal);
  color: var(--mainpage-cardlist-hashtag-text-color);
  background-color: var(--mainpage-cardlist-hashtag-background-color);
`;

const ViewsAndLikesWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

const Views = styled.div`
  display: flex;
  align-items: center;

  color: var(--mainpage-cardlist-views-text-color);
`;

const Likes = styled.div`
  display: flex;
  align-items: center;

  color: var(--mainpage-cardlist-likes-text-color);
`;

const LoadingDotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

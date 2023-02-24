import React from 'react';
import styled from 'styled-components';

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
  created: string;
}

interface CardList {
  projectList: IProject[];
  isLoading: boolean;
}

export function CardList({ projectList, isLoading }: CardList) {
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
            <ProjectInfoWrapper href={`/projects/${project.id}`}>
              <ProjectTitleWrapper>
                <ProjectCreated>{project.created}</ProjectCreated>

                <ProjectTitle>{project.projectTitle}</ProjectTitle>
              </ProjectTitleWrapper>
              <ProjectDescription>{project.projectDescription}</ProjectDescription>
              <ProjectHashtagsWrapper>
                {project.projectHashtag.map((project, index) => {
                  if (index < 3) return <Hashtag key={index}>{project}</Hashtag>;
                })}
                {project.projectHashtag.length > 3 && (
                  <Hashtag>{`+ ${project.projectHashtag.length - 3}`}</Hashtag>
                )}
              </ProjectHashtagsWrapper>
              <ViewsAndLikesWrapper>
                <Views>
                  <ViewsIconWrapper>
                    <ViewsIcon style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </ViewsIconWrapper>
                  {project.views}
                </Views>
                <Likes>
                  <LikesIconWrapper>
                    <LikesIcon style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </LikesIconWrapper>
                  {project.likes}
                </Likes>
              </ViewsAndLikesWrapper>
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

  @media only screen and (min-width: 700px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid #bcbcbc;
  border-radius: 24px;

  box-shadow: 5px 10px 10px rgb(0 0 0 / 20%);

  cursor: pointer;
`;

const ProjectInfoWrapper = styled.a`
  all: unset;

  flex: 1 1 50%;

  padding: 20px 30px 30px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  @media only screen and (max-width: 600px) {
    padding: 20px 25px 20px 25px;
  }
`;

const ProjectTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectTitle = styled.h1`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: var(--mainpage-cardlist-title-text-color);

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-large);
  }
`;

const ProjectCreated = styled.div`
  font-size: var(--base-text-size-small);
  color: #999999;
`;

const ProjectDescription = styled.p`
  font-size: var(--base-text-size-normal);

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  overflow: hidden;

  min-height: 50px;

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-normal);
    min-height: 0px;
  }
`;

const ProjectHashtagsWrapper = styled.div`
  display: flex;
  gap: 8px;

  flex-wrap: wrap;
`;

const Hashtag = styled.div`
  padding: 6px 10px;

  border-radius: 12px;

  font-size: var(--base-text-size-small);
  color: var(--mainpage-cardlist-hashtag-text-color);
  background-color: var(--mainpage-cardlist-hashtag-background-color);

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-xsmall);
  }
`;

const ViewsAndLikesWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 6px;

  padding-top: 8px;

  border-top: 2px solid #e5e5e5;
`;

const Views = styled.div`
  display: flex;
  align-items: center;

  color: var(--mainpage-cardlist-views-text-color);

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-xsmall);
  }
`;

const ViewsIconWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;

  color: var(--mainpage-cardlist-likes-text-color);

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-xsmall);
  }
`;

const LikesIconWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

const LoadingDotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

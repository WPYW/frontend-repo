import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ViewsIcon } from '@/assets/views-icon.svg';
import { ReactComponent as LikesIcon } from '@/assets/likes-icon.svg';
import { BACKEND_API_URL } from '@/common/url';
import { useParams } from 'react-router-dom';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';

interface Comment {
  content: string;
  created: string;
  id: string;
  nickname: string;
}

interface IProjectDetail {
  projectTitle: string;
  githubLink: string;
  demositeLink: string;
  projectHashtags: string[];
  views: number;
  likes: number;
  comments: Comment[];
  created: string;
}

interface IProjectDetailHeader {
  projectTitle: string;
  githubLink: string;
  demositeLink: string;
  projectHashtags: string[];
  views: number;
  likes: number;
  created: string;

  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<IProjectDetail, unknown>>;
}

export function ProjectDetailHeader({
  projectTitle,
  githubLink,
  demositeLink,
  projectHashtags,
  views,
  likes,
  created,
  refetch,
}: IProjectDetailHeader) {
  const params = useParams();

  return (
    <ProjectDetailHeaderWrapper>
      <ProjectDetailHeaderSubWrapper1>
        <ProjectTitleWrapper>
          <ProjectTitle>{projectTitle}</ProjectTitle>
          <ProjectCreated>{created}</ProjectCreated>
        </ProjectTitleWrapper>
        <ButtonWrapper>
          <ProjectDetailHeaderButton
            disabled={githubLink === ''}
            onClick={() => window.open(githubLink)}
          >
            깃허브 링크
          </ProjectDetailHeaderButton>
          {demositeLink !== null && (
            <ProjectDetailHeaderButton onClick={() => window.open(demositeLink)}>
              데모 사이트
            </ProjectDetailHeaderButton>
          )}
        </ButtonWrapper>
      </ProjectDetailHeaderSubWrapper1>
      <ProjectDetailHeaderSubWrapper2>
        <HashtagsWrapper>
          {projectHashtags.map((item, index) => (
            <Hashtag key={index}>{item}</Hashtag>
          ))}
        </HashtagsWrapper>
        <ViewsAndLikesWrapper>
          <Views>
            <ViewsIcon style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            {views}
          </Views>
          <Likes
            onClick={() => {
              fetch(`${BACKEND_API_URL}/projects/${params.id}/likes/`, { method: 'PATCH' });
              refetch();
            }}
          >
            <LikesIcon style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            {likes}
          </Likes>
        </ViewsAndLikesWrapper>
      </ProjectDetailHeaderSubWrapper2>
    </ProjectDetailHeaderWrapper>
  );
}

const ProjectDetailHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media only screen and (max-width: 1200px) {
    gap: 20px;
  }
`;

const ProjectDetailHeaderSubWrapper1 = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ProjectTitleWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectTitle = styled.div`
  font-weight: var(--base-text-weight-2extrabold);
  font-size: var(--base-text-size-2xlarge);
  color: var(--detailpage-project-title-text-color);

  @media only screen and (max-width: 700px) {
    font-size: var(--base-text-size-xlarge);
  }
`;

const ProjectCreated = styled.div`
  font-weight: var(--base-text-weight-normal);
  font-size: var(--base-text-size-normal);
  color: var(--detailpage-project-created-text-color);

  align-self: flex-end;
  padding-bottom: 8px;

  @media only screen and (max-width: 700px) {
    font-size: var(--base-text-size-small);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 1200px) {
    gap: 10px;
  }
`;

const ProjectDetailHeaderButton = styled.button`
  all: unset;
  border: 2px solid;
  border-color: var(--detailpage-button-border-color);
  border-radius: 8px;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-normal);
  color: var(--detailpage-button-text-color);

  padding: 8px 16px;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: var(--detailpage-button-text-color);
  }

  @media only screen and (max-width: 700px) {
    font-size: var(--base-text-size-xsmall);
  }
`;

const ProjectDetailHeaderSubWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HashtagsWrapper = styled.div`
  display: flex;
  gap: 8px;

  flex-wrap: wrap;
`;

const Hashtag = styled.div`
  padding: 6px 12px;

  border-radius: 12px;

  font-weight: var(--base-text-weight-medium);
  font-size: var(--base-text-size-normal);
  color: var(--mainpage-cardlist-hashtag-text-color);

  background-color: var(--mainpage-cardlist-hashtag-background-color);

  @media only screen and (max-width: 700px) {
    padding: 8px 10px;

    font-size: var(--base-text-size-2xsmall);
  }
`;

const ViewsAndLikesWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Views = styled.div`
  display: flex;
  align-items: center;

  font-size: var(--base-text-size-normal);
  color: var(--mainpage-cardlist-views-text-color);

  @media only screen and (max-width: 700px) {
    font-size: var(--base-text-size-small);
  }
`;

const Likes = styled.button`
  all: unset;

  display: flex;
  align-items: center;

  font-size: var(--base-text-size-normal);
  color: var(--mainpage-cardlist-likes-text-color);

  cursor: pointer;

  @media only screen and (max-width: 700px) {
    font-size: var(--base-text-size-small);
  }
`;

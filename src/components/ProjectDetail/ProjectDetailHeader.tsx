import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ViewsIcon } from '@/assets/views-icon.svg';
import { ReactComponent as LikesIcon } from '@/assets/likes-icon.svg';

interface IProjectDetailHeader {
  projectTitle: string;
  githubLink: string;
  demositeLink: string;
  projectHashtags: string[];
  views: number;
  likes: number;
}

export function ProjectDetailHeader({
  projectTitle,
  githubLink,
  demositeLink,
  projectHashtags,
  views,
  likes,
}: IProjectDetailHeader) {
  return (
    <ProjectDetailHeaderWrapper>
      <ProjectDetailHeaderSubWrapper1>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <ButtonWrapper>
          <ProjectRepoLinkButton
            disabled={githubLink === ''}
            onClick={() => window.open(githubLink)}
          >
            깃허브 링크
          </ProjectRepoLinkButton>
          <DemoSiteLinkButton
            disabled={demositeLink === ''}
            onClick={() => window.open(demositeLink)}
          >
            데모 사이트
          </DemoSiteLinkButton>
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
            <ViewsIcon style={{ objectFit: 'cover' }} />
            {views}
          </Views>
          <div style={{ border: '1px solid #BCBCBC', width: 0 }}></div>
          <Likes>
            <LikesIcon style={{ objectFit: 'cover' }} />
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
`;

const ProjectDetailHeaderSubWrapper1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectDetailHeaderSubWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectTitle = styled.div`
  font-weight: var(--base-text-weight-2extrabold);
  font-size: var(--base-text-size-2xlarge);
  color: var(--detailpage-project-title-text-color);
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProjectRepoLinkButton = styled.button`
  border: 2px solid;
  border-color: var(--detailpage-button-border-color);
  border-radius: 8px;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-normal);
  color: var(--detailpage-button-text-color);

  padding: 8px 16px;

  background: none;

  cursor: pointer;
`;

const DemoSiteLinkButton = styled.button`
  border: 2px solid;
  border-color: var(--detailpage-button-border-color);
  border-radius: 8px;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-normal);
  color: var(--detailpage-button-text-color);

  padding: 8px 16px;

  background: none;

  cursor: pointer;
`;

const HashtagsWrapper = styled.div`
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

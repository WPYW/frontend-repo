import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { decodeBase64 } from '@/utils';

import { ReactComponent as ViewsIcon } from '@/assets/views-icon.svg';
import { ReactComponent as LikesIcon } from '@/assets/likes-icon.svg';

import { ReactComponent as CommenterImageLight } from '@/assets/commenter-image-light.svg';
import { ReactComponent as CommenterImageDark } from '@/assets/commenter-image-light.svg';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

interface IProject {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  demoSiteLink: string;
  projectHashtags: string[];
  views: number;
  likes: number;
}

export function ProjectDetail() {
  const [comment, setComment] = useState('');

  const [commentList, setCommentList] = useState<string[]>([]);

  const [project, setProject] = useState<IProject>({
    projectTitle: '',
    projectDescription: '',
    projectLink: '',
    demoSiteLink: '',
    projectHashtags: [],
    views: 0,
    likes: 0,
  });
  const params = useParams();

  const {
    projectTitle,
    projectDescription,
    projectLink,
    demoSiteLink,
    projectHashtags,
    views,
    likes,
  } = project;

  useEffect(() => {
    fetch(`/project/detail/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setProject(res.data);
        return res.data.projectLink;
      })
      .then((res) => fetchEncodedReadme(res))
      .then((res) => res.json())
      .then((res) => decodeBase64(res.content))
      .then((res) =>
        fetch('https://api.github.com/markdown', {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
          method: 'POST',
          body: JSON.stringify({ text: res }),
        }),
      )
      .then((res) => res.text())
      .then((res) => {
        const readmeViewElement = document.getElementById('readme-view');
        if (readmeViewElement !== null) {
          readmeViewElement.innerHTML = res;
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProjectDetailWrapper>
      <ProjectDetailHeaderWrapper>
        <ProjectDetailHeaderSubWrapper1>
          <ProjectTitle>{projectTitle}</ProjectTitle>
          <ButtonWrapper>
            <ProjectRepoLinkButton
              disabled={projectLink === ''}
              onClick={() => window.open(projectLink)}
            >
              깃허브 링크
            </ProjectRepoLinkButton>
            <DemoSiteLinkButton
              disabled={demoSiteLink === ''}
              onClick={() => window.open(demoSiteLink)}
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
      <ProjectDetailContentWrapper>
        <ProjectReadMeWrapper>
          <ProjectReadMe id="readme-view"></ProjectReadMe>
        </ProjectReadMeWrapper>
      </ProjectDetailContentWrapper>
      <CommentWrapper>
        <CommentCount>{`현재 ${commentList.length}개의 댓글이 있습니다.`}</CommentCount>
        <CommentInput
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="최대 100글자 입력 가능"
          maxLength={100}
          spellCheck={false}
        />
        <CommentLength>{`${comment.length}/100`}</CommentLength>
        <CommentButton
          onClick={() => {
            setCommentList((prev) => [...prev, comment]);
            setComment('');
          }}
        >
          댓글 등록
        </CommentButton>

        <CommentListWrapper>
          {commentList.map((item, index) => (
            <Comment key={index}>
              <CommenterImageWrapper>
                <CommenterImageLight
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CommenterImageWrapper>
              <CommentSubWrapper>
                <CommenterName>랜덤 사용자 이름</CommenterName>
                <CommentContent>{item}</CommentContent>
              </CommentSubWrapper>
            </Comment>
          ))}
        </CommentListWrapper>
      </CommentWrapper>
    </ProjectDetailWrapper>
  );
}

const fetchEncodedReadme = async (projectLink: string) => {
  const [repoOwner, repoName] = projectLink.replace('https://github.com/', '').split('/');

  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/readme`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status !== 200) throw new Error(`리드미 fetch 에러 발생 코드 : ${response.status}`);

  return response;
};

const ProjectDetailWrapper = styled.div`
  padding: 100px;

  display: flex;
  flex-direction: column;
  gap: 60px;
`;

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

const ProjectDetailContentWrapper = styled.div``;

const ProjectReadMeWrapper = styled.div`
  background-color: var(--detailpage-project-readme-background-color);

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const ProjectReadMe = styled.div`
  padding: 30px;

  color: var(--detailpage-project-readme-text-color);
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentCount = styled.div`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-medium);
  color: var(--detailpage-comment-count-text-color);

  margin-bottom: 20px;
`;

const CommentInput = styled.textarea`
  all: unset;

  vertical-align: top;

  color: var(--detailpage-comment-input-text-color);

  background-color: var(--detailpage-comment-input-background-color);

  padding-top: 16px;
  padding-left: 16px;

  border: 1px solid;
  border-color: var(--detailpage-comment-input-border-color);
  border-radius: 4px;

  &::placeholder {
    color: var(--detailpage-comment-input-placeholder-color);
  }
`;

const CommentLength = styled.div`
  align-self: end;

  color: var(--detailpage-comment-length-text-color);

  margin-top: 10px;
`;

const CommentButton = styled.button`
  margin-top: 20px;

  align-self: end;

  border: 2px solid;
  border-color: var(--detailpage-button-border-color);
  border-radius: 8px;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-normal);
  color: var(--detailpage-button-text-color);

  padding: 8px 30px;

  background: none;

  cursor: pointer;
`;

const CommentListWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Comment = styled.div`
  display: flex;
  gap: 20px;
`;

const CommentSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommenterImageWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const CommenterName = styled.div`
  color: var(--detailpage-commenter-name-text-color);
`;

const CommentContent = styled.div`
  color: var(--detailpage-commenter-content-text-color);
`;

import React, { useState } from 'react';
import styled from 'styled-components';

const UploadContainer = styled.article`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const TitleContainer = styled.div`
  border: 2px solid limegreen;
`;

const Title = styled.h1`
  border: 2px solid limegreen;

  font-weight: 900;
  font-size: 2rem;
`;

const DescriptionContainer = styled.div`
  border: 2px solid limegreen;
`;

const Description = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 0.8rem;

  &::after {
    content: '(깃허브 링크가 아닐 시에는 예고없이 삭제될 수 있습니다.)';
  }
`;

const FormContainer = styled.form`
  border: 2px solid limegreen;
`;

const FormInputContainer = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  border: 2px solid limegreen;
`;

const Input = styled.input`
  border: 2px solid limegreen;
`;

const SubmitButtonContainer = styled.div`
  border: 2px solid limegreen;
`;

const SubmitButton = styled.button`
  border: 2px solid limegreen;
`;

const ReadMeViewContainer = styled.div`
  border: 2px solid limegreen;
`;
const ReadMeView = styled.div`
  border: 2px solid limegreen;
`;

const HashtagItemsWrapper = styled.div`
  border: 2px solid limegreen;
`;

const HashTagItem = styled.div`
  border: 2px solid limegreen;
`;

interface IProject {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  demoSiteLink: string;
  hashtagArr: string[];
}

export function ProjectRegisterModal() {
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;
  const [project, setProject] = useState<IProject>({
    projectTitle: '',
    projectDescription: '',
    projectLink: '',
    demoSiteLink: '',
    hashtagArr: [],
  });

  const [hashtag, setHashtag] = useState('');

  // 유효성 검사 함수
  function projectInputValidator(project: IProject) {
    if (project.projectTitle === '') {
      alert('프로젝트 제목을 입력해주세요');
      return false;
    }

    if (project.projectDescription === '') {
      alert('프로젝트 설명을 입력해주세요');
      return false;
    }

    if (project.projectLink === '') {
      alert('깃허브 리포지토리 링크를 입력해주세요');
      return false;
    }

    return true;
  }

  // base64 => unicode 디코딩 함수
  function decodeUnicode(str: string) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
      window
        .atob(str)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
  }

  const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!projectInputValidator(project)) return;

    const [repoOwner, repoName] = project.projectLink.replace('https://github.com/', '').split('/');

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/readme`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((res) => decodeUnicode(res.content))
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
      .catch((err) => new Error(err));

    console.log(project);
  };

  return (
    <UploadContainer>
      <TitleContainer>
        <Title>프로젝트 등록</Title>
      </TitleContainer>
      <DescriptionContainer>
        <Description>아래에 있는 양식에 따라 깃허브 링크를 등록해주세요.</Description>
      </DescriptionContainer>
      <FormContainer>
        <FormInputContainer>
          <Label htmlFor="project-title">프로젝트 제목</Label>
          <Input
            id="project-title"
            required
            value={project.projectTitle}
            onChange={(event) =>
              setProject((prev) => {
                return { ...prev, projectTitle: event.target.value };
              })
            }
          />
        </FormInputContainer>
        <FormInputContainer>
          <Label htmlFor="project-description">프로젝트 설명</Label>
          <Input
            id="project-description"
            required
            maxLength={50}
            value={project.projectDescription}
            onChange={(event) =>
              setProject((prev) => {
                return { ...prev, projectDescription: event.target.value };
              })
            }
          />
        </FormInputContainer>
        <FormInputContainer>
          <Label htmlFor="project-link">링크</Label>
          <Input
            id="project-link"
            required
            placeholder="https://github.com/repoOwner/repoName"
            value={project.projectLink}
            onChange={(event) =>
              setProject((prev) => {
                return { ...prev, projectLink: event.target.value };
              })
            }
          />
        </FormInputContainer>
        <FormInputContainer>
          <Label htmlFor="demo-link">데모사이트 링크</Label>
          <Input
            id="demo-link"
            value={project.demoSiteLink}
            onChange={(event) =>
              setProject((prev) => {
                return { ...prev, demoSiteLink: event.target.value };
              })
            }
          />
        </FormInputContainer>
        <FormInputContainer>
          <Label htmlFor="hashtag">해시태그</Label>
          <HashtagItemsWrapper>
            {project.hashtagArr.map((item, index) => (
              <HashTagItem
                key={index}
                onClick={() => {
                  const newHashtagArr = project.hashtagArr;
                  newHashtagArr.splice(index, 1);
                  setProject((prev) => {
                    return { ...prev, hashtagArr: [...newHashtagArr] };
                  });
                }}
              >
                {item}
              </HashTagItem>
            ))}
          </HashtagItemsWrapper>
          <Input
            id="hashtag"
            required
            value={hashtag}
            onChange={(event) => setHashtag(event.target.value)}
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                setProject((prev) => {
                  return { ...prev, hashtagArr: [...prev.hashtagArr, hashtag] };
                });
                setHashtag('');
              }
            }}
          />
        </FormInputContainer>
        <SubmitButtonContainer>
          <SubmitButton type="button" onClick={onSubmitHandler}>
            제출
          </SubmitButton>
        </SubmitButtonContainer>
      </FormContainer>
      <ReadMeViewContainer>
        <ReadMeView id="readme-view"></ReadMeView>
      </ReadMeViewContainer>
    </UploadContainer>
  );
}

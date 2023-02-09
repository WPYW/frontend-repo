import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoadingDots } from '../LoadingDots';

interface IProject {
  id: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  demoSiteLink: string;
  hashtagArr: string[];
}

export function ProjectCardList() {
  const navigate = useNavigate();

  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery(
      'projectList',
      ({ pageParam = 1 }) =>
        fetch(`/project-list?page=${pageParam}`)
          .then((res) => res.json())
          .then((res) => {
            const { data, isLastPage } = res;
            return { data, nextPage: pageParam + 1, isLastPage };
          }),
      {
        getNextPageParam: (lastPage) => {
          return !lastPage.isLastPage ? lastPage.nextPage : undefined;
        },
      },
    );

  const target = useRef(null);

  useEffect(() => {
    const options = {
      threshold: [0, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    }, options);

    if (target.current !== null) {
      observer.observe(target.current);
    }
  }, []);

  return (
    <Background>
      <CardListContainer>
        <CardListWrapper>
          {data?.pages.map((group) =>
            group.data.map((item: IProject, index: number) => (
              <CardWrapper key={index + 1} onClick={() => navigate(`/project/detail/${index + 1}`)}>
                <ProjectImageWrapper>
                  <ProjectImage src="/gallery.svg" alt="" />
                </ProjectImageWrapper>
                <ProjectInfoWrapper>
                  <ProjectTitleWrapper>
                    <ProjectTitle>{item.projectTitle}</ProjectTitle>
                  </ProjectTitleWrapper>
                  <ProjectDescriptionWrapper>
                    <ProjectDescription>{item.projectDescription}</ProjectDescription>
                  </ProjectDescriptionWrapper>
                  <ProjectHashtagsWrapper>
                    {item.hashtagArr.map((item, index) => (
                      <Hashtag key={index}>{item}</Hashtag>
                    ))}
                  </ProjectHashtagsWrapper>
                </ProjectInfoWrapper>
              </CardWrapper>
            )),
          )}
        </CardListWrapper>

        <LoadingCatcher ref={target}>
          {isFetchingNextPage || status === 'loading' ? <LoadingDots /> : null}
          {!isFetching && !hasNextPage ? (
            <NoMoreProject>공유하고 싶은 프로젝트를 업로드 해주세요!</NoMoreProject>
          ) : null}
        </LoadingCatcher>
      </CardListContainer>
    </Background>
  );
}

const Background = styled.div`
  background-color: #f9f9f9;
`;

const CardListContainer = styled.div`
  max-width: 1280px;

  margin-left: auto;
  margin-right: auto;
`;

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  align-items: center;
  justify-content: center;

  padding: 64px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 700px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  height: 350px;

  border-radius: 24px;

  box-shadow: 5px 10px 10px rgb(0 0 0 / 20%);

  cursor: pointer;

  @media only screen and (max-width: 600px) {
    height: 300px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) and (max-width: 992px) {
  }
`;

const ProjectImageWrapper = styled.div`
  flex: 1 1 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #bcbcbc;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  overflow: hidden;
`;

const ProjectImage = styled.img`
  object-fit: cover;
`;

const ProjectInfoWrapper = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectTitleWrapper = styled.div``;

const ProjectTitle = styled.h1`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
`;

const ProjectDescriptionWrapper = styled.div``;

const ProjectDescription = styled.p`
  font-weight: var(--base-text-weight-normal);
  font-size: var(--base-text-size-medium);
`;

const ProjectHashtagsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const Hashtag = styled.div`
  background-color: #bcbcbc;

  padding: 4px 12px 4px 12px;

  border-radius: 12px;

  font-size: var(--base-text-size-normal);
`;

const LoadingCatcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
`;

const NoMoreProject = styled.div``;

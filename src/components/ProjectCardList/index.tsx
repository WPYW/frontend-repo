import React, { useEffect, useRef, useState } from 'react';

import { BACKEND_API_URL } from '@/common/url';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoadingDots } from '../LoadingDots';
import { Carousel } from './Carousel';

import { ReactComponent as SearchBarIcon } from '@/assets/search-icon.svg';
import { ReactComponent as ViewsIcon } from '@/assets/views-icon.svg';
import { ReactComponent as LikesIcon } from '@/assets/likes-icon.svg';

interface IProject {
  id: string;
  projectTitle: string;
  projectDescription: string;
  projectHashtag: string[];
  projectImages: string[];
  views: number;
  likes: number;
}

interface IParams {
  type: string;
  search: string;
  page: number;
}

export function ProjectCardList() {
  const navigate = useNavigate();

  const [params, setParams] = useState<IParams>({ type: 'created', search: '', page: 1 });

  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['projectList'],
      queryFn: ({
        pageParam = `${BACKEND_API_URL}/projects?ordering=${params.type}&search=${params.search}&page=1`,
      }) =>
        fetch(pageParam)
          .then((res) => res.json())
          .then((res) => {
            const { results, next } = res;
            return { results, next };
          }),

      getNextPageParam: (lastPage) => {
        return lastPage.next === null ? undefined : lastPage.next;
      },
    });

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
  }, [isFetching]);

  if (isLoading) {
    return <LoadingDots />;
  }

  return (
    <ProjectCardListWrapper>
      <NavigationBarWrapper>
        <NavigationBar>
          <NavigationItem onClick={() => setParams((prev) => ({ ...prev, type: 'created' }))}>
            최신순
          </NavigationItem>
          <NavigationItem onClick={() => setParams((prev) => ({ ...prev, type: 'views' }))}>
            조회수순
          </NavigationItem>
          <NavigationItem onClick={() => setParams((prev) => ({ ...prev, type: 'like' }))}>
            좋아요순
          </NavigationItem>
        </NavigationBar>
        <SearchBarWrapper>
          <SearchBarIcon />
          <SearchBar
            placeholder="어떤 프로젝트 찾으시나요?"
            onChange={(event) => setParams((prev) => ({ ...prev, search: event.target.value }))}
          />
        </SearchBarWrapper>
      </NavigationBarWrapper>

      <CardListWrapper>
        {data?.pages.map((group) =>
          group.results.map((item: IProject, index: number) => {
            return (
              <CardWrapper key={index}>
                <Carousel projectImages={item.projectImages} />
                <ProjectInfoWrapper onClick={() => navigate(`/project/detail/${item.id}`)}>
                  <ViewsAndLikesWrapper>
                    <Views>
                      <ViewsIcon style={{ objectFit: 'cover' }} />
                      {item.views}
                    </Views>
                    <div style={{ border: '1px solid #BCBCBC', width: 0, height: '100%' }}></div>
                    <Likes>
                      <LikesIcon style={{ objectFit: 'cover' }} />
                      {item.likes}
                    </Likes>
                  </ViewsAndLikesWrapper>
                  <ProjectTitle>{item.projectTitle}</ProjectTitle>
                  <ProjectDescription>{item.projectDescription}</ProjectDescription>
                  <ProjectHashtagsWrapper>
                    {item.projectHashtag.map((item, index) => {
                      if (index < 3) return <Hashtag key={index}>{item}</Hashtag>;
                    })}
                    {item.projectHashtag.length > 3 && (
                      <Hashtag>{`+ ${item.projectHashtag.length - 3}`}</Hashtag>
                    )}
                  </ProjectHashtagsWrapper>
                </ProjectInfoWrapper>
              </CardWrapper>
            );
          }),
        )}
      </CardListWrapper>

      <LoadingCatcher ref={target}>
        {isFetchingNextPage ? <LoadingDots /> : null}
        {!isFetching && !hasNextPage ? (
          <NoMoreProject>공유하고 싶은 프로젝트를 업로드 해주세요!</NoMoreProject>
        ) : null}
      </LoadingCatcher>
    </ProjectCardListWrapper>
  );
}

const ProjectCardListWrapper = styled.article`
  padding: 30px;
`;

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

  /* overflow: hidden; */
`;

const Hashtag = styled.div`
  padding: 4px 12px 4px 12px;

  border-radius: 12px;

  font-size: var(--base-text-size-normal);
  color: var(--mainpage-cardlist-hashtag-text-color);
  background-color: var(--mainpage-cardlist-hashtag-background-color);
`;

const LoadingCatcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
`;

const NoMoreProject = styled.div``;

const NavigationBarWrapper = styled.div`
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 900px) and (max-width: 1200px) {
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

const NavigationItem = styled.div`
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

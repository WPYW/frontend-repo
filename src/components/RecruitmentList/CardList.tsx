import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ViewsIcon } from '@/assets/views-icon.svg';
import { ReactComponent as LikesIcon } from '@/assets/likes-icon.svg';
import { LoadingDots } from '../LoadingDots';

interface IRecruit {
  id: string;
  password: number;
  recruitHashtag: [];
  recruitTech: [];
  recruitTitle: string;
  recruitDescription: string;
  recruitMember: number;
  chatLink: string;
  views: number;
  likes: number;
  created: string;
}

interface CardList {
  recruitList: IRecruit[];
  isLoading: boolean;
}

export function CardList({ recruitList, isLoading }: CardList) {
  if (isLoading)
    return (
      <LoadingDotsWrapper>
        <LoadingDots />
      </LoadingDotsWrapper>
    );

  return (
    <CardListWrapper>
      {recruitList.map((recruit: IRecruit, index: number) => {
        return (
          <CardWrapper key={index}>
            <RecruitInfoWrapper href={`/recruit/detail/${recruit.id}`}>
              <RecruitTechWrapper>
                <RecruitTech>{recruit.recruitTech}</RecruitTech>
              </RecruitTechWrapper>
              <RecruitTitleWrapper>
                <RecruitCreated>{recruit.created}</RecruitCreated>
                <RecruitTitle>{recruit.recruitTitle}|</RecruitTitle>
              </RecruitTitleWrapper>
              <RecruitDescription>{recruit.recruitDescription}</RecruitDescription>
              <RecruitHashtagsWrapper>
                {recruit.recruitHashtag.map((recruit, index) => {
                  if (index < 3) return <Hashtag key={index}>{recruit}</Hashtag>;
                })}
                {recruit.recruitHashtag.length > 3 && (
                  <Hashtag>{`+ ${recruit.recruitHashtag.length - 3}`}</Hashtag>
                )}
              </RecruitHashtagsWrapper>
              <ViewsAndLikesWrapper>
                <Views>
                  <ViewsIconWrapper>
                    <ViewsIcon style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </ViewsIconWrapper>
                  {recruit.views}
                </Views>
                <Likes>
                  <LikesIconWrapper>
                    <LikesIcon style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </LikesIconWrapper>
                  {recruit.likes}
                </Likes>
              </ViewsAndLikesWrapper>
            </RecruitInfoWrapper>
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

const RecruitInfoWrapper = styled.a`
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

const RecruitTechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const RecruitTech = styled.input``;

const RecruitTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RecruitTitle = styled.h1`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: var(--mainpage-cardlist-title-text-color);

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-large);
  }
`;

const RecruitCreated = styled.div`
  font-size: var(--base-text-size-small);
  color: #999999;
`;

const RecruitDescription = styled.p`
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

const RecruitHashtagsWrapper = styled.div`
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

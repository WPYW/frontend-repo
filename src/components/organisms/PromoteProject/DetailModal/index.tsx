import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './index.styles';

import { useProjectDetail } from './useProjectDetail';

import './index.css';

import { SideBar } from './SideBar';

import { LoadingDots } from '@/components/atoms';
import { Hashtags, RecruitModal, CommentForm } from '@/components/blocks';
import { BACKEND_API_URL } from '@/common/url';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { promoteProjectDetailModalClose } from '@/stores/slices/promoteProjectDetailModal';

export function DetailModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.promoteProjectDetailModal.isOpen);

  const params = useParams();
  const { projectDetail, readMe, refetch, isLoading } = useProjectDetail(params.id);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.innerHTML = readMe;
    }
  }, [readMe]);

  const addComment = async (comment: FormData) => {
    await fetch(`${BACKEND_API_URL}/projects/${projectDetail.id}/comments/`, {
      method: 'POST',
      body: comment,
    });
    refetch();
  };

  const navigate = useNavigate();

  return (
    <RecruitModal
      isOpen={isOpen}
      modalCloseHandler={() => {
        dispatch(promoteProjectDetailModalClose());
        navigate('/');
      }}
    >
      <S.Wrapper>
        <S.SubWrapper>
          <Hashtags hashtags={projectDetail.hashtags} />
          <S.Created>{projectDetail.created}</S.Created>
          <S.Title>{projectDetail.title}</S.Title>
          <S.Description>{projectDetail.description}</S.Description>
          {isLoading ? <LoadingDots /> : <S.ReadMe ref={ref} className="markdown-body"></S.ReadMe>}
          <CommentForm comments={projectDetail.comments} addComment={addComment} />
          <SideBar
            githubLink={projectDetail.githubLink}
            demoSiteLink={projectDetail.demositeLink}
            likes={projectDetail.likes}
          />
        </S.SubWrapper>
      </S.Wrapper>
    </RecruitModal>
  );
}

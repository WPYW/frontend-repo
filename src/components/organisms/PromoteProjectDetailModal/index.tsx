import React, { useEffect, useRef } from 'react';
import reactDom from 'react-dom';
import * as S from './index.styles';

import { usePromoteProjectDetail } from './usePromoteProjectDetail';

import './index.css';

import { Hashtags, Modal } from '@/components/blocks';
import { SideBar } from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { promoteProjectDetailModalClose } from '@/stores/slices/promoteProjectDetailModal';
import { CommentForm } from '@/components/blocks/CommentForm';
import { BACKEND_API_URL } from '@/common/url';
import { useNavigate, useParams } from 'react-router-dom';

export function PortalPromoteProjectdetailModal() {
  const modalRoot = document.getElementById('upload-root');

  if (modalRoot !== null) return reactDom.createPortal(<PromoteProjectDetailModal />, modalRoot);

  return null;
}

export function PromoteProjectDetailModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.promoteProjectDetailModal.isOpen);

  const params = useParams();
  const { projectDetail, readMe, refetch } = usePromoteProjectDetail(params.id);

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
    <Modal
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
          <S.ReadMe ref={ref} className="markdown-body"></S.ReadMe>
          <CommentForm comments={projectDetail.comments} addComment={addComment} />
          <SideBar
            githubLink={projectDetail.githubLink}
            demoSiteLink={projectDetail.demositeLink}
          />
        </S.SubWrapper>
      </S.Wrapper>
    </Modal>
  );
}

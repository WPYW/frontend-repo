import React, { useEffect, useState } from 'react';
import { BACKEND_API_URL } from '@/common/url';
import * as S from './index.styles';
import { CardListProps, StudyData } from './index.types';
import { StudyCard } from '../StudyCard';

export function StudyCardList({ studys }: CardListProps) {
  // {recruits.map((recruitmentData, index) => (
  //   <div key={index}>
  //     <p>Type: {recruitmentData.recruitType}</p>
  //     <p>Title: {recruitmentData.recruitTitle}</p>
  //     <p>Description: {recruitmentData.recruitDetail}</p>
  //     <p>password: {recruitmentData.password}</p>
  //     <p>Posted Date: {recruitmentData.startDate}</p>
  //     <p>End Date: {recruitmentData.endDate}</p>
  //     <p>D-Day: {recruitmentData.deadline}</p>
  //     <p>Position: {recruitmentData.position}</p>
  //     <p>Member: {recruitmentData.recruitMember}</p>
  //     <p>HashTag: {recruitmentData.techSkill}</p>
  //     <p>ChatLink: {recruitmentData.contactInfo}</p>
  //   </div>
  // ))}
  // {projects.map((project, index) => (
  //   <ProjectCard key={index} project={project} />
  // ))}
  return (
    <S.Wrapper>
      {studys.map((studys, index) => (
        <StudyCard key={index} studys={studys} />
      ))}
    </S.Wrapper>
  );
}

export default StudyCardList;

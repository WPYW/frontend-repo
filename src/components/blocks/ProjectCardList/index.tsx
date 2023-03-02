import React from 'react';
import * as S from './index.styles';
import { CardListProps } from './index.types';

import { ProjectCard } from '../ProjectCard';

export function ProjectCardList({ projects }: CardListProps) {
  return (
    <S.Wrapper>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </S.Wrapper>
  );
}

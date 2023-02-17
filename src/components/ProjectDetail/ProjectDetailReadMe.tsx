import React, { useEffect } from 'react';
import styled from 'styled-components';

interface IProjectDetailReadMe {
  readMe?: string;
}

export function ProjectDetailReadMe({ readMe = '' }: IProjectDetailReadMe) {
  useEffect(() => {
    const readmeViewElement = document.getElementById('readme-view');
    if (readmeViewElement !== null) {
      readmeViewElement.innerHTML = readMe;
    }
  }, [readMe]);
  return (
    <ProjectReadMeWrapper>
      <ProjectReadMe id="readme-view"></ProjectReadMe>
    </ProjectReadMeWrapper>
  );
}

const ProjectReadMeWrapper = styled.div`
  background-color: var(--detailpage-project-readme-background-color);

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const ProjectReadMe = styled.div`
  padding: 30px;

  color: var(--detailpage-project-readme-text-color);
`;

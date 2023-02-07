import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProject {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  demoSiteLink: string;
  hashtagArr: string[];
}

export function ProjectCardList() {
  const [projectList, setProjectList] = useState<IProject[]>([]);
  useEffect(() => {
    fetch('/project-list')
      .then((res) => res.json())
      .then((res) => setProjectList(() => [...res.projectList]));
  }, []);

  return (
    <CardListWrapper>
      {projectList?.map((item, index) => (
        <CardWrapper key={index}>
          <ProjectTitleWrapper>{item.projectTitle}</ProjectTitleWrapper>
          <ProjectDescriptionWrapper>{item.projectDescription}</ProjectDescriptionWrapper>
          <ProjectLinkWrapper>{item.projectLink}</ProjectLinkWrapper>
          <ProjectDemoSiteLinkWrapper>{item.demoSiteLink}</ProjectDemoSiteLinkWrapper>
          <ProjectHashtagsWrapper>
            {item.hashtagArr.map((item, index) => (
              <HashtagWrapper key={index}>{item}</HashtagWrapper>
            ))}
          </ProjectHashtagsWrapper>
        </CardWrapper>
      ))}
    </CardListWrapper>
  );
}

const CardListWrapper = styled.div`
  border: 2px solid limegreen;

  /* display: flex;
  flex-wrap: wrap;
  gap: 20px; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardWrapper = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProjectTitleWrapper = styled.div`
  border: 2px solid limegreen;
`;

const ProjectDescriptionWrapper = styled.div`
  border: 2px solid limegreen;
`;

const ProjectLinkWrapper = styled.div`
  border: 2px solid limegreen;
`;

const ProjectDemoSiteLinkWrapper = styled.div`
  border: 2px solid limegreen;
`;

const ProjectHashtagsWrapper = styled.div`
  border: 2px solid limegreen;
`;

const HashtagWrapper = styled.div`
  border: 2px solid limegreen;
`;

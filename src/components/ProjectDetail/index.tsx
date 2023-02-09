import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export function ProjectDetail() {
  const [project, setProject] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`/project/detail/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setProject(res.data.projectTitle);
      });
  }, []);

  return <div>{project}</div>;
}

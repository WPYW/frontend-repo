import { useQuery } from '@tanstack/react-query';

import { GITHUB_TOKEN } from '@/common/token';
import { BACKEND_API_URL } from '@/common/url';

import { decodeBase64 } from '@/utils';

interface Comment {
  content: string;
  created: string;
  id: string;
  nickname: string;
}

interface IProjectDetail {
  projectTitle: string;
  githubLink: string;
  demositeLink: string;
  projectHashtags: string[];
  views: number;
  likes: number;
  comments: Comment[];
  created: string;
}

export function useProjectDetail(projectId = '') {
  const { data: projectDetail, refetch } = useQuery<IProjectDetail>({
    queryKey: ['projectDetail'],
    queryFn: () => fetchProjectDetail(projectId),
    initialData: {
      projectTitle: '',
      githubLink: '',
      demositeLink: '',
      projectHashtags: [],
      views: 0,
      likes: 0,
      comments: [],
      created: '',
    },
  });

  const { data: readmeOrigin } = useQuery({
    queryKey: ['readmeOrigin'],
    queryFn: () => fetchReadme(projectDetail.githubLink),
    enabled: !!projectDetail.githubLink,
  });

  const { data: readMe, isLoading } = useQuery({
    queryKey: ['readMeMarkdown'],
    queryFn: () => fetchReadMeMarkdown(readmeOrigin),
    enabled: !!readmeOrigin,
  });

  return { projectDetail, readMe, isLoading, refetch };
}

const fetchProjectDetail = async (projectId: string) => {
  const response = await fetch(`${BACKEND_API_URL}/projects/${projectId}/`);

  const projectDetail = await response.json();

  return {
    projectTitle: projectDetail.projectTitle,
    githubLink: projectDetail.githubLink,
    demositeLink: projectDetail.demositeLink,
    projectHashtags: projectDetail.projectHashtag,
    views: projectDetail.views,
    likes: projectDetail.likes,
    comments: projectDetail.comment,
    created: projectDetail.created,
  };
};

const fetchReadme = async (projectLink: string) => {
  const [repoOwner, repoName] = projectLink.replace('https://github.com/', '').split('/');

  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/readme`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status !== 200) throw new Error(`????????? fetch ?????? ?????? ?????? : ${response.status}`);

  const encodedReadme = await response.json();

  return decodeBase64(encodedReadme.content);
};

const fetchReadMeMarkdown = async (readmeOrigin = '') => {
  const response = await fetch('https://api.github.com/markdown', {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
    method: 'POST',
    body: JSON.stringify({ text: readmeOrigin }),
  });

  const readMeMarkdown = await response.text();

  return readMeMarkdown;
};

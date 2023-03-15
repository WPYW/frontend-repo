import { useQuery } from '@tanstack/react-query';

import { GITHUB_TOKEN } from '@/common/token';
import { BACKEND_API_URL } from '@/common/url';

import { decodeBase64 } from '@/utils';

interface IComment {
  nickName: string;
  created: string;
  content: string;
}

interface IProjectDetail {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  demositeLink: string;
  hashtags: string[];
  views: number;
  likes: number;
  comments: IComment[];
  created: string;
}

export function usePromoteProjectDetail(projectId = '') {
  const { data: projectDetail, refetch } = useQuery<IProjectDetail>({
    queryKey: [`projectDetail-${projectId}`],
    queryFn: async () => await fetchProjectDetail(projectId),
    initialData: {
      id: '',
      title: '',
      description: '',
      githubLink: '',
      demositeLink: '',
      hashtags: [],
      views: 0,
      likes: 0,
      comments: [],
      created: '',
    },
  });

  const { data: readmeOrigin } = useQuery({
    queryKey: [`readmeOrigin-${projectId}`],
    queryFn: () => fetchReadme(projectDetail.githubLink),
    enabled: !!projectDetail.githubLink,
  });

  const { data: readMe = '' } = useQuery({
    queryKey: [`readMeMarkdown-${projectId}`],
    queryFn: () => fetchReadMeMarkdown(readmeOrigin),
    enabled: !!readmeOrigin,
  });

  return { projectDetail, readMe, refetch };
}

const fetchProjectDetail = async (projectId: string) => {
  const response = await fetch(`${BACKEND_API_URL}/projects/${projectId}`);

  const projectDetail = await response.json();

  return {
    id: projectDetail.id,
    title: projectDetail.title,
    description: projectDetail.description,
    githubLink: projectDetail.githubLink,
    demositeLink: projectDetail.demositeLink,
    hashtags: projectDetail.hashtags,
    views: projectDetail.views,
    likes: projectDetail.likes,
    comments: projectDetail.comments,
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

  if (response.status !== 200) throw new Error(`리드미 fetch 에러 발생 코드 : ${response.status}`);

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

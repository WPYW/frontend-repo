import { useQuery } from '@tanstack/react-query';

import { GITHUB_TOKEN } from '@/common/token';
import { BACKEND_API_URL } from '@/common/url';

import { decodeBase64 } from '@/utils';

interface IProjectDetail {
  projectTitle: string;
  githubLink: string;
  demositeLink: string;
  projectHashtags: string[];
  views: number;
  likes: number;
  comments: string[];
}

export function useProjectDetail(projectId: string) {
  const { data: projectDetail } = useQuery<IProjectDetail>({
    queryKey: ['projectDetail'],
    queryFn: () =>
      fetch(`${BACKEND_API_URL}/projects/${projectId}`)
        .then((res) => res.json())
        .then((res) => {
          const commentList = [];
          for (const comment of res.comment) {
            commentList.push(comment.content);
          }
          return {
            projectTitle: res.projectTitle,
            githubLink: res.githubLink,
            demositeLink: res.demositeLink,
            projectHashtags: res.projectHashtag,
            views: res.views,
            likes: res.likes,
            comments: commentList,
          };
        }),
    initialData: {
      projectTitle: '',
      githubLink: '',
      demositeLink: '',
      projectHashtags: [],
      views: 0,
      likes: 0,
      comments: [],
    },
  });

  const githubLink = projectDetail?.githubLink || '';

  const { data: readmeOrigin } = useQuery({
    queryKey: ['readmeOrigin'],
    queryFn: () =>
      fetchEncodedReadme(githubLink)
        .then((res) => res.json())
        .then((res) => decodeBase64(res.content)),
    enabled: !!githubLink,
  });

  const { data: readMe, isLoading } = useQuery({
    queryKey: ['readMeMarkdown'],
    queryFn: () =>
      fetch('https://api.github.com/markdown', {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
        method: 'POST',
        body: JSON.stringify({ text: readmeOrigin }),
      })
        .then((res) => res.text())
        .then((res) => res),
    enabled: !!readmeOrigin,
  });

  return { projectDetail, readMe, isLoading };
}

const fetchEncodedReadme = async (projectLink: string) => {
  const [repoOwner, repoName] = projectLink.replace('https://github.com/', '').split('/');

  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/readme`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status !== 200) throw new Error(`리드미 fetch 에러 발생 코드 : ${response.status}`);

  return response;
};

import { rest } from 'msw';
import { BACKEND_API_URL } from '@/common/url';

export const projectListHandlers = [
  rest.get(`${BACKEND_API_URL}/projects`, async (req, res, ctx) => {
    const pageNum = Number(req.url.searchParams.get('page')) || 1;

    return res(ctx.status(200), ctx.delay(4000), ctx.json(getProjectListResponse[pageNum - 1]));
  }),
];

const getProjectListResponse = [
  {
    // count: 87, //number of current data
    next: 'http://localhost:8000/api/v1/projects/?page=2', //next page url
    // previous: null, //previous page url
    results: [
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
    ],
  },
  {
    // count: 87, //number of current data
    next: 'http://localhost:8000/api/v1/projects/?page=3', //next page url
    // previous: null, //previous page url
    results: [
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
    ],
  },
  {
    // count: 87, //number of current data
    next: null, //next page url
    // previous: null, //previous page url
    results: [
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
      {
        id: 'f31473c9-2362-4ddd-8b83-6283f35f54ef',
        previewImages: [
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/prp.gif',
          'https://whatprojectyouwant.s3.amazonaws.com/project_image/%7Bproject.id%7D/default_profile.png',
        ],
        projectHashtag: ['project', 'flask', 'react', 'docker'],
        projectTitle: 'PRP(for your portrait right protection)',
        projectDescription:
          '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요',
        githubLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        demositeLink: 'https://github.com/PRP-for-your-portrait-right-protection/.github',
        views: 0,
        likes: 0,
        created: '2023-02-14T05:39:39.958595Z',
      },
    ],
  },
];

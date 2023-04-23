import { setupWorker } from 'msw';
import { promoteProjectHandlers } from './promoteProject';
import { recruitProjectHandlers } from './recruitProject';
import { studyProjectHandlers } from './studyProject';
import { loginhandler } from './login';
import { signuphandler } from './signup';

export const worker = setupWorker(
  ...promoteProjectHandlers,
  ...recruitProjectHandlers,
  ...studyProjectHandlers,
  ...loginhandler,
  ...signuphandler,
);

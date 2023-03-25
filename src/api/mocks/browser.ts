import { setupWorker } from 'msw';
import { promoteProjectHandlers } from './promoteProject';
import { recruitProjectHandlers } from './recruitProject';
import { studyProjectHandlers } from './studyProject';
export const worker = setupWorker(
  ...promoteProjectHandlers,
  ...recruitProjectHandlers,
  ...studyProjectHandlers,
);

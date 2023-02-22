import { setupWorker } from 'msw';
import { projectDetailHandlers } from './projectDetailHandler';
import { projectListHandlers } from './projectListHandler';
import { projectUploadHandlers } from './projectUploadHandler';

export const worker = setupWorker(
  ...projectUploadHandlers,
  ...projectListHandlers,
  ...projectDetailHandlers,
);

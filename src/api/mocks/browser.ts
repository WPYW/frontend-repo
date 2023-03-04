import { setupWorker } from 'msw';
import { projectDetailHandlers } from './projectDetailHandler';
import { projectListHandlers } from './projectListHandler';
import { projectUploadHandlers } from './projectUploadHandler';
import { recuritmentListHandlers } from './recruitmentListHandler';

export const worker = setupWorker(
  ...projectUploadHandlers,
  ...projectListHandlers,
  ...projectDetailHandlers,
  ...recuritmentListHandlers,
);

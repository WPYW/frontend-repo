import { setupWorker } from 'msw';
import { projectDetailHandlers } from './projectDetailHandler';
import { projectListHandlers } from './projectListHandler';
import { projectUploadHandlers } from './projectUploadHandler';
import { recuritmentListHandlers } from './recruitmentListHandler';
import { recruitmentDetailHandlers } from './recruitmentDetailHandler';
import { recuritmentListHandlers } from './recruitmentListHandler';
import { recruitmentUploadHandlers } from './recruitmentUploadHandler';

export const worker = setupWorker(
  ...projectUploadHandlers,
  ...projectListHandlers,
  ...projectDetailHandlers,
  ...recuritmentListHandlers,
  ...recruitmentUploadHandlers,
  ...recruitmentDetailHandlers,
);

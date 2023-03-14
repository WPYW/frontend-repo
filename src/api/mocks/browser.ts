import { setupWorker } from 'msw';
import { recuritmentListHandlers } from './recruitmentListHandler';
import { recruitmentDetailHandlers } from './recruitmentDetailHandler';
import { recruitmentUploadHandlers } from './recruitmentUploadHandler';
import { promoteProjectHandlers } from './promoteProject';

export const worker = setupWorker(
  ...promoteProjectHandlers,
  ...recuritmentListHandlers,
  ...recruitmentUploadHandlers,
  ...recruitmentDetailHandlers,
);

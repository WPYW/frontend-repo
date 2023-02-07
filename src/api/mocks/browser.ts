import { setupWorker } from 'msw';
import { projectListHandlers } from './projectListHandler';
import { projectUploadHandlers } from './projectUploadHandler';

export const worker = setupWorker(...projectUploadHandlers, ...projectListHandlers);

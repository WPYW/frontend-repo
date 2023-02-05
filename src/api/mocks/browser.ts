import { setupWorker } from 'msw';
import { projectUploadHandlers } from './projectUploadHandler';

export const worker = setupWorker(...projectUploadHandlers);

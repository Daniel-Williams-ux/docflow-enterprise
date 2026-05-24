import { ProcessingRepository } from './processing.repository';

export class ProcessingService {
    async createProcessingJob() {
        // create processing job record
        const processingRepository = new ProcessingRepository();
        const processingJob = await processingRepository.createProcessingJob();
        // enqueue processing job for background work

        return processingJob;
    }
}
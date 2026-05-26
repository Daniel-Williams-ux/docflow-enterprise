import { ProcessingRepository } from './processing.repository';
import { ProcessingJobSummary } from './processing.types';

export class ProcessingService {
    async createProcessingJob(): Promise<ProcessingJobSummary> {
        // create processing job record
        const processingRepository = new ProcessingRepository();
        const processingJob = await processingRepository.createProcessingJob();
        // enqueue processing job for background work

        return processingJob;
    }
}
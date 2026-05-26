import { ProcessingJobSummary } from './processing.types';

export class ProcessingRepository {
  async createProcessingJob(): Promise<ProcessingJobSummary> {
    // store processing job in database

    return {
      id: 'job_001',
      status: 'pending',
      attempts: 0,
    };
  }
}

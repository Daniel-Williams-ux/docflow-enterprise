export class ProcessingRepository {
    async createProcessingJob() {
        // store processing job in database

        return {
            id: "job_001",
            status: "pending",
            attempts: 0
        }
    }
}
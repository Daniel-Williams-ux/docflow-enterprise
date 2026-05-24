import { DocumentRepository } from './document.repository';
import { ProcessingService } from '../processing/processing.service';

export class DocumentService {
    async uploadDocument(input) {
        
      // check if the user/organization has permission
      // store file through storage adapter
      
      // create a metadata record
        const documentRepository = new DocumentRepository();
        const createdDocument = await documentRepository.createDocument(input);
      
      // call processing service
        const processingService = new ProcessingService();
        const processingJob = await processingService.createProcessingJob();
      
      
      // return created document result
        return {
          document: createdDocument,
          job: processingJob,
        };
    
    }
}
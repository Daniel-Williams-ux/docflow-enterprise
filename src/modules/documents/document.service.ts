import { DocumentRepository } from './document.repository';

export class DocumentService {
    async uploadDocument() {
        
      // check if the user/organization has permission
      // store file through storage adapter
      
      // create a metadata record
        const documentRepository = new DocumentRepository();
        const createdDocument = await documentRepository.createDocument();
      
      // create a processing job record
      // enqueue background job
      
      // return created document result
        return createdDocument;
    
    }
}
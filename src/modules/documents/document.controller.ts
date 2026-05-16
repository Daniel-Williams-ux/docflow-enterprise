import { DocumentService  } from './document.service';

export class DocumentController {
    async uploadDocument() {
      // receives document input
      
      // call document service
      const documentService = new DocumentService();
      const uploadedDocument = await documentService.uploadDocument();
      
      // return response
      return uploadedDocument;
    }
}
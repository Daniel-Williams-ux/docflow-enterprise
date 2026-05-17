import { DocumentService  } from './document.service';

export class DocumentController {
    async uploadDocument() {
      // receive request input
      // validate request input against uploadDocumentSchema
      // if invalid, return validation error

      // call document service
      const documentService = new DocumentService();
      const uploadedDocument = await documentService.uploadDocument();

      // return success response
      return uploadedDocument;
    }
}
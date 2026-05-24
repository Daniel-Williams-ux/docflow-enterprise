import { DocumentService  } from './document.service';

export class DocumentController {
    async uploadDocument() {
      // receive request input
      const input = {
        documentType: "invoice",
        filename: "invoice-001.pdf",
        uploadedBy: "user_001"
      };
      // validate request input against uploadDocumentSchema
      // if invalid, return validation error

      // call document service
      const documentService = new DocumentService();
      const uploadedDocument = await documentService.uploadDocument(input);

      // return success response
      return uploadedDocument;
    }
}
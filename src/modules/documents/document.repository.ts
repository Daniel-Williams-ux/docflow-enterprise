import { UploadDocumentInput } from './document.types';

export class DocumentRepository {
  async createDocument(input: UploadDocumentInput) {
    // save document record in database

    return {
      id: 'doc_001',
      documentType: input.documentType,
      filename: input.filename,
      uploadedBy: input.uploadedBy,
      status: 'uploaded',
    };
  }
}

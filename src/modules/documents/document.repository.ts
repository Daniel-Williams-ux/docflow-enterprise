export class DocumentRepository {
    async createDocument(input) {
        // save document record in database

        return {
            id: "doc_001",
            documentType: input.documentType,
            filename: input.filename,
            uploadedBy: input.uploadedBy,
            status: "uploaded",
        };
    }
}
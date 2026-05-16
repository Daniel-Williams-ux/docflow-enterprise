export class DocumentRepository {
    async createDocument() {
        // save document record in database

        return {
            id: "doc_001",
            status: "uploaded",
        };
    }
}
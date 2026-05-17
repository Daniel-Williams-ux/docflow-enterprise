export const uploadDocumentSchema = {
  // request validation rules for POST /documents will go here
  type: 'object',
  properties: {
    documentType: { type: 'string', minLength: 1 },
    filename: { type: 'string', minLength: 1 },
    uploadedBy: { type: 'string', minLength: 1 },
  },
  required: ['documentType', 'filename', 'uploadedBy'],
  additionalProperties: false,
};
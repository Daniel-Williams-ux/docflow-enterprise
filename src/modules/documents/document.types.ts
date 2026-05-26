import { ProcessingJobSummary } from '../processing/processing.types';

export type UploadDocumentInput = {
  documentType: string;
  filename: string;
  uploadedBy: string;
};

export type UploadedDocument = {
  id: string;
  documentType: string;
  filename: string;
  uploadedBy: string;
  status: string;
};

export type UploadDocumentResult = {
  document: UploadedDocument;
  job: ProcessingJobSummary;
};

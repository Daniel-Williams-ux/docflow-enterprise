# DocFlow Enterprise

DocFlow Enterprise is a multi-tenant document processing and workflow platform for extracting, validating, reviewing, and exporting structured data from business documents.

## Project Goal

The system allows organizations to:

- upload business documents
- process documents asynchronously
- validate structured output against JSON Schemas
- route exceptions for human review
- export approved structured data to downstream systems

## MVP Scope

The first version will support:

- organization-aware access
- user authentication
- document upload
- processing job creation and status tracking
- schema creation and assignment by document type
- JSON Schema validation of extracted results
- review queue for invalid or ambiguous outputs
- reviewer approval or rejection of extracted results
- export of approved structured data

## Core Workflows

### 1. Document Intake

1. Operator uploads a document.
2. System stores the document and its metadata.
3. System creates a processing job.
4. Worker picks up the job and begins processing the document.

### 2. Validation and Exception Review

1. Worker produces structured output from the document.
2. System validates the structured output against the assigned JSON Schema.
3. If validation fails or output is ambiguous, system creates a review task.
4. Reviewer inspects, edits, approves, or rejects the result.

### 3. Approved Data Export

1. Reviewer or system marks the result as approved.
2. Operator or system triggers export.
3. System exports the approved structured payload to the downstream destination.
4. System stores the export status.

## Initial Module Map

- `auth`
- `organizations`
- `documents`
- `processing`
- `schemas`
- `reviews`

## Proposed Folder Structure

```txt
src/
  app/
  common/
  config/
  infrastructure/
  modules/
    auth/
    organizations/
    documents/
    processing/
    schemas/
    reviews/
  tests/
```

## Core Domain Entities

- `Organization`
- `User`
- `Document`
- `ProcessingJob`
- `SchemaDefinition`
- `ReviewTask`

## Current Phase

We are currently in Phase 1: Senior Backend Foundations.

Current focus:

- architecture layers
- module boundaries
- domain modeling
- request and response contracts
- validation strategy


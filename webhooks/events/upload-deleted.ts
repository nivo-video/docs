export interface UploadDeletedWebhookEvent {
  trigger: 'upload.deleted',
  payload: {
    id: string;
    collectionId: string;
    metadata?: Record<string, string> | null;
  },
}
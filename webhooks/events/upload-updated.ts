export interface UploadUpdatedWebhookEvent {
  trigger: 'upload.updated',
  payload: {
    id: string;
    title: string;
    description: string | null;
    duration: number;
    collectionId: string;
    folderId?: string | null;
    externalId?: string | null;
    streamUrl?: string | null;
    tags: string[];
    metadata?: Record<string, string> | null;
  },
}
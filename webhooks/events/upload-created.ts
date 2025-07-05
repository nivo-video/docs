export interface UploadCreatedWebhookEvent {
  trigger: 'upload.created',
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
export interface UploadTranscriptionCreatedWebhookEvent {
  trigger: 'upload.transcription.created',
  payload: {
    id: string;
    uploadId: string;
    collectionId: string;
    metadata: Record<string, string> | null;
    text: string;
    segments: {
      text: string;
      timestamp: [number, number];
    }[];
  },
}
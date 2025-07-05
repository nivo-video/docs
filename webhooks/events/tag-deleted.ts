export interface TagDeletedWebhookEvent {
  trigger: 'tag.deleted',
  payload: {
    slug: string;
  },
}
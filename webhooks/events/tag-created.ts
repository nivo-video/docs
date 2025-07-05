export interface TagCreatedWebhookEvent {
  trigger: 'tag.created',
  payload: {
    slug: string;
  },
}
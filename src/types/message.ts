export type MessageOwner = 'user' | 'agent';

export type MessageProps = {
  value?: string;
  owner?: MessageOwner;
  avatar?: string;
  audio?: string;
};

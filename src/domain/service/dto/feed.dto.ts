export type FeedListItem = {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author: { id: number; name: string };
  images: { imageUrl: string }[];
  video: { videoUrl: string } | null;
  likes: {
    id: number;
    name: string;
  }[];
  comments: {
    id: number;
    content: string;
    commenter: {
      id: number;
      name: string;
    };
  }[];
};

export type FeedListItemWithcount = FeedListItem & {
  likesCount: number;
  commentsCount: number;
};

export type FeedsListDto = FeedListItemWithcount[];

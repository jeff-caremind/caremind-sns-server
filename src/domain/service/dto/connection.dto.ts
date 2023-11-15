export type ConnectionDto = {
  userId: number;
  connectionId: number;
  message?: string;
};

export type ConnectionWithUsersDto = {
  userId: number;
  connectedUserId: number;
  message?: string;
};

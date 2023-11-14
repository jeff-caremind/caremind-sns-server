import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export type ConnectionsDto = {
  id: number;
  isAccepted: boolean;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  connectedUser: UserVo;
}[];

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

export type LoginDto = {
  token: string;
  user: UserInfo;
};

export type UserInfo = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
};

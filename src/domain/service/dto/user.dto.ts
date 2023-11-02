export type LoginResponseDto = {
  token: string;
  user: UserInfo;
};

export type UserInfo = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
};

export type SignUpRequestDto = {
  name?: string;
  email: string;
  password: string;
};

export interface LoginDto {
  token: string;
  user: UserInfo;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

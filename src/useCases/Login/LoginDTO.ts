export interface ILoginRequestDTO {
  email: string;
  password: string;
}

export interface ISigned {
  token: string;
  name: string;
  code: string;
}
import { UserStateEnum } from "../../entities/UserStateEnum";

export interface FindUserDTO {
  id: string;
  name: string;
  email: string;
  status: UserStateEnum;
}
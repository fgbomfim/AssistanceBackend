import { User } from "../entities/User";

export interface IUserRepository {
  auth(email: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
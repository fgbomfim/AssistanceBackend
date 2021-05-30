import { User } from "../entities/User";

export interface IUserRepository {
  auth(email: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
  active(id: string): Promise<void>;
  find(page: number, size: number): Promise<User[]>;
}
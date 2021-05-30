import { Knex } from "knex";
import { User } from "../../entities/User";
import { UserStateEnum } from "../../entities/UserStateEnum";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  constructor(
    private db: Knex
  ) { }

  async active(id: string): Promise<void> {
    try {
      await this.db('users').update('status', UserStateEnum.ACTIVE).where('id', id);
    } catch (error) {
      return Promise.reject('Error when update user');
    }
  }

  async auth(email: string): Promise<User> {
    return await this.db<User>('users')
                        .where('email', email)
                        .first();
  }

  async findByEmail(email: string): Promise<User> {
    return this.db('users').where('email', email).select<User>();
  }

  async find(page: number, size: number): Promise<User[]> {
    const offset = (page - 1) * size;

    return await this.db('users').limit(size).offset(offset).select('users.id', 'users.name', 'users.email', 'users.status');
  }


  async save({ email, id, name, password, status }: User): Promise<void> {
    try {
      await this.db('users').insert({id: id, name: name, email: email, password: password, status: status});
    } catch (e) {
      return Promise.reject('Error when insert user');
    }
  }

}
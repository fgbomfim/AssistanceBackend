import { Knex } from "knex";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUserRepository {
  constructor(
    private db: Knex
  ) { }

  async findByEmail(email: string): Promise<User> {
    return this.db('users').where('email', email).select<User>();
  }

  async save({ email, id, name, password }: User): Promise<void> {
    try {
      await this.db('users').insert({id: id, name: name, email: email, password: password});
    } catch (e) {
      return Promise.reject('Error when insert user');
    }
  }

}
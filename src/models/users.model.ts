import User from "../types/user.type";
import connect from "../database";
import { RowDataPacket } from "mysql2";
import { promises } from "dns";
class UserModel {
  //create a new user
  async create(user: User): Promise<any> {
    //open connection
    const conn = await connect();
    //run query
    const sql = `insert into users (email, user_name,first_name, last_name, password)
        values (?, ?, ?, ?, ?)`;
    const result = await conn.query(sql, [
      user.email,
      user.user_name,
      user.first_name,
      user.last_name,
      user.password,
    ]);
    //return created user
    return result[0];
  }

  //get all users
  async getMany() {
    const conn = await connect();

    const sql = `select user_name, email, first_name, last_name
    from users`;
    const result = await conn.query(sql);

    return result[0];
  }

  //get specific user
  async getOne(id: string) {
    const conn = await connect();

    const sql = `select user_name, email, first_name, last_name
    from users
    where id = ?`;
    const result = await conn.query(sql, [id]);

    return result[0];
  }

  // update a user
  async updateOne(user: User, id: string) {
    const conn = await connect();

    const sql = `update users
    set user_name = ?, email = ? , first_name = ?, last_name = ?, password= ?
    where id = ?`;

    const result =await conn.query(sql, [
      user.user_name,
      user.email,
      user.first_name,
      user.last_name,
      user.password,
      id,
    ]);

    return result;
  }

  //delete a user
  async deleteOne(id: string): Promise<void> {
    const conn = await connect();

    const sql = `delete from users where id = ?`;
   await conn.query(sql, [id]);
  }
}

export default UserModel;

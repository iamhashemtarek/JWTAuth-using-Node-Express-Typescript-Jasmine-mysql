import User from "../types/user.type";
import connect from "../database";

class UserModel {
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
}

export default UserModel;

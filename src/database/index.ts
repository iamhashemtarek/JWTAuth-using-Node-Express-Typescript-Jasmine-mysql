import { createPool, Pool } from "mysql2/promise";

let pool: Pool | undefined = undefined;
export default function connect(): Pool {
  // If the pool was already created, return it instead of creating a new one.
  if (typeof pool !== "undefined") {
    return pool;
  }

  // pool configurations and creation
  pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  pool.on("connection", () => {
    console.log("connected to db");
  });
  pool.on("release", () => {
    console.log("released");
  });
  return pool;
}

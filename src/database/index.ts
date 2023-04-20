import { createPool } from "mysql2/promise";

export default  function connect() {
    const pool =  createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })

    pool.on('connection', () => {
        console.log('connected to db');
    })
    pool.on('release', () => {
        console.log('released');
        
    })
    return pool
}

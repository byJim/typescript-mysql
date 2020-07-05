import { createPool } from 'mysql2/promise';

 export  async function connect(){

    const connection =  await createPool({
        host:'localhost',
        database:'node_mysql_ts',
        user:'jimbo',
        password: '784995687',
        connectionLimit: 10
    })

     return connection;
}

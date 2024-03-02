import mysql2 from 'mysql2';

export const connection = mysql2.createConnection({
  host: 'db',
  user: 'user',
  password: 'password',
  database: 'mydatabase'
});

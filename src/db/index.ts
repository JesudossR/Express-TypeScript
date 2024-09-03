import mysql from "mysql2";
import dbConfig from "../config/db.config";
import { name2 } from "../config/db.config";
{
    console.log("dbindex");
}
export default mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
console.log(name2);
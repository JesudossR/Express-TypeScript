import { RowDataPacket } from "mysql2"
{
    console.log("tutorial model");
}
export default interface Tutorial extends RowDataPacket {
  id?: number;
  title?: string;
  description?: string;
  published?: boolean;
}
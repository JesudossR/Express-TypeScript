import { Request, Response } from "express";

{
  console.log("homecontroller")
}

export function welcome(req: Request, res: Response): Response {
  return res.json({ message: "Welcome to bezkoder application." });
}
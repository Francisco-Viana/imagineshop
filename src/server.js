import "dotenv/config";
import express from "express";

import { UserService, UserService } from "./services/user-services.js";

const app = express();
const port = 3333;

app.get("/", async (req, res) => {
  const UserService = new UserService();

  const user = {
    name: "Francisco",
    email: "francisco@imagine.com.br",
    password: "123456",
  };

  await userService.add(user);

  res.send("IMAGINE SHOP");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

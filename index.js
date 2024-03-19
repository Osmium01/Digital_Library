import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import db from "./db.js";
import user from "./models/users.js";

import cookiePaser from "cookie-parser";
import { checkForAuthenticationCookie } from "./middlewares/authentication.js";
import path from "path";

import userRoute from "./routes/user.js";

db();
const app = express();

app.set("view engine", "ejs");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));


const PORT = 3000;

app.get("/", async (req, res) => {
  const allBlogs = await user.find({});
  res.render("index", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.use("/user", userRoute);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

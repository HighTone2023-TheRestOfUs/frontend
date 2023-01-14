import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.listen(process.env.LISTEN_PORT, () => {
  console.log("server start", process.env.LISTEN_PORT);
});

app.get("/", function (req, res) {
  res.send("hello world");
});

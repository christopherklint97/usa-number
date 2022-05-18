import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import { smsRouter } from "./sms";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

export { app };

app.get("/", (_, res) => {
  res.send("<h1>Welcome to my phone numbers</h1>");
});

app.use("/sms", smsRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

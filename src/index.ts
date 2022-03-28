import "dotenv/config";
import express from "express";

export const app = express();
const PORT = 8000;

app.get("/", (_, res) => {
  res.send("<h1>Welcome to my USA phone number</h1>");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

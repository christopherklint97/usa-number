import express from "express";
import createTwilioClient from "twilio";

const app = express();
const PORT = 8000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = createTwilioClient(accountSid, authToken);

app.get("/", (req, res) => {
  twilioClient.messages
    .create({
      body: "This is the ship that made the Kessel Run in fourteen parsecs?",
      from: "+15017122661",
      to: "+15558675310",
    })
    .then((message) => console.log(message.sid));
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

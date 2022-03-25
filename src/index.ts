import "dotenv/config";
import express from "express";
import createTwilioClient, { twiml } from "twilio";

const app = express();
const PORT = 8000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = createTwilioClient(accountSid, authToken);

app.post("/sms", (req, res) => {
  const { MessagingResponse } = twiml;
  const messagingResponse = new MessagingResponse();

  messagingResponse.message("The Robots are coming! Head for the hills!");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(messagingResponse.toString());
});

app.get("/", (req, res) => {
  twilioClient.messages
    .create({
      from: "whatsapp:+14155238886",
      body: "Hello there!",
      to: "whatsapp:+46765587413",
    })
    .then((message) => console.log(message.sid));
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

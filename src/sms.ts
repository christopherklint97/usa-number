import "dotenv/config";
import { app } from "index";
import createTwilioClient, { twiml } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = createTwilioClient(accountSid, authToken);

app.post("/sms", (_, res) => {
  const { MessagingResponse } = twiml;
  const messagingResponse = new MessagingResponse();

  messagingResponse.message("The Robots are coming! Head for the hills!");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(messagingResponse.toString());
});

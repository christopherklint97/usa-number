import "dotenv/config";
import { Router } from "express";
import sendgrid from "@sendgrid/mail";

const sendgridApiKey = process.env.SENDGRID_API_KEY;
sendgrid.setApiKey(sendgridApiKey || "");

const router = Router();

router.post("/", async (req, res) => {
  const mail = {
    to: "christopher.klint@gmail.com",
    from: "christopher.klint@gmail.com",
    subject: "Verification code sent to number +1-951-226-0338",
    text: req.body.Body,
  };

  try {
    await sendgrid.send(mail);
  } catch (e: any) {
    console.log("error: ", e);
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end();
});

export { router as smsRouter };

import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ObjectId } from "mongoose";
import UserModel, { ICustomer } from "./models/Customer";
import BookModel, { IBookings } from "./models/Bookings";
import { connectDB, authInfo } from "./services/db";
import nodemailer from "nodemailer";

const app: Express = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(
    `Method: ${req.method} - URL: ${req.url} - IP ${req.socket.remoteAddress}`
  );
  next();
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: authInfo,
});

contactEmail.verify((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Ready to send email");
  }
});

app.get("/booking/:id", async (req, res) => {
  const answer = await BookModel.findById(req.params.id);

  res.send(answer);
});

app.post("/booking", async (req, res) => {
  console.log(req.body);

  const userInfo: object = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };

  if (await UserModel.findOne(userInfo)) {
    const user: mongoose.Document | null = await UserModel.findOne(userInfo);
    const answer = await BookModel.create({
      information: user,
      persons: parseInt(req.body.persons),
      date: req.body.date,
      time: req.body.time,
    });
    const mail = {
      from: "Restaurant 10",
      to: answer.information.email,
      subject: "Confirmed booking",
      html: `<h1> Hello ${answer.information.name}</h1>
      <p>Thank you for making a reservation.</p>
      <p>We are expecting you on [${answer.date}/${answer.time}]</p>
      <p> Your booking information:</p>
      <p> Name: ${answer.information.name}</p>
      <p> Phone: ${answer.information.phone}</p>
      <p> Email: ${answer.information.email}</p>
      <p> People: ${answer.persons}</p>
      <p> We here at 10s hope you enjoy your stay!</p>
      <p> If you have any questions please contact us on the information below.</p>
      <p> Phone: 070-865-70-08 Email: group10restaurant@gmail.com</p>`,
    };

    contactEmail.sendMail(mail, (err) => {
      if (err) {
        res.json({ status: "Error" });
      } else {
        res.json({ status: "Sent" });
      }
    });
    res.send(answer);
  } else {
    await UserModel.create(userInfo);
    const user: mongoose.Document | null = await UserModel.findOne(userInfo);
    const answer = await BookModel.create({
      information: user,
      persons: parseInt(req.body.persons),
      date: req.body.date,
      time: req.body.time,
    });
    const mail = {
      from: "Restaurant 10",
      to: answer.information.email,
      subject: "Confirmed booking at 10s",
      html: `<h1> Hello ${answer.information.name}</h1>
      <p>Thank you for making a reservation.</p>
      <p>We are expecting you on [${answer.date}/${answer.time}]</p>
      <p> Your booking information:</p>
      <p> Name: ${answer.information.name}</p>
      <p> Phone: ${answer.information.phone}</p>
      <p> Email: ${answer.information.email}</p>
      <p> People: ${answer.persons}</p>
      <p> We here at 10s hope you enjoy your stay!</p>
      <p> If you have any questions please contact us on the information below.</p>
      <p> Phone: 070-865-70-08 Email: group10restaurant@gmail.com</p>`,
    };

    contactEmail.sendMail(mail, (err) => {
      if (err) {
        res.json({ status: "Error" });
      } else {
        res.json({ status: "Sent" });
      }
    });
    res.send(answer);
  }
});

app.post("/getdate", async (req, res) => {
  const answerEight: IBookings[] = await BookModel.find({
    date: req.body.date,
    time: "18:00",
  });
  const answerTwenty: IBookings[] = await BookModel.find({
    date: req.body.date,
    time: "21:00",
  });

  const answer: object = {
    eightTeen: answerEight,
    twentyOne: answerTwenty,
  };

  res.send(answer);
});

app.listen(8000, () => {
  console.log("Live at http://localhost:8000");
});

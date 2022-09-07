import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ObjectId } from "mongoose";
import UserModel, { ICustomer } from "./models/Customer";
import BookModel, { IBookings } from "./models/Bookings";
import { connectDB } from "./services/db";
import nodemailer from "nodemailer";
import SendmailTransport from "nodemailer/lib/sendmail-transport";

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
  auth: {
    user: "group10restaurant@gmail.com",
    pass: "bzggdjinvtuqaysc",
  },
});

contactEmail.verify((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Ready to Send");
  }
});

app.get("/booking/:id", async (req, res) => {
  const answer = await BookModel.findById(req.params.id);

  res.send(answer);
});

app.post("/booking", async (req, res) => {
  console.log(req.body);

  let mail = {
    from: "",
    to: "",
    subject: "",
    text: "",
  };

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
    // .then({
    //   mail = {
    //     from: "Restaurant 10",
    //     to: "jespersimonlind@gmail.com",
    //     subject: "Confirmed booking",
    //     text: "Hello thank you for your booking",
    //   };

    //   contactEmail.sendMail(mail, (err) => {
    //     if (err) {
    //       res.json({ status: "Error" });
    //     } else {
    //       res.json({ status: "Sent" });
    //     }
    //   })
    // });
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

app.post("/booking/email/:id", async (req, res) => {
  const answer = await BookModel.findById(req.params.id);

  const mail = {
    from: "Restaurant 10",
    to: "jespersimonlind@gmail.com",
    subject: "Confirmed booking",
    text: "Hello thank you for your booking",
  };

  contactEmail.sendMail(mail, (err) => {
    if (err) {
      res.json({ status: "Error" });
    } else {
      res.json({ status: "Sent" });
    }
  });
});

app.listen(8000, () => {
  console.log("Live at http://localhost:8000");
});

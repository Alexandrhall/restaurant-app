import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ObjectId } from "mongoose";
import UserModel, { ICustomer } from "./models/Customer";
import BookModel, { IBookings } from "./models/Bookings";
import { connectDB } from "./services/db";

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

app.get("/", async (req, res) => {
  res.send("hello there");
});

app.post("/", async (req, res) => {
  res.send("post");
});

app.post("/booking", async (req, res) => {
  console.log(req.body);

  const userInfo = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };

  if (await UserModel.findOne(userInfo)) {
    const user = await UserModel.findOne(userInfo);
    await BookModel.create({
      information: user,
      persons: parseInt(req.body.persons),
      date: req.body.date,
    });
  } else {
    await UserModel.create(userInfo);
    const user = await UserModel.findOne(userInfo);
    await BookModel.create({
      information: user,
      persons: parseInt(req.body.persons),
      date: req.body.date,
    });

    res.redirect("http://localhost:3000/booking");
  }
});

app.post("/create", async (req, res) => {
  const body = req.body;
  console.log(body);

  res.send(body);
});

app.post("/test", async (req, res) => {
  console.log(req.body.date);

  const answer: IBookings[] = await BookModel.find({
    date: req.body.date,
  });
  console.log(answer.length);

  res.send(answer);
});

app.listen(8000, () => {
  console.log("Live at http://localhost:8000");
});

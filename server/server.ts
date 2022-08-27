import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ObjectId } from "mongoose";
import UserModel from "./models/Customer";
import BookModel from "./models/Bookings";
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

  if (
    await UserModel.findOne({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    })
  ) {
    const user = await UserModel.findOne({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    });
    await BookModel.create({
      information: user,
      seats: req.body.seats,
      time: req.body.date,
    });
  } else {
    await UserModel.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    });
    const user = await UserModel.findOne({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    });
    await BookModel.create({
      information: user,
      seats: req.body.seats,
      time: req.body.date,
    });

    res.redirect("http://localhost:3000/booking");
  }
});

app.post("/createbook", async (req, res) => {
  res.send("created book");
});

app.post("/test", async (req, res) => {
  await UserModel.create({
    name: "Pelle",
    phone: 123,
    email: "hehe@gmail.com",
  });
  const user = await UserModel.findOne({ name: "Pelle" });
  await BookModel.create({
    information: user,
    seats: 3,
    time: "21:00",
  });
  res.send("created");
});

app.listen(8000, () => {
  console.log("Live at http://localhost:8000");
});

import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://localhost:27017/restaurant-app"
    );
    console.log("Database is connected");
  } catch (error: any) {
    console.log(error.message);
  }
};

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
  res.send("post");
});

app.post("/createbook", async (req, res) => {
  res.send("created book");
});

// app.post("/test", async (req, res) => {
//   await TestModel.create({
//     name: "Pelle",
//     phone: 123,
//     email: "hehe@gmail.com",
//   });
//   res.send("created");
// });
app.post("/test", async (req, res) => {
  await TestModel.create({
    information: {
      name: "Pelle",
      phone: 123,
      email: "hehe@gmail.com",
    },
    seats: 3,
    time: "21:00",
  });
  res.send("created");
});

app.listen(8000, () => {
  console.log("Live at http://localhost:8000");
});

const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
});

const bookingSchema = new mongoose.Schema({
  information: Object,
  seats: Number,
  time: String,
});

const TestModel = mongoose.model("", bookingSchema, "bookings");

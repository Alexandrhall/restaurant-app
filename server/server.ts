import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

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

// const client: MongoClient = new MongoClient(
//   "mongodb://localhost:27017/?readPreference=primary"
// );

// const client2 = mongoose.connect(
//   "mongodb://localhost:27017/?readPreference=primary"
// );

const app: Express = express();

// mongoose.createConnection();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

// app.use((req, res, next) => {
//   console.log(
//     `Method: ${req.method} - URL: ${req.url} - IP ${req.socket.remoteAddress}`
//   );

//   res.on("finish", () => {});
//   console.log(
//     `Method: ${req.method} - URL: ${req.url} - IP ${req.socket.remoteAddress}`
//   );
// });

app.get("/", async (req, res) => {
  res.send("hello there");
});

app.post("/", async (req, res) => {
  res.send("post");
});

app.post("/createbook", async (req, res) => {
  res.send("created book");
});

app.post("/test", async (req, res) => {
  await TestModel.create({
    title: "Bord 1",
    seats: 6,
    time: "18:00",
  });
  res.send("created");
});

app.listen(8000, () => {
  console.log("Live at http://localhost:8000");
});

interface ICustomer {
  _id: ObjectId;
  name: string;
  phone: number;
  email: string;
}
interface IBookings {
  _id: ObjectId;
  information: ICustomer;
  persons: number;
  time: string;
}

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

const TestModel = mongoose.model("Table", userSchema, "tables");

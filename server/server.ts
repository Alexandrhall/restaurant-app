import express from "express";
import { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import mongodb, { MongoClient, ObjectId } from "mongodb";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://localhost:27017/?readPreference=primary"
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

app.get("/", async (req, res) => {
  await TestModel.create({
    name: "Test Testerson",
  });
  res.send("hello there");
});

app.post("/", async (req, res) => {
  res.send("post");
});

app.post("/createbook", async (req, res) => {
  res.send("created book");
});

app.listen(8000, () => {
  console.log("Live at http://localhost:8000");
});

interface Table {
  _id: ObjectId;
  title: string;
  seats: number;
  time: number;
}

const schema = new mongoose.Schema({
  name: String,
});
const TestModel = mongoose.model("Table", schema);

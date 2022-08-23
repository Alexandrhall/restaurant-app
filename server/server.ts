import express from "express";
import { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import mongodb, { MongoClient, ObjectId } from "mongodb";

const client: MongoClient = new MongoClient(
  "mongodb://localhost:27017/?readPreference=primary"
);

const client2 = mongoose.connect(
  "mongodb://localhost:27017/?readPreference=primary"
);

const app: Express = express();

mongoose.createConnection();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  connectDB();
  res.send("hello there");
});

app.post("/", async (req, res) => {
  res.send("post");
});

app.post("/createbook", async (req, res) => {
  res.send("created book");
});

app.post("/createJeppe", async (req, res) => {
  res.send("skapade Jeppe");
});

app.listen(8000, () => {
  console.log("Live at http://localhost:8000");
});

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

interface Book {
  _id: ObjectId;
  title: string;
  pages: number;
}

interface Loan {
  _id: ObjectId;
  name: string;
  book: Book;
}

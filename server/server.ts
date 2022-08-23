import express from "express";
import { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import mongodb, { MongoClient, ObjectId } from "mongodb";

const client: MongoClient = new MongoClient(
  "mongodb://localhost:27017/?readPreference=primary"
);

const app: Express = express();

mongoose.createConnection();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("hello there");
});

app.post("/", async (req, res) => {
  res.send("post");
});

app.post("/createbook", async (req, res) => {
  const title: string = req.body.title;
  const pages: number = parseInt(req.body.pages);

  console.log(req.body.title);

  await client.connect();

  const db: mongodb.Db = await getDb();

  await db.collection("Books").insertOne({ title, pages });

  res.send("created book");
});

app.listen(8000, () => {
  console.log("Live at http://localhost:8000");
});

async function getDb() {
  await client.connect();
  // await mongoose.connect("mongodb://localhost:27017/?readPreference=primary");

  // const db1: mongodb.Db = mongoose.get("books-loans")

  const db: mongodb.Db = client.db("books-loans");

  return db;
}

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

import mongoose, { ObjectId, StringExpression } from "mongoose";
import { ICustomer } from "./Customer";

export interface IBookings {
  _id: ObjectId;
  information: ICustomer;
  persons: number;
  date: string;
  time: string;
}

const bookingSchema = new mongoose.Schema({
  information: Object,
  persons: Number,
  date: String,
  time: String,
});

const BookModel = mongoose.model("bookings", bookingSchema, "bookings");

export default BookModel;

import mongoose, { ObjectId } from "mongoose";
import { ICustomer } from "./Customer";

export interface IBookings {
  _id: ObjectId;
  information: ICustomer;
  persons: number;
  date: string;
}

const bookingSchema = new mongoose.Schema({
  information: Object,
  persons: Number,
  date: String,
});

const BookModel = mongoose.model("bookings", bookingSchema, "bookings");

export default BookModel;

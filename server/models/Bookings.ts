import mongoose, { ObjectId } from "mongoose";
import { ICustomer } from "./Customer";

export interface IBookings {
  _id: ObjectId;
  information: ICustomer;
  seats: number;
  time: string;
}

const bookingSchema = new mongoose.Schema({
  information: Object,
  seats: Number,
  time: String,
});

const BookModel = mongoose.model("bookings", bookingSchema, "bookings");

export default BookModel;

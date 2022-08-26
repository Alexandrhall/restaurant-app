import { ObjectId } from "mongoose";
import { ICustomer } from "./ICustomer";

export interface IBookings {
  _id: ObjectId;
  information: ICustomer;
  seats: number;
  time: string;
}

import { ObjectId } from "mongoose";
import { ICustomer } from "./ICustomer";

export interface IBookings {
  _id: ObjectId;
  information: ICustomer;
  persons: number;
  date: string;
}

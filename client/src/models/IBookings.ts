import { ObjectId } from "mongoose";
import { ICustomer } from "./ICustomer";

export interface IBookings {
  _id: ObjectId;
  information: ICustomer;
  persons: number;
  date: string;
  time: string;
}

export interface IBookingAnswer {
  _id: string;
  information: {
    _id: string;
    name: string;
    phone: number;
    email: string;
  };
  persons: number;
  date: string;
  time: string;
}

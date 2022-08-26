import { ObjectId } from "mongoose";

export interface ICustomer {
  _id: ObjectId;
  name: string;
  phone: number;
  email: string;
}

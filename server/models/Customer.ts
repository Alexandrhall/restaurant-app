import mongoose, { ObjectId } from "mongoose";

export interface ICustomer {
  _id: ObjectId;
  name: string;
  phone: number;
  email: string;
}

const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
});

const UserModel = mongoose.model("customer", userSchema, "customers");

export default UserModel;

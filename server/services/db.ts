import mongoose from "mongoose";

const monogo_URL =
  "mongodb+srv://dbUser:123@cluster0.2lfc1.mongodb.net/restaurant-app";

export const authInfo = {
  user: "group10restaurant@gmail.com",
  pass: "bzggdjinvtuqaysc",
};

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(monogo_URL);
    console.log("Database is connected");
  } catch (error: any) {
    console.log(error.message);
  }
};

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://localhost:27017/restaurant-app"
    );
    console.log("Database is connected");
  } catch (error: any) {
    console.log(error.message);
  }
};

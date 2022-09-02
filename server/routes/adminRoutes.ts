import express, { Express } from "express";
import Router from "express";
import BookModel from "../models/Bookings";

const adminRouter = Router();

adminRouter.get("/bookings", async (req, res) => {
  const getBookings = await BookModel.find();
  console.log(getBookings.length);
  res.send(getBookings);
  console.log("Funkar den här jäveln?");
});

export default adminRouter;

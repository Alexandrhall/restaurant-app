import express, { Express } from "express";
import Router from "express";
import BookModel from "../models/Bookings";

const adminRouter = Router();

adminRouter.get("/bookings", async (req, res) => {
  const getBookings = await BookModel.find();
  res.send(getBookings);
});

export default adminRouter;

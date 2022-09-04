import express, { Express } from "express";
import Router from "express";
import { ObjectId } from "mongoose";
import BookModel from "../models/Bookings";

const adminRouter = Router();

adminRouter.get("/bookings", async (req, res) => {
  const getBookings = await BookModel.find();
  res.send(getBookings);
});

adminRouter.get("/bookings/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const singleBooking = await BookModel.findOne({ _id: id });
    res.status(200).send(singleBooking);
  } catch (error) {
    res.status(404);
  }
});

export default adminRouter;

import express, { Express } from "express";
import Router from "express";
import { ObjectId } from "mongoose";
import BookModel from "../models/Bookings";

const adminRouter = Router();

adminRouter.get("/bookings", async (req, res) => {
  const getBookings = await BookModel.find({ date: req.query.date });
  console.log(getBookings);
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

adminRouter.delete("/bookings/:id/delete", async (req, res) => {
  const id = req.params.id;
  const deletedBooking = await BookModel.findByIdAndDelete(id);
  res.send(deletedBooking);
});

adminRouter.put("/bookings/:id/edit", async (req, res) => {
  const id = req.params.id;
  const editBooking = await BookModel.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    date: req.body.date,
    time: req.body.time,
    persons: req.body.persons,
  });

  res.send(editBooking);
});

export default adminRouter;

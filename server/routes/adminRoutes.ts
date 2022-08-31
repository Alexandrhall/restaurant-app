const express = require("express");
const router = express.Router();

const BookModel = require("../server.ts");

// router.get("/admin", async (req, res) => {
//   const getBookings = await BookModel.find();
//   console.log(getBookings.length);
//   res.send(getBookings);
// });

module.exports = router;

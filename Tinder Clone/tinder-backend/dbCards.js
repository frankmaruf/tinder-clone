const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    name: String,
    imgUrl: String,
    job: String,
  }
  // {
  //   writeConcern: {
  //     j: true,
  //     wtimeout: 1000,
  //   },
  // }
);

module.exports = mongoose.model("cards", Schema);

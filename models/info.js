const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;
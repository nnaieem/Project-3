const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;
